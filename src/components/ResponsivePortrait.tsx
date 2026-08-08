import Image from 'next/image'
import portraitFallback from '@/assets/matteo-kcd-denmark.jpg'
import portraitAvif320 from '@/assets/matteo-kcd-denmark-320.avif'
import portraitAvif640 from '@/assets/matteo-kcd-denmark-640.avif'
import portraitAvif960 from '@/assets/matteo-kcd-denmark-960.avif'
import portraitAvif1280 from '@/assets/matteo-kcd-denmark-1280.avif'
import portraitWebp320 from '@/assets/matteo-kcd-denmark-320.webp'
import portraitWebp640 from '@/assets/matteo-kcd-denmark-640.webp'
import portraitWebp960 from '@/assets/matteo-kcd-denmark-960.webp'
import portraitWebp1280 from '@/assets/matteo-kcd-denmark-1280.webp'

interface ResponsivePortraitProps {
  alt: string
  className?: string
  priority?: boolean
  sizes: string
}

const avifSrcSet = [
  `${portraitAvif320.src} 320w`,
  `${portraitAvif640.src} 640w`,
  `${portraitAvif960.src} 960w`,
  `${portraitAvif1280.src} 1280w`,
].join(', ')

const webpSrcSet = [
  `${portraitWebp320.src} 320w`,
  `${portraitWebp640.src} 640w`,
  `${portraitWebp960.src} 960w`,
  `${portraitWebp1280.src} 1280w`,
].join(', ')

export function ResponsivePortrait({
  alt,
  className,
  priority = false,
  sizes,
}: ResponsivePortraitProps) {
  return (
    <picture data-responsive-portrait>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <Image
        src={portraitFallback}
        alt={alt}
        className={className}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
    </picture>
  )
}
