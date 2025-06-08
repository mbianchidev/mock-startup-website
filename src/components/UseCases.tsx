import { UseCaseItem } from '@/types'

const useCases: UseCaseItem[] = [
  {
    icon: 'fas fa-layer-group',
    title: 'Platform Engineering',
    description: 'Streamline your platform operations with unified tooling, automated workflows, and developer self-service capabilities.'
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'App Innovation',
    description: 'Accelerate application development with modern frameworks, CI/CD pipelines, and rapid prototyping capabilities.'
  },
  {
    icon: 'fas fa-cloud-upload-alt',
    title: 'Cloud Migrations',
    description: 'Seamlessly migrate your workloads to the cloud with comprehensive planning, execution, and optimization tools.'
  },
  {
    icon: 'fas fa-brain',
    title: 'AI Deployments',
    description: 'Deploy and scale AI models efficiently with integrated MLOps pipelines, monitoring, and governance frameworks.'
  }
]

export function UseCases() {
  return (
    <section id="use-cases">
      <h2 className="section-title">Use Cases</h2>
      <p className="section-description">Discover how Matteo transforms different aspects of your business</p>
      <div className="use-cases-grid">
        {useCases.map((useCase, index) => (
          <div key={index} className="use-case-item">
            <div className="use-case-icon">
              <i className={useCase.icon} aria-hidden="true"></i>
            </div>
            <h3>{useCase.title}</h3>
            <p>{useCase.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}