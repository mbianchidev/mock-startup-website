'use client'

import { useState, useEffect } from 'react'

interface PricingPlan {
  name: string
  description: string
  price: string | number
  hourlyRate?: number
  period: string
  isPopular?: boolean
  features: string[]
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Development',
    description: 'Perfect for development environments and small workloads',
    price: 100,
    hourlyRate: 100,
    period: '/hour',
    features: [
      'Single Kubernetes Cluster',
      'Basic CI/CD Pipelines',
      'Developer Portal (up to 10 users)',
      'Standard Support (Email)',
      '99.5% SLA Guarantee',
      'Basic Monitoring & Alerts'
    ]
  },
  {
    name: 'Production',
    description: 'Standard rate for production workloads and growing teams',
    price: 150,
    hourlyRate: 150,
    period: '/hour',
    isPopular: true,
    features: [
      'Everything in Development +',
      'Multi-Cluster Kubernetes Management',
      'Advanced CI/CD with GitOps',
      'Developer Portal (up to 100 users)',
      'Priority Support (Phone & Email)',
      '99.9% SLA Guarantee',
      'Advanced Monitoring & Alerting',
      'Security Scanning & Compliance'
    ]
  },
  {
    name: 'Enterprise',
    description: 'Premium tier for mission-critical workloads and large organizations',
    price: 'Contact Sales',
    period: '',
    features: [
      'Everything in Production +',
      'Unlimited Kubernetes Clusters',
      'Enterprise GitOps Automation',
      'Developer Portal (Unlimited users)',
      'Dedicated Support Manager',
      '99.99% SLA Guarantee',
      'Custom Monitoring Solutions',
      'White-label Options',
      'On-premise Deployment'
    ]
  }
]

const presetHours = [
  { hours: 10, label: '10h' },
  { hours: 20, label: '20h' },
  { hours: 40, label: '40h' },
  { hours: 80, label: '80h' },
  { hours: 160, label: '160h' }
]

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState('production')
  const [hours, setHours] = useState(40)
  const [selectedPreset, setSelectedPreset] = useState(40)
  const [expandedPlans, setExpandedPlans] = useState<Record<string, boolean>>({})

  const togglePlan = (planName: string) => {
    setExpandedPlans(prev => ({
      ...prev,
      [planName]: !prev[planName]
    }))
  }

  const handleCtaClick = () => {
    window.open('/mock-startup-website/book15', '_blank')
  }

  const getHourlyRate = () => {
    const plan = pricingPlans.find(p => p.name.toLowerCase() === selectedTier)
    return plan?.hourlyRate || 150
  }

  const calculateCosts = () => {
    const hourlyRate = getHourlyRate()
    const monthlyTotal = hourlyRate * hours
    const dailyCost = Math.round((monthlyTotal / 30) * 100) / 100
    return { monthlyTotal, dailyCost, hourlyRate }
  }

  const { monthlyTotal, dailyCost, hourlyRate } = calculateCosts()

  const handlePresetClick = (presetHours: number) => {
    setHours(presetHours)
    setSelectedPreset(presetHours)
  }

  const handleHoursChange = (value: number) => {
    setHours(value)
    // Check if the current value matches any preset
    const matchingPreset = presetHours.find(preset => preset.hours === value)
    setSelectedPreset(matchingPreset ? value : -1)
  }

  return (
    <>
      <section id="pricing-hero">
        <div className="hero-content">
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the plan that fits your needs. No hidden fees, no surprises.</p>
        </div>
      </section>

      <section id="pricing-plans">
        <div className="pricing-container">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-plan ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className={`plan-price ${plan.name === 'Enterprise' ? 'contact-sales' : ''}`}>
                {plan.name === 'Enterprise' ? (
                  <span>{plan.price}</span>
                ) : (
                  <>
                    <span className="currency">€</span>
                    {plan.price}
                    <span className="period">{plan.period}</span>
                  </>
                )}
              </div>
              
              <button 
                className="discover-features-btn"
                onClick={() => togglePlan(plan.name)}
                aria-expanded={expandedPlans[plan.name] || false}
              >
                {expandedPlans[plan.name] ? 'Hide Features' : 'Discover the Features'}
                <i className={`fas fa-chevron-${expandedPlans[plan.name] ? 'up' : 'down'}`} aria-hidden="true"></i>
              </button>

              <div className={`plan-features ${expandedPlans[plan.name] ? 'expanded' : 'collapsed'}`}>
                <div className="plan-features-header">{plan.name} Tier Includes</div>
                <ul className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`feature-item ${feature.includes('Everything in') ? 'inheritance-feature' : ''}`}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="plan-cta" onClick={handleCtaClick}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="cost-calculator">
        <h2 className="section-title">Cost Calculator</h2>
        <p className="section-description">Estimate your monthly costs based on usage</p>
        
        <div className="calculator-container">
          <div className="calculator-input">
            <label htmlFor="tier-select">Select Tier:</label>
            <select 
              id="tier-select" 
              value={selectedTier} 
              onChange={(e) => setSelectedTier(e.target.value)}
            >
              <option value="development">Development (€100/hour)</option>
              <option value="production">Production (€150/hour)</option>
            </select>
          </div>

          <div className="calculator-input">
            <label htmlFor="hours-slider">Monthly Hours: {hours}</label>
            <input
              type="range"
              id="hours-slider"
              min="1"
              max="160"
              value={hours}
              onChange={(e) => handleHoursChange(parseInt(e.target.value))}
            />
            <input
              type="number"
              id="hours-input"
              min="1"
              max="160"
              value={hours}
              onChange={(e) => handleHoursChange(parseInt(e.target.value) || 1)}
            />
          </div>

          <div className="preset-buttons">
            {presetHours.map((preset) => (
              <button
                key={preset.hours}
                className={`preset-btn ${selectedPreset === preset.hours ? 'active' : ''}`}
                onClick={() => handlePresetClick(preset.hours)}
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="cost-summary">
            <div className="cost-item">
              <span>Monthly Total:</span>
              <span id="monthly-total">€{monthlyTotal.toLocaleString()}</span>
            </div>
            <div className="cost-item">
              <span>Hourly Rate:</span>
              <span id="hourly-rate">€{hourlyRate}/hour</span>
            </div>
            <div className="cost-item">
              <span>Monthly Hours:</span>
              <span id="monthly-hours">{hours} hours</span>
            </div>
            <div className="cost-item">
              <span>Daily Cost:</span>
              <span id="daily-cost">€{dailyCost}/day</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
