import styles from '@/app/home.module.css'

const tools = [
  { name: 'Kubernetes', note: 'orchestration' },
  { name: 'Go', note: 'systems' },
  { name: 'Python', note: 'automation' },
  { name: 'TypeScript', note: 'products' },
  { name: 'React', note: 'interfaces' },
  { name: 'AWS', note: 'cloud' },
  { name: 'Azure', note: 'cloud' },
  { name: 'Google Cloud', note: 'cloud' },
  { name: 'GitHub', note: 'delivery' },
  { name: 'Docker', note: 'containers' },
  { name: 'OpenTofu', note: 'infrastructure' },
  { name: 'MCP', note: 'AI systems' }
]

export function Toolchain() {
  return (
    <section className={styles.toolchain} aria-labelledby="toolchain-title">
      <div className={styles.toolchainLead}>
        <h2 id="toolchain-title">Native integrations. Emotionally stable dependencies.</h2>
        <p>
          Fits into the stack you already run. Will still ask why there are three
          CI systems.
        </p>
      </div>
      <ul className={styles.toolList}>
        {tools.map((tool) => (
          <li key={tool.name}>
            <strong>{tool.name}</strong>
            <span>{tool.note}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}