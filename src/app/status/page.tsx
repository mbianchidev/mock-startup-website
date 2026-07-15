import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import styles from '@/app/inner.module.css'

export const metadata: Metadata = {
  title: 'Status — Matteo',
  description: 'Operational status, uptime, and incident history for the Matteo human platform.',
}

const systems = [
  {
    name: 'Human runtime',
    detail: 'Core engineering and product judgment',
  },
  {
    name: 'Platform interface',
    detail: 'Cloud-native and developer-experience delivery',
  },
  {
    name: 'Open-source uplink',
    detail: 'Repositories, contributions, and community work',
  },
  {
    name: 'Broadcast subsystem',
    detail: 'Talks, writing, workshops, and explanations',
  },
]

export default function StatusPage() {
  return (
    <div className={styles.page}>
      <PageHero
        path="/status"
        title="All systems operational. Human included."
        description="Live status for the Matteo platform, measured with enterprise-grade confidence and a suspiciously human incident taxonomy."
        tone="green"
        aside={
          <dl className={styles.heroSpecs}>
            <div>
              <dt>90-day uptime</dt>
              <dd>99.99%</dd>
            </div>
            <div>
              <dt>Current status</dt>
              <dd>Operational</dd>
            </div>
            <div>
              <dt>On-call rotation</dt>
              <dd>One person, well caffeinated</dd>
            </div>
          </dl>
        }
      />

      <section className={styles.sectionDark} aria-labelledby="systems-title">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="systems-title">Current systems.</h2>
            <p>Every public interface is available. No degraded cleverness detected.</p>
          </div>
          <div className={styles.statusBoard}>
            {systems.map((system) => (
              <article key={system.name} className={styles.statusRow}>
                <div>
                  <h3>{system.name}</h3>
                  <p>{system.detail}</p>
                </div>
                <span>
                  <span aria-hidden="true" />
                  Operational
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionLight} aria-labelledby="incidents-title">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="incidents-title">Incident history.</h2>
            <p>Transparent postmortems for even the smallest human maintenance window.</p>
          </div>
          <article className={styles.incident}>
            <div className={styles.incidentHeader}>
              <span>Resolved</span>
              <time dateTime="PT3M">3 minutes - PTO</time>
            </div>
            <h3>Brief availability interruption.</h3>
            <p>
              The human platform temporarily stopped accepting work to perform
              scheduled personal maintenance.
            </p>
            <small>No data loss. One coffee obtained. Service fully restored.</small>
          </article>
        </div>
      </section>
    </div>
  )
}
