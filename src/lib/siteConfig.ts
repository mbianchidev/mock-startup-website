import portraitAvif1280 from '@/assets/matteo-kcd-denmark-1280.avif'
import portraitAvif320 from '@/assets/matteo-kcd-denmark-320.avif'
import portraitAvif640 from '@/assets/matteo-kcd-denmark-640.avif'
import portraitAvif960 from '@/assets/matteo-kcd-denmark-960.avif'
import portraitFallback from '@/assets/matteo-kcd-denmark.jpg'
import portraitWebp1280 from '@/assets/matteo-kcd-denmark-1280.webp'
import portraitWebp320 from '@/assets/matteo-kcd-denmark-320.webp'
import portraitWebp640 from '@/assets/matteo-kcd-denmark-640.webp'
import portraitWebp960 from '@/assets/matteo-kcd-denmark-960.webp'

export const siteConfig = {
  name: 'Matteo',
  title: 'Matteo — The Human Platform',
  description:
    'Matteo Bianchi is a Senior Engineer across platforms, solutions, software, and AI, combining deep engineering with customer insight, open source, and technical communication.',
  url: new URL('https://mbianchi.dev'),
  locale: 'en_US',
  author: {
    name: 'Matteo Bianchi',
    url: new URL('https://mbianchi.dev/about/'),
  },
} as const

export const profilePortrait = {
  alt: 'Matteo Bianchi speaking on stage at KCD Denmark',
  fallback: portraitFallback,
  avif: [portraitAvif320, portraitAvif640, portraitAvif960, portraitAvif1280],
  webp: [portraitWebp320, portraitWebp640, portraitWebp960, portraitWebp1280],
} as const

export const socialImages = {
  profile: {
    src: profilePortrait.fallback.src,
    width: profilePortrait.fallback.width,
    height: profilePortrait.fallback.height,
    alt: profilePortrait.alt,
    type: 'image/jpeg',
  },
  brand: {
    src: '/brand/matteo-mark.png',
    width: 1024,
    height: 1024,
    alt: 'Matteo human platform brand mark',
    type: 'image/png',
  },
} as const

export type SocialImageKey = keyof typeof socialImages

export function isSocialImageKey(value: unknown): value is SocialImageKey {
  return typeof value === 'string' && value in socialImages
}
