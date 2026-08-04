import Image from 'next/image'
import Link from 'next/link'
import matteoPortrait from '@/assets/matteo-kcd-denmark.jpg'
import { PageHero } from '@/components/PageHero'
import styles from '@/app/inner.module.css'

const mission = [
  {
    title: 'Start with real friction',
    description: 'Understand the developer or customer workflow before choosing the platform, product surface, or automation.',
  },
  {
    title: 'Automate for leverage',
    description: 'Use AI and software to remove repeated work while keeping judgment, ownership, and observability with people.',
  },
  {
    title: 'Engineer for adoption',
    description: 'Treat interfaces, documentation, enablement, and feedback loops as part of the system—not post-launch chores.',
  },
  {
    title: 'Compound in public',
    description: 'Contribute upstream, teach what works, and turn hard-won lessons into reusable open-source and community value.',
  },
]

const departments = [
  {
    name: 'Platform mode',
    role: 'Systems',
    description: 'Builds cloud infrastructure, Kubernetes platforms, paved roads, and reliability into a usable developer product.',
  },
  {
    name: 'Solutions mode',
    role: 'Customers',
    description: 'Connects discovery, architecture, demos, delivery, and field feedback without losing technical credibility.',
  },
  {
    name: 'AI mode',
    role: 'Automation',
    description: 'Turns repeated workflows into assistants, agents, and tools with measurable outcomes and human ownership.',
  },
  {
    name: 'Software mode',
    role: 'Delivery',
    description: 'Ships APIs, CLIs, services, and product interfaces across Go, Python, TypeScript, Rust, and React.',
  },
  {
    name: 'Open-source mode',
    role: 'Leverage',
    description: 'Contributes upstream, maintains release infrastructure, and helps companies build credible open-source strategy.',
  },
  {
    name: 'Education mode',
    role: 'Adoption',
    description: 'Uses talks, workshops, mentorship, and documentation to make complex technology understandable and reusable.',
  },
]

const communityLinks = [
  {
    label: 'Speaking and events',
    detail: 'Session history, upcoming appearances, and conference programme records.',
    href: 'https://sessionize.com/mbianchidev/',
  },
  {
    label: 'Talk catalogue',
    detail: 'Slide decks covering cloud native, platform engineering, DevRel, and open source.',
    href: 'https://speakerdeck.com/mbianchidev',
  },
  {
    label: 'Open-source signal',
    detail: 'Repositories, contributions, and the work behind the GitHub activity graph.',
    href: '/portfolio',
  },
]

export default function About() {
  return (
    <div className={styles.page}>
      <PageHero
        path="/about"
        title="Product internals. Deep engineering with customer-facing interfaces."
        description="The startup is fictional. The operating model is real: build the system, translate the need, automate repeated work, and make the knowledge travel."
        tone="dark"
        actions={
          <>
            <Link href="#mission" className={styles.primaryButton}>
              Read the operating principles
              <span aria-hidden="true">↓</span>
            </Link>
            <Link href="#community" className={styles.secondaryButton}>
              Open community interfaces
            </Link>
          </>
        }
        aside={
          <figure className={styles.portraitPanel}>
            <Image
              src={matteoPortrait}
              alt="Matteo Bianchi presenting at KCD Denmark"
              width={1600}
              height={1066}
              priority
            />
            <figcaption>Current production build / speaking interface enabled</figcaption>
          </figure>
        }
      />

      <section className={styles.sectionLight} aria-labelledby="mission-title">
        <span id="mission" className={styles.anchor} aria-hidden="true" />
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="mission-title">Mission parameters.</h2>
            <p>What the product metaphor means when it stops being funny for a minute.</p>
          </div>
          <div className={styles.manifesto}>
            {mission.map((item) => (
              <article key={item.title} className={styles.manifestoRow}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.visionSection} aria-labelledby="vision-title">
        <div className={styles.sectionInner}>
          <p>Long-range operating intent</p>
          <h2 id="vision-title">
            Build systems that solve the technical problem, earn adoption, and leave the team stronger.
          </h2>
          <p>
            The best work connects engineering depth, customer signal, automation, and communication.
            The goal is not to look cross-functional; it is to make those capabilities compound.
          </p>
        </div>
      </section>

      <section className={styles.sectionDark} aria-labelledby="community-title">
        <span id="community" className={styles.anchor} aria-hidden="true" />
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="community-title">Community interfaces.</h2>
            <p>Direct routes to the public work. No cross-origin embed roulette required.</p>
          </div>
          <div className={styles.resourceGrid}>
            {communityLinks.map((link) => {
              const body = (
                <>
                  <strong>{link.label}</strong>
                  <span>{link.detail}</span>
                  <span aria-hidden="true">↗</span>
                </>
              )

              return link.href.startsWith('http') ? (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
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

      <section className={styles.sectionSoft} aria-labelledby="departments-title">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="departments-title">One human, six operating modes.</h2>
            <p>Different contexts, shared architecture, no interdepartmental ticket required.</p>
          </div>
          <div className={styles.departmentGrid}>
            {departments.map((department) => (
              <article key={department.name} className={styles.department}>
                <p>{department.role}</p>
                <h3>{department.name}</h3>
                <p>{department.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
