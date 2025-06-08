import { FeatureItem } from '@/types'

const features: FeatureItem[] = [
  {
    icon: 'fas fa-cogs',
    title: 'Automation',
    description: 'Automate repetitive tasks and focus on what matters most.'
  },
  {
    icon: 'fas fa-users',
    title: 'Collaboration',
    description: 'Work together seamlessly with your team, no matter where they are.'
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Analytics',
    description: 'Gain insights into your operations with powerful analytics feedback tools.'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Security',
    description: 'Your data is safe with Matteo. Zero trust is implemented at every level.'
  }
]

export function Features() {
  return (
    <section id="features">
      <h2 className="section-title">Features</h2>
      <p className="section-description">Powerful tools designed to transform your workflow</p>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-icon">
              <i className={feature.icon}></i>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}