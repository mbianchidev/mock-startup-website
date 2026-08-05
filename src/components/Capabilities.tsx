import Link from 'next/link'
import styles from '@/app/home.module.css'

const capabilities = [
  {
    key: 'platform.core',
    title: 'Developer platforms people choose to use',
    description:
      'Built platform APIs and zero-touch onboarding used by 70+ engineers, with cloud infrastructure experience supporting products serving 8M+ daily users.',
    signal: 'Platform engineering · Kubernetes · multi-cloud · SRE',
    evidence: 'Inspect the roadmap',
    href: 'https://github.com/mbianchidev/platform-engineering-roadmap'
  },
  {
    key: 'solutions.interface',
    title: 'Customer problems translated into shipped systems',
    description:
      'Connects technical discovery, architecture, demos, field feedback, and hands-on delivery. Won Club FY26 after reaching 180% quota at GitHub.',
    signal: 'Solutions engineering · discovery · GTM · product feedback',
    evidence: 'Review deployment history',
    href: '/customers'
  },
  {
    key: 'ai.automation',
    title: 'AI automation with a measurable job',
    description:
      'Builds agents and internal tools that remove recurring work without outsourcing judgment—including an assistant that automated 20–25% of Solutions Engineering workload.',
    signal: 'Python · TypeScript · MCP · agents · developer tooling',
    evidence: 'Inspect software work',
    href: '/portfolio'
  },
  {
    key: 'open.protocol',
    title: 'Open source and communication that compound',
    description:
      'Kubernetes release engineering maintainer, 40+ merged upstream pull requests, 20+ talks, 500+ learners, and 15+ mentees coached to success (5/5 stars as a mentor).',
    signal: 'Kubernetes · OSS strategy · speaking · education',
    evidence: 'Open community interfaces',
    href: '/about#community'
  }
]

export function Capabilities() {
  return (
    <section id="features" className={styles.capabilities} aria-labelledby="capabilities-title">
      <div className={styles.sectionHeader}>
        <p className={styles.sectionCode}>matteo.features()</p>
        <h2 id="capabilities-title">One deployment. Four systems that reinforce each other.</h2>
        <p>
          The startup framing is a joke. The cross-functional leverage is not.
        </p>
      </div>

      <div className={styles.capabilityManifest}>
        {capabilities.map((capability) => (
          <article key={capability.key} className={styles.capabilityRow}>
            <code>{capability.key}</code>
            <div className={styles.capabilityCopy}>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </div>
            <div className={styles.capabilityMeta}>
              <span>{capability.signal}</span>
              {capability.href.startsWith('http') ? (
                <a href={capability.href} target="_blank" rel="noopener noreferrer">
                  {capability.evidence}
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <Link href={capability.href}>
                  {capability.evidence}
                  <span aria-hidden="true">↗</span>
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}