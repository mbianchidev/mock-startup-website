import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { getSortedPostsData } from '@/lib/markdown'
import styles from '@/app/inner.module.css'

export const metadata: Metadata = {
  title: 'Field Notes — Matteo',
  description: 'Cloud-native field notes, technical essays, and lessons from production.',
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function BlogPage() {
  const posts = getSortedPostsData()
  const [featuredPost, ...remainingPosts] = posts
  const categoryCount = new Set(posts.map((post) => post.category)).size

  return (
    <div className={styles.page}>
      <PageHero
        path="/blog"
        title="Field notes, not content marketing."
        description="Long-form lessons from cloud-native systems, developer relations, platform work, conferences, and the occasional industry funeral."
        tone="light"
        actions={
          featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className={styles.darkButton}>
              Read the latest dispatch
              <span aria-hidden="true">↗</span>
            </Link>
          )
        }
        aside={
          <dl className={styles.heroSpecs}>
            <div>
              <dt>Published</dt>
              <dd>{posts.length} field notes</dd>
            </div>
            <div>
              <dt>Coverage</dt>
              <dd>{categoryCount} technical territories</dd>
            </div>
            <div>
              <dt>Editorial policy</dt>
              <dd>Useful before optimised</dd>
            </div>
          </dl>
        }
      />

      {featuredPost && (
        <section className={styles.sectionDark} aria-labelledby="featured-note">
          <div className={styles.sectionInner}>
            <article className={styles.featuredPost}>
              <div className={styles.featuredPostMeta}>
                <span>{featuredPost.category}</span>
                <span>{featuredPost.readTime}</span>
                <time dateTime={featuredPost.date}>{formatDate(featuredPost.date)}</time>
              </div>
              <div className={styles.featuredPostBody}>
                <p>Latest dispatch</p>
                <h2 id="featured-note">{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <Link href={`/blog/${featuredPost.slug}`}>
                  Read the full note
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      <section className={styles.sectionSoft} aria-labelledby="all-notes">
        <div className={styles.sectionInner}>
          <div className={styles.sectionIntro}>
            <h2 id="all-notes">The rest of the archive.</h2>
            <p>Release notes from a career that keeps shipping in public.</p>
          </div>
          <div className={styles.postList}>
            {remainingPosts.map((post) => (
              <article key={post.slug} className={styles.postRow}>
                <div className={styles.postMeta}>
                  <span>{post.category}</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <div className={styles.postCopy}>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
                <div className={styles.postAction}>
                  <span>{post.readTime}</span>
                  <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
