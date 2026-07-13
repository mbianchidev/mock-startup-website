'use client'

import { useState } from 'react'
import { PageHero } from '@/components/PageHero'
import styles from '@/app/inner.module.css'

interface PricingPlan {
  id: 'advisory' | 'delivery' | 'full-time'
  name: string
  description: string
  price: string
  hourlyRate?: number
  period: string
  recommended?: boolean
  features: string[]
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'advisory',
    name: 'Advisory',
    description: 'Focused architecture, product, platform, or cloud-native decisions without pretending a slide deck is delivery.',
    price: '€100',
    hourlyRate: 100,
    period: '/hour',
    features: [
      'Architecture and platform review',
      'Cloud-native strategy',
      'Developer experience feedback',
      'Technical product positioning',
      'Written recommendations',
      'No mandatory transformation programme',
    ],
  },
  {
    id: 'delivery',
    name: 'Delivery',
    description: 'Hands-on engineering and product work for teams that need the recommendation implemented, tested, and adopted.',
    price: '€150',
    hourlyRate: 150,
    period: '/hour',
    recommended: true,
    features: [
      'Everything in Advisory',
      'Platform and cloud implementation',
      'Typed product interfaces and CLIs',
      'Automation, CI/CD, and infrastructure as code',
      'Documentation and enablement',
      'Direct feedback loops with users',
    ],
  },
  {
    id: 'full-time',
    name: 'Full-time',
    description: 'The complete human-platform deployment for companies hiring a product-minded senior engineer.',
    price: 'Let’s talk',
    period: '',
    features: [
      'All operating modes included',
      'Long-term product and system ownership',
      'Platform, cloud, DevEx, and technical storytelling',
      'Open-source and community leverage',
      'No seat-based pricing',
      'Coffee dependency remains customer-managed',
    ],
  },
]

const calculatorPlans = pricingPlans.filter(
  (plan): plan is PricingPlan & { hourlyRate: number } => typeof plan.hourlyRate === 'number'
)

const presetHours = [10, 20, 40, 80, 160]

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState<(typeof calculatorPlans)[number]['id']>('delivery')
  const [hours, setHours] = useState(40)
  const [selectedPreset, setSelectedPreset] = useState(40)
  const [expandedPlans, setExpandedPlans] = useState<Record<string, boolean>>({
    delivery: true,
  })

  const selectedPlan = calculatorPlans.find((plan) => plan.id === selectedTier) ?? calculatorPlans[1]
  const monthlyTotal = selectedPlan.hourlyRate * hours
  const dailyCost = Math.round((monthlyTotal / 30) * 100) / 100

  const handleHoursChange = (value: number) => {
    const boundedValue = Math.min(160, Math.max(1, value))
    setHours(boundedValue)
    setSelectedPreset(presetHours.includes(boundedValue) ? boundedValue : -1)
  }

  return (
    <div className={styles.page}>
      <PageHero
        path="/pricing"
        title="Transparent pricing. Extremely negotiable acquisition model."
        description="Hourly advisory and delivery rates for the consulting version. Companies hiring the full product should skip directly to the human conversation."
        tone="dark"
        actions={
          <a
            href="https://cal.com/mbianchidev/intro"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryButton}
          >
            Request a quote
            <span aria-hidden="true">↗</span>
          </a>
        }
        aside={
          <dl className={styles.heroSpecs}>
            <div>
              <dt>Hidden fees</dt>
              <dd>None</dd>
            </div>
            <div>
              <dt>Seat pricing</dt>
              <dd>Physically impossible</dd>
            </div>
            <div>
              <dt>Enterprise plan</dt>
              <dd>Hire the human</dd>
            </div>
          </dl>
        }
      />

      <section className={styles.sectionLight} aria-labelledby="plans-title">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="plans-title">Choose an engagement shape.</h2>
            <p>The tiers are a useful framing device, not a substitute for scoping the actual work.</p>
          </div>
          <div className={styles.pricingGrid}>
            {pricingPlans.map((plan) => {
              const isExpanded = Boolean(expandedPlans[plan.id])
              const featuresId = `${plan.id}-features`

              return (
                <article
                  key={plan.id}
                  className={`${styles.pricingPlan} ${plan.recommended ? styles.recommendedPlan : ''}`}
                >
                  <div className={styles.planHeader}>
                    <div>
                      {plan.recommended && <p>Best default</p>}
                      <h3>{plan.name}</h3>
                    </div>
                    <div className={styles.planPrice}>
                      <strong>{plan.price}</strong>
                      <span>{plan.period}</span>
                    </div>
                  </div>
                  <p>{plan.description}</p>
                  <button
                    type="button"
                    className={styles.planToggle}
                    aria-expanded={isExpanded}
                    aria-controls={featuresId}
                    onClick={() =>
                      setExpandedPlans((current) => ({
                        ...current,
                        [plan.id]: !current[plan.id],
                      }))
                    }
                  >
                    {isExpanded ? 'Hide included work' : 'Show included work'}
                    <span aria-hidden="true">{isExpanded ? '−' : '+'}</span>
                  </button>
                  <div id={featuresId} hidden={!isExpanded}>
                    <ul className={styles.planFeatures}>
                      {plan.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href="https://cal.com/mbianchidev/intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={plan.recommended ? styles.darkButton : styles.lightButton}
                  >
                    {plan.id === 'full-time' ? 'Start a hiring conversation' : 'Scope this engagement'}
                    <span aria-hidden="true">↗</span>
                  </a>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className={styles.quoteSection} aria-labelledby="quote-title">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="quote-title">Generate a rough quote.</h2>
            <p>Calculator accuracy: mathematically correct, commercially incomplete.</p>
          </div>
          <div className={styles.calculator}>
            <div className={styles.calculatorControls}>
              <label htmlFor="tier-select">Engagement tier</label>
              <select
                id="tier-select"
                value={selectedTier}
                onChange={(event) => setSelectedTier(event.target.value as typeof selectedTier)}
              >
                {calculatorPlans.map((plan) => (
                  <option key={plan.id} value={plan.id}>
                    {plan.name} (€{plan.hourlyRate}/hour)
                  </option>
                ))}
              </select>

              <label htmlFor="hours-slider">Monthly hours: {hours}</label>
              <input
                id="hours-slider"
                type="range"
                min="1"
                max="160"
                value={hours}
                onChange={(event) => handleHoursChange(Number(event.target.value))}
              />

              <label htmlFor="hours-input">Exact monthly hours</label>
              <input
                id="hours-input"
                type="number"
                min="1"
                max="160"
                value={hours}
                onChange={(event) => handleHoursChange(Number(event.target.value) || 1)}
              />

              <div className={styles.presetGroup} role="group" aria-label="Preset monthly hours">
                {presetHours.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    aria-pressed={selectedPreset === preset}
                    onClick={() => handleHoursChange(preset)}
                  >
                    {preset}h
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.quoteOutput} aria-live="polite">
              <p>Estimated monthly total</p>
              <output htmlFor="tier-select hours-slider hours-input">
                €{monthlyTotal.toLocaleString()}
              </output>
              <dl>
                <div>
                  <dt>Hourly rate</dt>
                  <dd>€{selectedPlan.hourlyRate}</dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>{hours}</dd>
                </div>
                <div>
                  <dt>Daily equivalent</dt>
                  <dd>€{dailyCost}</dd>
                </div>
              </dl>
              <p>Final quote depends on scope, context, risk, and whether the problem is actually Kubernetes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
