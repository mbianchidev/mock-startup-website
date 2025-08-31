export const metadata = {
  title: 'Roadmap - Matteo Platform',
  description: 'From vision to reality — discover the milestones that shaped Matteo into the platform (engineer) it is today.'
}

export default function RoadmapPage() {
  return (
    <>
      <section id="roadmap-hero">
        <div className="container">
          <h2>Our Journey</h2>
          <p className="section-description">
            From vision to reality - discover the milestones that shaped Matteo into the platform (engineer) it is today
          </p>
        </div>
      </section>

      <section id="roadmap">
        <div className="container">
          <div className="timeline">
            {/* 2025 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-rocket" aria-hidden="true" />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2025</div>
                <h3>Platform Evolution</h3>
                <p>
                  Released Kubernetes v1.33 as branch manager, expanding our enterprise capabilities. Spoke at KubeCon EU London 2025 with 3 different sessions, sharing our vision for the future of cloud-native platforms.
                </p>
                <div className="achievement-badge">
                  <i className="fas fa-crown" aria-hidden="true" />
                  <span>Delivered first Keynote at KCD Denmark</span>
                </div>
              </div>
            </div>

            {/* 2024-2025 */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-award" aria-hidden="true" />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2024-2025</div>
                <h3>Industry Recognition</h3>
                <p>
                  Nominated as{' '}
                  <a href="https://www.credly.com/badges/bc458baf-3bd8-4c38-a73e-21c68b259798/public_url" target="_blank" rel="noopener noreferrer">
                    CNCF Ambassador
                  </a>
                  , recognizing our contributions to the cloud-native ecosystem. Led communications for{' '}
                  <a href="https://github.com/kubernetes/sig-release/issues/2586#issuecomment-2290160721" target="_blank" rel="noopener noreferrer">
                    Kubernetes v1.32
                  </a>{' '}
                  release.
                </p>
                <div className="achievement-list">
                  <div className="achievement-item">
                    <i className="fas fa-microphone" aria-hidden="true" />
                    <span>Global conference speaker at Cloud Native Rejekts, DevOpsDays</span>
                  </div>
                  <div className="achievement-item">
                    <i className="fas fa-users" aria-hidden="true" />
                    <span>Program Committee Member for KubeCon NA, EU, Japan, Hong Kong</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Open Source Contributions */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fab fa-github" aria-hidden="true" />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2024</div>
                <h3>Open Source Impact</h3>
                <p>
                  Contributed as{' '}
                  <a href="https://github.com/kubernetes/org/issues/4975" target="_blank" rel="noopener noreferrer">
                    Kubernetes v1.31 Comms Shadow
                  </a>
                  .
                </p>
                <div className="achievement-item">
                  <i className="fas fa-graduation-cap" aria-hidden="true" />
                  <span>Guest Lecturer at University of Turin - Cloud Native Technologies 101</span>
                </div>
              </div>
            </div>

            {/* Startup Foundation */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-building" aria-hidden="true" />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2023-2024</div>
                <h3>Startup Launch</h3>
                <p>
                  <a href="https://www.linkedin.com/company/kubelab/" target="_blank" rel="noopener noreferrer">Founded KubeLab</a> - Building a Platform Engineering tool to streamline multi-cloud Kubernetes management. Successfully raised 200k in pre-seed funding to accelerate development.
                </p>
                <div className="achievement-badge startup">
                  <i className="fas fa-chart-line" aria-hidden="true" />
                  <span>€200k Pre-seed Funding Secured</span>
                </div>
              </div>
            </div>

            {/* Social Impact */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-heart" aria-hidden="true" />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2021-2022</div>
                <h3>Social Impact</h3>
                <p>
                  <a href="https://www.linkedin.com/pulse/kubelab-netherlands-cancer-institute-partner-around-ai-peter-comstock/?utm_source=rss&utm_campaign=articles_sitemaps&utm_medium=google_news" target="_blank" rel="noopener noreferrer">
                    Helped a cancer research center save more lives
                  </a>{' '}
                  through Machine Learning on Azure Cloud infrastructure, connected to a mobile gaming app - a true game changer!
                </p>
              </div>
            </div>

            {/* Content Creation */}
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-edit" aria-hidden="true" />
              </div>
              <div className="timeline-content">
                <div className="timeline-date">2019</div>
                <h3>Knowledge Sharing</h3>
                <p>
                  Built{' '}
                  <a href="https://mb-consulting.dev/blog" target="_blank" rel="noopener noreferrer">
                    industry-leading tech blog
                  </a>{' '}
                  reaching 50k+ monthly views with 1400+ subscribers. Sharing insights, tutorials, and thought leadership in cloud native technologies.
                </p>
                <div className="achievement-badge content">
                  <i className="fas fa-chart-bar" aria-hidden="true" />
                  <span>50k+ Monthly Blog Readers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
