'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '@/app/home.module.css'

const scenarios = [
  {
    id: 'platform',
    label: 'Platform chaos',
    signal: 'MATCH CONFIRMED / HIGH CONFIDENCE',
    title: 'Compatible with teams that need a paved road, not another portal.',
    summary:
      'Matteo treats the platform as a product: clear users, opinionated defaults, useful feedback loops, and fewer tickets disguised as strategy.',
    proof: [
      'Created the 111-star Platform Engineering Roadmap',
      '40+ merged Kubernetes pull requests',
      'Hands-on multi-cloud and infrastructure-as-code delivery'
    ],
    href: 'https://github.com/mbianchidev/platform-engineering-roadmap',
    action: 'Open the platform evidence'
  },
  {
    id: 'cloud',
    label: 'Cloud complexity',
    signal: 'MATCH CONFIRMED / MULTI-CLOUD',
    title: 'Comfortable where cloud abstractions stop being abstract.',
    summary:
      'Architecture, delivery, operations, and cost trade-offs stay connected. The goal is resilient systems, not a diagram with every vendor logo.',
    proof: [
      'Kubernetes contributor and production operator',
      'Delivery experience across AWS, Azure, and Google Cloud',
      'OpenTofu, automation, containers, and CI/CD fluency'
    ],
    href: '/portfolio',
    action: 'Review cloud-native work'
  },
  {
    id: 'developer-experience',
    label: 'Developer friction',
    signal: 'MATCH CONFIRMED / PRODUCT MODE',
    title: 'Treats developer experience as product work with an engineering budget.',
    summary:
      'The useful abstraction wins: typed interfaces, focused tooling, fast feedback, and documentation that answers the question before Slack does.',
    proof: [
      'Built Engineering Interviews as a typed developer-learning product',
      'Ships React, TypeScript, Python, and automation tooling',
      'Designs for adoption, not just technical completion'
    ],
    href: 'https://github.com/mbianchidev/engineering-interviews',
    action: 'Inspect the developer product'
  },
  {
    id: 'storytelling',
    label: 'Invisible expertise',
    signal: 'MATCH CONFIRMED / BROADCAST ENABLED',
    title: 'Turns deep systems work into ideas teams can repeat.',
    summary:
      'Technical communication is part of the architecture. Matteo makes complex trade-offs legible to engineers, leaders, and communities without sanding off the nuance.',
    proof: [
      '22+ talks and workshops delivered',
      'Long-form cloud-native writing and field guides',
      'Community leadership across the CNCF ecosystem'
    ],
    href: '/about#community',
    action: 'See talks and community work'
  }
]

export function CompatibilityLab() {
  const [selectedId, setSelectedId] = useState(scenarios[0].id)
  const selected = scenarios.find((scenario) => scenario.id === selectedId) ?? scenarios[0]

  useEffect(() => {
    console.info(
      '%cMatteo diagnostics: source available, ego load within operating limits. Hiring endpoint: https://cal.com/mbianchidev/intro',
      'color:#00D9FF;font-weight:700'
    )
  }, [])

  return (
    <section id="compatibility" className={styles.compatibility} aria-labelledby="compatibility-title">
      <div className={styles.compatibilityIntro}>
        <h2 id="compatibility-title">Run a compatibility check.</h2>
        <p>
          Select the problem currently haunting your roadmap. The exported page
          ships with a useful default; JavaScript only changes the diagnosis.
        </p>
      </div>

      <div className={styles.lab}>
        <div className={styles.scenarioList} role="group" aria-label="Hiring challenges">
          {scenarios.map((scenario) => {
            const isSelected = scenario.id === selected.id

            return (
              <button
                key={scenario.id}
                type="button"
                className={`${styles.scenarioButton} ${isSelected ? styles.scenarioButtonActive : ''}`}
                aria-pressed={isSelected}
                aria-controls="compatibility-result"
                onClick={() => setSelectedId(scenario.id)}
              >
                <span>{scenario.label}</span>
                <span aria-hidden="true">{isSelected ? '●' : '○'}</span>
              </button>
            )
          })}
        </div>

        <div
          key={selected.id}
          id="compatibility-result"
          className={styles.compatibilityResult}
          aria-live="polite"
          aria-atomic="true"
        >
          <p className={styles.resultSignal}>{selected.signal}</p>
          <h3>{selected.title}</h3>
          <p className={styles.resultSummary}>{selected.summary}</p>
          <ul>
            {selected.proof.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
          {selected.href.startsWith('http') ? (
            <a href={selected.href} target="_blank" rel="noopener noreferrer">
              {selected.action}
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <Link href={selected.href}>
              {selected.action}
              <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}