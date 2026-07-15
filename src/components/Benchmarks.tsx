import styles from '@/app/home.module.css'

const benchmarks = [
  {
    value: '22+',
    label: 'talks and workshops delivered',
    source: 'Sessionize and event history'
  },
  {
    value: '10+',
    label: 'years shipping production systems',
    source: 'Field-tested since 2015'
  },
  {
    value: '111',
    label: 'stars on the Platform Engineering Roadmap',
    source: 'GitHub repository signal'
  }
]

export function Benchmarks() {
  return (
    <section className={styles.benchmarks} aria-labelledby="benchmarks-title">
      <div className={styles.benchmarkIntro}>
        <h2 id="benchmarks-title">Field report, not vanity dashboard.</h2>
        <p>Numbers are not ARR. They are actual output.</p>
      </div>
      <div className={styles.report}>
        <div className={styles.primaryBenchmark}>
          <span>40+</span>
          <p>merged Kubernetes pull requests</p>
          <small>Personal contribution, not project popularity.</small>
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