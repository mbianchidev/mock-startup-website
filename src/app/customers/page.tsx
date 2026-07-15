import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { CustomersTimeline } from '@/components/CustomersTimeline'
import customersData from '@/data/customers.json'
import type { CustomersData } from '@/types'
import styles from '@/app/inner.module.css'

export const metadata: Metadata = {
  title: 'Customers — Matteo',
  description: 'Where Matteo has shipped across employment, founding, advisory, mentoring, consulting, and training.',
}

const visibleCompanies = (customersData as CustomersData).companies.filter((company) => company.show)

export default function Customers() {
  const sectors = new Set(visibleCompanies.map((company) => company.companySector)).size

  return (
    <div className={styles.page}>
      <PageHero
        path="/customers"
        title="Customers, collaborators, and teams shipped with."
        description="Where this human has shipped across employment, founding, advisory, mentoring, consulting, and training. A career path, not a client claim."
        tone="light"
        aside={
          <dl className={styles.heroSpecs}>
            <div>
              <dt>Environments</dt>
              <dd>{visibleCompanies.length} recorded missions</dd>
            </div>
            <div>
              <dt>Sectors</dt>
              <dd>{sectors} domains</dd>
            </div>
            <div>
              <dt>Current deployment</dt>
              <dd>GitHub / Microsoft</dd>
            </div>
          </dl>
        }
      />

      <section className={styles.sectionSoft} aria-labelledby="deployment-history">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="deployment-history">Teams, missions, and operating contexts.</h2>
            <p>Newest first. Roles and relationship types stay explicit.</p>
          </div>
          <CustomersTimeline companies={visibleCompanies} />
        </div>
      </section>
    </div>
  )
}
