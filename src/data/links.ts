export type PublicLinkIcon = 'mentor' | 'youtube' | 'github'

export interface PublicLink {
  service: string
  title: string
  description: string
  href: string
  icon: PublicLinkIcon
}

interface LinksPageConfig {
  handle: string
  tagline: string
  description: string
  links: PublicLink[]
}

export const linksPageConfig: LinksPageConfig = {
  handle: '@mbianchidev',
  tagline: 'Code = Liability',
  description:
    'Senior engineer, open-source contributor, and professional translator between humans and distributed systems.',
  links: [
    {
      service: 'MentorCruise',
      title: 'You getting mentored (by me)',
      description: 'One-to-one engineering mentorship for the next hard problem.',
      href: 'https://mentorcruise.com/mentor/matteobianchi',
      icon: 'mentor',
    },
    {
      service: 'YouTube',
      title: 'Me yapping about stuff',
      description: 'Cloud native, open source, platforms, and opinions with diagrams.',
      href: 'https://youtube.com/mbianchidev',
      icon: 'youtube',
    },
    {
      service: 'GitHub',
      title: 'Spaghetti code, publicly auditable',
      description: 'Repositories, upstream contributions, experiments, and receipts.',
      href: 'https://github.com/mbianchidev',
      icon: 'github',
    },
  ],
}
