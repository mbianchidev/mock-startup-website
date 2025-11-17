import { Metadata } from 'next'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'Blog - Matteo Platform',
  description: 'Insights, updates, and technical articles from the Matteo team',
}

export default function BlogPage() {
  const blogPosts = getSortedPostsData()

  return (
    <>
      <section id="hero">
        <div className="hero-content">
          <h1>Blog</h1>
          <p>Insights, updates, and technical articles from the Matteo team</p>
        </div>
      </section>

      <section id="blog-posts">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-card-header">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-card-footer">
                  <div className="blog-author">
                    <span className="author-name">{post.author}</span>
                    <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="blog-read-more">
                    Read More <i className="fas fa-arrow-right" aria-hidden="true"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
