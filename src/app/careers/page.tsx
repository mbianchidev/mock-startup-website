import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import styles from '@/app/inner.module.css'

export const metadata: Metadata = {
  title: 'Careers — Matteo',
  description: 'Matteo is actively seeking senior platform, solutions, software, and AI engineering roles with strong open-source and community impact.',
}

const roles = [
  {
    title: 'Senior Platform Engineer',
    description: 'Developer platforms, Kubernetes, infrastructure as code, reliability, and self-service workflows designed around adoption.',
    skills: ['Platform engineering', 'Kubernetes', 'IaC', 'SRE'],
  },
  {
    title: 'Solutions Engineer, Technical Products',
    description: 'Customer discovery, architecture, demos, proof of value, implementation guidance, and field insight that improves the product.',
    skills: ['Discovery', 'Architecture', 'Demos', 'GTM'],
  },
  {
    title: 'Senior Software Engineer',
    description: 'APIs, services, CLIs, product interfaces, automation, and system design across Go, Python, TypeScript, Rust, and React.',
    skills: ['Go', 'Python', 'TypeScript', 'Rust'],
  },
  {
    title: 'AI Engineer, Developer Automation',
    description: 'Agents, assistants, MCP integrations, and workflow automation built around measurable work rather than novelty.',
    skills: ['AI agents', 'MCP', 'Automation', 'Evaluation'],
  },
  {
    title: 'Open Source & Community Lead',
    description: 'Upstream contribution, open-source strategy, technical education, speaking, mentorship, and community feedback loops.',
    skills: ['Open source', 'Speaking', 'Training', 'Community'],
  },
]

const principles = [
  ['Customer signal', 'Understand the workflow and the stakes before prescribing the system.'],
  ['Technical depth', 'Stay close enough to implementation that strategy survives contact with reality.'],
  ['Leverage', 'Automate repeated work and build tools that make the whole team stronger.'],
  ['Communication', 'Make trade-offs clear enough for engineers, leaders, customers, and communities to act on.'],
]

export default function CareersPage() {
  return (
    <div className={styles.page}>
      <PageHero
        path="/careers"
        title="Now accepting one full-time deployment."
        description="Best fit: a senior role at the intersection of platform engineering, technical products, software, and practical AI—with open source and communication built in."
        tone="cyan"
        actions={
          <a
            href="https://cal.com/mbianchidev/intro"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.darkButton}
          >
            Start trial
            <span aria-hidden="true">↗</span>
          </a>
        }
        aside={
          <dl className={styles.heroSpecs}>
            <div>
              <dt>Availability</dt>
              <dd>Actively interviewing</dd>
            </div>
            <div>
              <dt>Primary model</dt>
              <dd>Full-time</dd>
            </div>
            <div>
              <dt>Consulting</dt>
              <dd>Selective</dd>
            </div>
          </dl>
        }
      />

      <section className={styles.sectionDark} aria-labelledby="roles-title">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="roles-title">Supported deployment targets.</h2>
            <p>Not five simultaneous titles. Five contexts where the same engineering system creates leverage.</p>
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
          <h2>If these capabilities need to reinforce each other, test the human interface.</h2>
        </div>
        <a
          href="https://cal.com/mbianchidev/intro"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.darkButton}
        >
          Start trial
          <span aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  )
}
