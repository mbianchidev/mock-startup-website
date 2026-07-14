import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import styles from '@/app/inner.module.css'

export const metadata: Metadata = {
  title: 'Careers — Matteo',
  description: 'The engineering, product, platform, DevRel, and solutions careers bundled into one human.',
}

const roles = [
  {
    title: 'Developer Advocate',
    description: 'Technical content, conference talks, community feedback, demos, and developer experience work.',
    skills: ['Technical writing', 'Public speaking', 'Community', 'DevEx'],
  },
  {
    title: 'Product Manager, Kubernetes edition',
    description: 'Product strategy, user discovery, platform positioning, and translating cloud-native complexity into choices.',
    skills: ['Kubernetes', 'Product strategy', 'Research', 'Launches'],
  },
  {
    title: 'Senior Software Engineer',
    description: 'Typed interfaces, automation, APIs, system design, and enough implementation detail to keep strategy honest.',
    skills: ['Go', 'Python', 'TypeScript', 'System design'],
  },
  {
    title: 'Staff Platform Engineer',
    description: 'Golden paths, infrastructure as code, distributed systems, and technical leadership across teams.',
    skills: ['Platform engineering', 'IaC', 'Kubernetes', 'Leadership'],
  },
  {
    title: 'Solutions Engineer',
    description: 'Customer context, technical discovery, architecture, and turning product capability into a credible path forward.',
    skills: ['Discovery', 'Cloud architecture', 'Demos', 'Problem solving'],
  },
]

const principles = [
  ['Transparency', 'Show the trade-off, the source, and the work still left to do.'],
  ['Integrity', 'Make the honest technical recommendation even when the flashy answer sells better.'],
  ['Reliability', 'Treat follow-through as part of the architecture.'],
  ['Creativity', 'Use constraints as material, not an excuse for generic output.'],
]

export default function CareersPage() {
  return (
    <div className={styles.page}>
      <PageHero
        path="/careers"
        title="One opening. Five jobs worth of surface area."
        description="This is not a recruiting page. It is the role manifest for what a company gets when it deploys Matteo."
        tone="cyan"
        actions={
          <a
            href="https://cal.com/mbianchidev/intro"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.darkButton}
          >
            Start the interview loop
            <span aria-hidden="true">↗</span>
          </a>
        }
        aside={
          <dl className={styles.heroSpecs}>
            <div>
              <dt>Headcount</dt>
              <dd>1 human</dd>
            </div>
            <div>
              <dt>Role coverage</dt>
              <dd>{roles.length} operating modes</dd>
            </div>
            <div>
              <dt>Management overhead</dt>
              <dd>Suspiciously low</dd>
            </div>
          </dl>
        }
      />

      <section className={styles.sectionDark} aria-labelledby="roles-title">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="roles-title">Careers included in the base image.</h2>
            <p>Not simultaneous job titles. A range of contexts the same product-minded engineer can handle.</p>
          </div>
          <div className={styles.roleList}>
            {roles.map((role) => (
              <article key={role.title} className={styles.roleRow}>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
                <ul className={styles.skillList}>
                  {role.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionLight} aria-labelledby="principles-title">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="principles-title">Operating principles.</h2>
            <p>Values that have to survive contact with delivery to count.</p>
          </div>
          <dl className={styles.principleList}>
            {principles.map(([name, description]) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.careersClose}>
        <div>
          <p>Compatibility looks promising.</p>
          <h2>Now test the human interface.</h2>
        </div>
        <a
          href="https://cal.com/mbianchidev/intro"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.darkButton}
        >
          Book a live demo
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  )
}
