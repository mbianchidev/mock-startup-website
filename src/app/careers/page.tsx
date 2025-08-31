import { Metadata } from 'next'
import { ValueItem, JobOpening } from '@/types'

export const metadata: Metadata = {
  title: 'Careers - Matteo Platform',
  description: 'Join our team and help shape the future of Matteo platform',
}

const values: ValueItem[] = [
  {
    icon: 'fas fa-eye',
    title: 'Transparency',
    description: 'We believe in open communication, clear processes, and honest feedback. Every decision is made with visibility and accountability.'
  },
  {
    icon: 'fas fa-shield-halved',
    title: 'Integrity',
    description: 'We do the right thing, even when no one is watching. Our ethical standards guide our actions and build trust with our team and customers.'
  },
  {
    icon: 'fas fa-handshake',
    title: 'Reliability',
    description: 'You can count on us to deliver on our promises. We build dependable solutions and maintain consistent, high-quality standards.'
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Creativity',
    description: 'We embrace innovative thinking and encourage bold ideas. Creative problem-solving drives our platform forward and sets us apart.'
  }
]

const jobOpenings: JobOpening[] = [
  {
    title: 'Senior Developer Advocate',
    location: 'Remote / San Francisco',
    description: 'Help developers succeed with our platform through technical content, community engagement, and developer experience improvements. You\'ll create tutorials, speak at conferences, and gather feedback to improve our tools.',
    skills: ['Technical Writing', 'Public Speaking', 'Developer Experience', 'Community Building']
  },
  {
    title: 'Product Manager (Kubernetes)',
    location: 'Remote / Amsterdam',
    description: 'Drive the product strategy for our Kubernetes platform offerings. Work closely with engineering teams to define features, gather customer requirements, and ensure successful product launches in the cloud-native ecosystem.',
    skills: ['Kubernetes', 'Product Strategy', 'Stakeholder Management', 'Cloud Native']
  },
  {
    title: 'Senior Software Engineer',
    location: 'Remote / Berlin',
    description: 'Build scalable platform solutions using modern technologies. You\'ll work on core platform features, API design, and system architecture while mentoring junior developers and contributing to technical decisions.',
    skills: ['Go', 'Python', 'Microservices', 'System Design']
  },
  {
    title: 'Staff Platform Engineer',
    location: 'Remote / London',
    description: 'Lead the design and implementation of our core platform infrastructure. Drive technical vision, architect scalable systems, and provide technical leadership across multiple teams in a fast-paced environment.',
    skills: ['Platform Engineering', 'Infrastructure as Code', 'Technical Leadership', 'Distributed Systems']
  }
]

export default function CareersPage() {
  return (
    <>
      <section id="values">
        <div className="container">
          <h2>Our Values</h2>
          <p className="section-description">The principles that guide everything Matteo does</p>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={value.icon} aria-hidden="true" />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="openings">
        <div className="container">
          <h2>Open (for) Positions</h2>
          <p className="section-description">Help shaping the future of Matteo</p>
          
          <div className="job-openings">
            {jobOpenings.map((job, index) => (
              <div key={index} className="job-card">
                <h3>{job.title}</h3>
                <div className="job-location">{job.location}</div>
                <p>{job.description}</p>
                <div className="job-skills">
                  {job.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}