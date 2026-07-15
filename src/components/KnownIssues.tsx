import Link from 'next/link'
import styles from '@/app/home.module.css'

const issues = [
  {
    title: 'Opinionated defaults',
    description:
      'May challenge “that is how we have always done it” without opening a seven-month transformation program.'
  },
  {
    title: 'Open-source reflex',
    description:
      'Frequently turns internal lessons into reusable tools, talks, or documentation. Legal review may experience feelings.'
  },
  {
    title: 'Excessive legibility',
    description:
      'Will explain architecture, trade-offs, and why the team should care. Will also get the work done. People might get upset for this amount of proactivity.'
  }
]

export function KnownIssues() {
  return (
    <section id="contact" className={styles.knownIssues} aria-labelledby="known-issues-title">
      <div className={styles.knownIssuesLead}>
        <p>Release notes / before procurement asks</p>
        <h2 id="known-issues-title">Known issues. None are blockers.</h2>
      </div>
      <ul className={styles.issueList}>
        {issues.map((issue) => (
          <li key={issue.title}>
            <strong>{issue.title}</strong>
            <span>{issue.description}</span>
          </li>
        ))}
      </ul>
      <div className={styles.closingActions}>
        <a
          href="https://cal.com/mbianchidev/intro"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.darkAction}
        >
          buy Matteo
          <span aria-hidden="true">↗</span>
        </a>
        <Link href="/roadmap" className={styles.inkAction}>
          See changelog
        </Link>
      </div>
      <p className={styles.responseSla}>Response SLA: usually faster than procurement.</p>
    </section>
  )
}
