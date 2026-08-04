import Link from 'next/link'
import styles from '@/app/home.module.css'

const issues = [
  {
    title: 'Cross-functional leakage',
    description:
      'May move from customer discovery to architecture to implementation without scheduling a handoff ceremony.'
  },
  {
    title: 'Automation reflex',
    description:
      'Repeated work tends to become a script, agent, or internal product. Humans keep the judgment and the reclaimed time.'
  },
  {
    title: 'Open-source instinct',
    description:
      'Will document the system, teach the team, and look for lessons worth contributing upstream.'
  }
]

export function KnownIssues() {
  return (
    <section id="contact" className={styles.knownIssues} aria-labelledby="known-issues-title">
      <div className={styles.knownIssuesLead}>
        <p>Release notes / before the interview panel asks</p>
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
          Start the interview loop
          <span aria-hidden="true">↗</span>
        </a>
        <Link href="/roadmap" className={styles.inkAction}>
          See changelog
        </Link>
      </div>
      <p className={styles.responseSla}>Primary deployment: full-time. Consulting capacity: selective.</p>
    </section>
  )
}
