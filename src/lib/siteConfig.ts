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
  src: '/images/matteo-kcd-denmark.jpg',
  width: 1600,
  height: 1066,
} as const

export const socialImages = {
  profile: {
    src: profilePortrait.src,
    width: profilePortrait.width,
    height: profilePortrait.height,
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
