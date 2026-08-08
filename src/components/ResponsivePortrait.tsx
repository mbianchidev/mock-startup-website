import Image from 'next/image'
import { profilePortrait } from '@/lib/siteConfig'

interface ResponsivePortraitProps {
  alt: string
  className?: string
  priority?: boolean
  sizes: string
}

const avifSrcSet = [
  ...profilePortrait.avif.map((image) => `${image.src} ${image.width}w`),
].join(', ')

const webpSrcSet = [
  ...profilePortrait.webp.map((image) => `${image.src} ${image.width}w`),
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
        src={profilePortrait.fallback}
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
