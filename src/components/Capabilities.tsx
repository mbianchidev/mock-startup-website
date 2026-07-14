import Link from 'next/link'
import styles from '@/app/home.module.css'

const capabilities = [
  {
    key: 'platform.core',
    title: 'Platform systems people choose to use',
    description:
      'Paved roads, self-service workflows, and product thinking for the infrastructure layer.',
    signal: 'Platform engineering · golden paths · internal products',
    evidence: 'Inspect the roadmap',
    href: 'https://github.com/mbianchidev/platform-engineering-roadmap'
  },
  {
    key: 'cloud.runtime',
    title: 'Cloud-native delivery without the theater',
    description:
      'Production Kubernetes, multi-cloud systems, infrastructure as code, and the judgment to know when not to add another layer.',
    signal: 'Kubernetes · AWS · Azure · GCP · OpenTofu',
    evidence: 'Browse open-source work',
    href: '/portfolio'
  },
  {
    key: 'product.interface',
    title: 'Engineering that behaves like product work',
    description:
      'Fast prototypes, typed frontends, useful CLIs, and feedback loops that connect technical choices to user outcomes.',
    signal: 'TypeScript · React · Python · CLI design',
    evidence: 'See the product surface',
    href: '/portfolio'
  },
  {
    key: 'story.protocol',
    title: 'Technical ideas that survive the meeting',
    description:
      'Talks, long-form writing, workshops, and community work that make difficult systems easier to understand and adopt.',
    signal: '22+ talks · writing · DevRel · community',
    evidence: 'Read the field notes',
    href: '/blog'
  }
]

export function Capabilities() {
  return (
    <section id="features" className={styles.capabilities} aria-labelledby="capabilities-title">
      <div className={styles.sectionHeader}>
        <p className={styles.sectionCode}>matteo.features()</p>
        <h2 id="capabilities-title">One hire. Suspiciously broad surface area.</h2>
        <p>
          The startup framing is a joke. The capabilities are not.
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