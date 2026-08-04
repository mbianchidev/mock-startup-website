import styles from '@/app/home.module.css'

const benchmarks = [
  {
    value: '121%',
    label: 'quota reached in the first eight months at GitHub',
    source: 'Corporate Solutions Engineering, EMEA'
  },
  {
    value: '70+',
    label: 'engineers enabled by platform APIs and zero-touch onboarding',
    source: 'Six product teams'
  },
  {
    value: '300+',
    label: 'people trained in Platform Engineering and Kubernetes',
    source: '95% surveyed CSAT'
  }
]

export function Benchmarks() {
  return (
    <section className={styles.benchmarks} aria-labelledby="benchmarks-title">
      <div className={styles.benchmarkIntro}>
        <h2 id="benchmarks-title">Field report, not vanity dashboard.</h2>
        <p>Selected outcomes from the current production history.</p>
      </div>
      <div className={styles.report}>
        <div className={styles.primaryBenchmark}>
          <span>20–25%</span>
          <p>recurring Solutions Engineering work automated</p>
          <small>Internal AI assistant. Human judgment and customer ownership retained.</small>
        </div>
        <dl className={styles.benchmarkList}>
          {benchmarks.map((benchmark) => (
            <div key={benchmark.label}>
              <dt>{benchmark.value}</dt>
              <dd>
                <strong>{benchmark.label}</strong>
                <span>{benchmark.source}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}