import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import projectsData from '@/data/projects.json'
import { getSortedPostsData } from '@/lib/markdown'
import styles from '@/app/inner.module.css'

export const metadata: Metadata = {
  title: 'Open Source — Matteo',
  description: 'Creator-owned projects and upstream contributions across developer platforms, AI tooling, Kubernetes, infrastructure, and education.',
}

const ownedProjects = projectsData.projects.filter((project) => {
  const url = new URL(project.url)
  return url.hostname === 'github.com' && url.pathname.startsWith('/mbianchidev/')
})

const ecosystemProjects = projectsData.projects.filter(
  (project) => !ownedProjects.some((ownedProject) => ownedProject.url === project.url)
)

export default function Portfolio() {
  const postCount = getSortedPostsData().length
  const [featuredProject, ...otherOwnedProjects] = ownedProjects

  return (
    <div className={styles.page}>
      <PageHero
        path="/portfolio"
        title="Source available. Claims inspectable."
        description="Projects created, maintained, and contributed to across developer platforms, AI tooling, Kubernetes, infrastructure, and technical education."
        tone="green"
        actions={
          <>
            <a
              href="https://github.com/mbianchidev"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.darkButton}
            >
              Open GitHub
              <span aria-hidden="true">↗</span>
            </a>
            <Link href="/roadmap" className={styles.lightButton}>
              Read the changelog
            </Link>
          </>
        }
        aside={
          <dl className={styles.heroSpecs}>
            <div>
              <dt>Owned projects</dt>
              <dd>{ownedProjects.length}</dd>
            </div>
            <div>
              <dt>Ecosystems</dt>
              <dd>{ecosystemProjects.length} contributed to</dd>
            </div>
            <div>
              <dt>Field notes</dt>
              <dd>{postCount} published</dd>
            </div>
          </dl>
        }
      />

      {featuredProject && (
        <section className={styles.sectionDark} aria-labelledby="owned-projects">
          <div className={styles.sectionInner}>
            <div className={styles.sectionIntro}>
              <h2 id="owned-projects">Built and maintained here.</h2>
              <p>Personal repositories. The star counts belong to these projects, not borrowed ecosystems.</p>
            </div>
            <div className={styles.ownedProjects}>
              <article className={styles.featuredRepository}>
                <p>Creator-owned repository</p>
                <h3>{featuredProject.name}</h3>
                <p>{featuredProject.description}</p>
                <dl>
                  <div>
                    <dt>Role</dt>
                    <dd>{featuredProject.contribution}</dd>
                  </div>
                  <div>
                    <dt>Project signal</dt>
                    <dd>{featuredProject.stars} GitHub stars</dd>
                  </div>
                </dl>
                <ul className={styles.tagList}>
                  {featuredProject.techStack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <a href={featuredProject.url} target="_blank" rel="noopener noreferrer">
                  Inspect repository
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
              <div className={styles.repositoryRail}>
                {otherOwnedProjects.map((project) => (
                  <article key={project.url} className={styles.repositoryRecord}>
                    <div>
                      <p>{project.contribution}</p>
                      <h3>{project.name}</h3>
                    </div>
                    <p>{project.description}</p>
                    <div>
                      <span>{project.stars} stars on this project</span>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Source
                        <span aria-hidden="true">↗</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className={styles.sectionSoft} aria-labelledby="ecosystem-work">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="ecosystem-work">Contributed upstream.</h2>
            <p>Project reach is context. The contribution label is the personal claim.</p>
          </div>
          <div className={styles.contributionList}>
            {ecosystemProjects.map((project) => (
              <article key={project.url} className={styles.contributionRow}>
                <div>
                  <p>{project.contribution}</p>
                  <h3>{project.name}</h3>
                </div>
                <p>{project.description}</p>
                <div className={styles.contributionMeta}>
                  <span>{project.stars} project stars</span>
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Upstream repository
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionCyan} aria-labelledby="portfolio-output">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="portfolio-output">Output, not ARR.</h2>
            <p>Actual work products from the human-platform release history.</p>
          </div>
          <dl className={styles.outputGrid}>
            <div>
              <dt>40+</dt>
              <dd>Merged Kubernetes pull requests</dd>
            </div>
            <div>
              <dt>20+</dt>
              <dd>Talks and workshops delivered</dd>
            </div>
            <div>
              <dt>500+</dt>
              <dd>Learners trained</dd>
            </div>
            <div>
              <dt>15+</dt>
              <dd>Mentees coached · 5/5 stars</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  )
}
