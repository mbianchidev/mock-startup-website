'use client'

const integrations = [
  { icon: 'fab fa-slack', name: 'Slack' },
  { icon: 'fab fa-github', name: 'GitHub' },
  { icon: 'fab fa-trello', name: 'Trello' },
  { icon: 'fab fa-google-drive', name: 'Google Drive' },
  { icon: 'fab fa-salesforce', name: 'Salesforce' },
  { icon: 'fab fa-linux', name: 'Linux' },
  { icon: 'fa-solid fa-dharmachakra', name: 'Kubernetes' },
  { icon: 'fab fa-golang', name: 'Golang' },
  { icon: 'fab fa-docker', name: 'Docker' },
  { icon: 'fa-brands fa-react', name: 'React' },
  { icon: 'fab fa-steam', name: 'Steam' },
  { icon: 'fab fa-spotify', name: 'Spotify' }
]

export function Integrations() {
  return (
    <section id="integrations">
      <h2>Works with these tools</h2>
      <div className="icon-cloud">
        {integrations.map((integration) => (
          <div key={integration.name} className="icon-item">
            <i className={integration.icon} aria-hidden="true" suppressHydrationWarning />
            <span>{integration.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}