import Link from 'next/link'
import { PageHero } from './PageHero'
import styles from '@/app/inner.module.css'

type Props = {
  page: 'Documentation' | 'Press' | 'Support'
}

const pageContent = {
  Documentation: {
    path: '/documentation',
    title: 'The docs escaped into the product.',
    description:
      'The formal manual is still compiling. The useful material already exists in source, field notes, and the platform roadmap.',
    tone: 'cyan' as const,
    status: 'Documentation build: useful, distributed, not yet centralized',
    links: [
      { label: 'Read the field notes', href: '/blog', detail: 'Cloud-native guides and lessons from production.' },
      { label: 'Inspect the source', href: 'https://github.com/mbianchidev', detail: 'Repositories, tools, and implementation details.' },
      { label: 'Open the roadmap', href: '/roadmap', detail: 'Release history, milestones, and technical receipts.' },
    ],
  },
  Press: {
    path: '/press',
    title: 'For press, podcasts, and brave conference organizers.',
    description:
      'Speaker material, public sessions, and a direct human contact. No downloadable stock photo of people pointing at glass.',
    tone: 'green' as const,
    status: 'Media endpoint: available and unusually responsive',
    links: [
      { label: 'Sessionize profile', href: 'https://sessionize.com/mbianchidev/', detail: 'Talks, sessions, and event history.' },
      { label: 'Speaker Deck', href: 'https://speakerdeck.com/mbianchidev', detail: 'Slides from cloud-native and platform talks.' },
      { label: 'Contact Matteo', href: 'mailto:info@mb-consulting.dev', detail: 'Interviews, quotes, podcasts, and events.' },
    ],
  },
  Support: {
    path: '/support',
    title: 'Human support. No chatbot escalation tree.',
    description:
      'Choose the channel that matches the problem: source issue, direct question, or a conversation with an actual person.',
    tone: 'light' as const,
    status: 'Support SLA: usually faster than the enterprise procurement cycle',
    links: [
      { label: 'Open a GitHub issue', href: 'https://github.com/mbianchidev/mbianchi.dev/issues', detail: 'Bugs and concrete repository feedback.' },
      { label: 'Send an email', href: 'mailto:info@mb-consulting.dev', detail: 'Questions that should not become public issues.' },
      { label: 'Book a conversation', href: 'https://cal.com/mbianchidev/intro', detail: 'Architecture, hiring, advisory, or collaboration.' },
    ],
  },
}

export function WorkInProgress({ page }: Props) {
  const content = pageContent[page]

  return (
    <div className={styles.page}>
      <PageHero
        path={content.path}
        title={content.title}
        description={content.description}
        tone={content.tone}
        aside={
          <div className={styles.statusPanel}>
            <span className={styles.statusLight} aria-hidden="true" />
            <p>{content.status}</p>
          </div>
        }
      />
      <section className={styles.resourceSection} aria-labelledby={`${page.toLowerCase()}-resources`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id={`${page.toLowerCase()}-resources`}>Useful while the official page catches up.</h2>
            <p>Every route below works now. Revolutionary concept.</p>
          </div>
          <div className={styles.resourceGrid}>
            {content.links.map((link) => {
              const isExternal = link.href.startsWith('http') || link.href.startsWith('mailto:')
              const body = (
                <>
                  <strong>{link.label}</strong>
                  <span>{link.detail}</span>
                  <span aria-hidden="true">↗</span>
                </>
              )

              return isExternal ? (
                <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {body}
                </a>
              ) : (
                <Link key={link.label} href={link.href}>
                  {body}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
