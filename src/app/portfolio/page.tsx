'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import projectsData from '@/data/projects.json'

interface Project {
  name: string
  description: string
  url: string
  stars: string
  techStack: string[]
  icon: string
  contribution: string
}

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const projects: Project[] = projectsData.projects

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <section id="hero">
        <div className="hero-content">
          <h1>OSS Portfolio</h1>
          <p>Open Source contributions and projects that make a difference in the Cloud Native ecosystem</p>
          <div className="hero-buttons">
            <a href="https://github.com/mbianchidev" target="_blank" rel="noopener noreferrer" className="primary-button">
              <i className="fab fa-github" aria-hidden="true"></i> View on GitHub
            </a>
            <Link href="/about#community" className="secondary-button">Learn More</Link>
          </div>
        </div>
      </section>

      <section id="portfolio-projects">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-description">
          Contributions to major open source projects, with a focus on Kubernetes and Cloud Native technologies
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon">
                {mounted && <i className={project.icon} aria-hidden="true"></i>}
              </div>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-stats">
                <span className="project-stars">
                  {mounted && <i className="fas fa-star" aria-hidden="true"></i>} {project.stars}
                </span>
                <span className="project-contribution">{project.contribution}</span>
              </div>
              <div className="project-tech">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                View Project <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio-stats">
        <h2 className="section-title">Contribution Highlights</h2>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">40+</div>
            <div className="stat-label">Kubernetes PRs Merged</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">CNCF Events</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">22</div>
            <div className="stat-label">Conference Talks</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Blog Posts</div>
          </div>
        </div>
      </section>
    </>
  )
}
