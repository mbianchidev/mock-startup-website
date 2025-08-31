'use client'

import { useState, useEffect } from 'react'
import { CustomersData, Company, AchievementList } from '@/types'

export default function Customers() {
  const [companies, setCompanies] = useState<Company[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [displayedItems, setDisplayedItems] = useState(5)

  useEffect(() => {
  const loadCustomers = async () => {
      try {
    // Import JSON and narrow to our types
    const mod = await import('@/data/customers.json')
    const data = (mod as unknown as { default?: CustomersData }).default ?? (mod as unknown as CustomersData)
    const visibleCompanies = (data.companies as Company[]).filter(company => company.show)
        setCompanies(visibleCompanies)
      } catch (err) {
        setError('Failed to load customer data')
        console.error('Error loading customers:', err)
      } finally {
        setLoading(false)
      }
    }

    loadCustomers()
  }, [])

  const loadMore = () => {
    setDisplayedItems(prev => Math.min(prev + 5, companies.length))
  }

  if (loading) {
    return (
      <section id="customers-hero">
        <div className="hero-content">
          <h1>Loading Customer Data...</h1>
          <div className="loading-container" style={{ textAlign: 'center', padding: '40px' }}>
            <div className="loading-spinner" style={{
              display: 'inline-block',
              width: '40px',
              height: '40px',
              border: '3px solid #f3f3f3',
              borderTop: '3px solid #0066cc',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="customers-hero">
        <div className="hero-content">
          <h1>Customers</h1>
          <p>Error: {error}</p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section id="customers-hero">
        <div className="hero-content">
          <h1>Customers</h1>
          <p>See how companies have worked with Matteo over the years</p>
        </div>
      </section>

      <section id="careers-timeline">
        <h2 className="section-title">Explore their journey</h2>
        <div className="timeline-container">
          {companies.slice(0, displayedItems).map((company, index) => (
            <div key={company.code} className="timeline-item">
              <div className="timeline-marker">
                <i className={company.icon}></i>
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{company.companyName} {company.countryFlag}</h3>
                  <span className="timeline-year">{company.year}</span>
                </div>
                <div className="timeline-role">
                  <strong className="role-title">{company.role}</strong>
                  <span
                    className={`company-badge ${`sector-` + company.companySector.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                    title={`${company.companyType} • ${company.companySector}`}
                  >
                    {company.companyType} • {company.companySector}
                  </span>
                </div>
                <p className="timeline-story">{company.story}</p>
                {company.achievements && company.achievements.length > 0 && (
                  <div className="achievements">
                    <h4>Achievements:</h4>
                    <ul>
                      {company.achievements.map((achievement: AchievementList, achIndex: number) => (
                        <li key={achIndex}>
                          <ul>
                            {achievement.items.map((item, itemIndex: number) => (
                              <li key={itemIndex}>
                                <i className={item.icon}></i> {item.text}
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {company.companyUrl && (
                  <a 
                    href={company.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="company-link"
                  >
                    Visit Company →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {displayedItems < companies.length && (
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button 
              onClick={loadMore}
              className="primary-button"
            >
              Load More ({companies.length - displayedItems} remaining)
            </button>
          </div>
        )}
      </section>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}