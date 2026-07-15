import Image from 'next/image'
import Link from 'next/link'
import matteoPortrait from '@/assets/matteo-kcd-denmark.jpg'
import { PageHero } from '@/components/PageHero'
import styles from '@/app/inner.module.css'

const mission = [
  {
    title: 'Build work that matters',
    description: 'Choose meaningful systems over decorative complexity and optimise for durable human outcomes.',
  },
  {
    title: 'Make engineers stronger',
    description: 'Share the knowledge, context, and tooling that helps other people ship with more confidence.',
  },
  {
    title: 'Keep open source open',
    description: 'Contribute upstream, teach in public, and return value to the communities that made the work possible.',
  },
  {
    title: 'Remove avoidable friction',
    description: 'Turn repetitive platform work into understandable products, paved roads, and useful automation.',
  },
]

const departments = [
  {
    name: 'CEO mode',
    role: 'Direction',
    description: 'Finds the useful problem and keeps the ambition attached to reality.',
  },
  {
    name: 'CTO mode',
    role: 'Architecture',
    description: 'Connects product intent to systems, trade-offs, and technical execution.',
  },
  {
    name: 'Engineer mode',
    role: 'Delivery',
    description: 'Builds the thing, debugs the thing, and documents why the thing exists.',
  },
  {
    name: 'DevRel mode',
    role: 'Adoption',
    description: 'Turns difficult technology into material people can understand and reuse.',
  },
  {
    name: 'Advisor mode',
    role: 'Leverage',
    description: 'Helps teams see the second-order consequences before they become incidents.',
  },
  {
    name: 'Community mode',
    role: 'Multiplication',
    description: 'Creates rooms, talks, and open work where other engineers can grow.',
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
        title="Product internals. One human, several subsystems."
        description="The startup is fictional. The mission, operating principles, community work, and unreasonable number of hats are all real."
        tone="dark"
        actions={
          <>
            <Link href="#mission" className={styles.primaryButton}>
              Read the mission
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
            <p>What the product metaphor is trying to say when it stops being funny for a minute.</p>
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
            Make complex systems easier to build, easier to explain, and easier for other people to improve.
          </h2>
          <p>
            Open collaboration, trust, and creative engineering should compound. The goal is not to look innovative;
            it is to help useful ideas travel farther.
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
            <h2 id="departments-title">One human, six departments.</h2>
            <p>The old page duplicated the portrait. This version duplicates the responsibilities instead.</p>
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
