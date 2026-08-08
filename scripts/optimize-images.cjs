const path = require('node:path')
const sharp = require('sharp')

const source = path.join(process.cwd(), 'src/assets/matteo-kcd-denmark.jpg')
const widths = [320, 640, 960, 1280]

async function optimizePortraits() {
  await Promise.all(
    widths.flatMap((width) => [
      sharp(source)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .avif({ quality: 52, effort: 6 })
        .toFile(path.join(process.cwd(), `src/assets/matteo-kcd-denmark-${width}.avif`)),
      sharp(source)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 76, effort: 6 })
        .toFile(path.join(process.cwd(), `src/assets/matteo-kcd-denmark-${width}.webp`)),
    ])
  )

  console.log(`Generated AVIF and WebP portraits at ${widths.join(', ')}px widths.`)
}

optimizePortraits().catch((error) => {
  console.error('Failed to optimize portrait images.', error)
  process.exitCode = 1
})
