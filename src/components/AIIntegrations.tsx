'use client'

const aiIntegrations = [
  { icon: 'fa-solid fa-robot', name: 'Anthropic Claude' },
  { icon: 'fa-brands fa-github', name: 'GitHub Copilot' },
  { icon: 'fa-solid fa-code', name: 'OpenAI Codex' },
  { icon: 'fa-solid fa-comment-dots', name: 'OpenAI ChatGPT' },
  { icon: 'fa-solid fa-gem', name: 'Google Gemini' },
  { icon: 'fa-solid fa-plug', name: 'MCP Protocol' },
  { icon: 'fa-solid fa-link', name: 'LangChain' },
  { icon: 'fa-solid fa-brain', name: 'Hugging Face' }
]

export function AIIntegrations() {
  return (
    <section id="ai-integrations">
      <h2>AI Integrations</h2>
      <p className="section-description">Build with the AI tools and protocols you already love</p>
      <div className="icon-cloud">
        {aiIntegrations.map((integration) => (
          <div key={integration.name} className="icon-item">
            <i className={integration.icon} aria-hidden="true" suppressHydrationWarning />
            <span>{integration.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
