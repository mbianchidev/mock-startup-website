'use client'

import { useEffect, useState, useRef } from 'react'

interface Stat {
  number: string
  label: string
}

const stats: Stat[] = [
  {
    number: '22+',
    label: 'Talks & Workshops delivered'
  },
  {
    number: '20,000+',
    label: 'Hours of uptime'
  },
  {
    number: '1000+',
    label: 'Millions of API calls enabled'
  }
]

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section id="numbers" ref={ref}>
      <h2>Impact in Numbers</h2>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className={`stat-number ${isVisible ? 'animate' : ''}`}>
              {stat.number}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}