import Image from 'next/image'
import portraitAvif1280 from '@/assets/matteo-kcd-denmark-1280.avif'
import portraitAvif320 from '@/assets/matteo-kcd-denmark-320.avif'
import portraitAvif640 from '@/assets/matteo-kcd-denmark-640.avif'
import portraitAvif960 from '@/assets/matteo-kcd-denmark-960.avif'
import portraitWebp1280 from '@/assets/matteo-kcd-denmark-1280.webp'
import portraitWebp320 from '@/assets/matteo-kcd-denmark-320.webp'
import portraitWebp640 from '@/assets/matteo-kcd-denmark-640.webp'
import portraitWebp960 from '@/assets/matteo-kcd-denmark-960.webp'
import { profilePortrait } from '@/lib/siteConfig'
import { withBasePath } from '@/lib/siteMetadata'

interface ResponsivePortraitProps {
  alt: string
  className?: string
  priority?: boolean
  sizes: string
}

const avifSrcSet = [
  portraitAvif320,
  portraitAvif640,
  portraitAvif960,
  portraitAvif1280,
].map((image) => `${image.src} ${image.width}w`).join(', ')

const webpSrcSet = [
  portraitWebp320,
  portraitWebp640,
  portraitWebp960,
  portraitWebp1280,
].map((image) => `${image.src} ${image.width}w`).join(', ')

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
        src={withBasePath(profilePortrait.src)}
        width={profilePortrait.width}
        height={profilePortrait.height}
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
