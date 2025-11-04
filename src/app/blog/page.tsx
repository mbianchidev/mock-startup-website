import { Metadata } from 'next'
import { BlogPost } from '@/types'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Matteo Platform',
  description: 'Insights, updates, and technical articles from the Matteo team',
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable Cloud Native Applications',
    excerpt: 'Learn how to architect and deploy cloud native applications that scale effortlessly across multiple cloud providers and Kubernetes clusters.',
    content: '',
    author: 'Matteo Bianchi',
    date: '2024-03-15',
    category: 'Cloud Native',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'The Future of Multi-Cloud Strategy',
    excerpt: 'Explore how organizations are leveraging multi-cloud approaches to enhance reliability, reduce vendor lock-in, and optimize costs.',
    content: '',
    author: 'Matieu Blanc',
    date: '2024-03-10',
    category: 'Strategy',
    readTime: '6 min read'
  },
  {
    id: '3',
    title: 'Kubernetes Best Practices for Production',
    excerpt: 'Essential tips and patterns for running Kubernetes workloads in production environments with confidence and reliability.',
    content: '',
    author: 'Matthew White',
    date: '2024-03-05',
    category: 'Kubernetes',
    readTime: '10 min read'
  },
  {
    id: '4',
    title: 'Security in the Cloud Native Era',
    excerpt: 'Understanding modern security practices for containerized applications and microservices architectures.',
    content: '',
    author: 'Felice Nero',
    date: '2024-02-28',
    category: 'Security',
    readTime: '7 min read'
  },
  {
    id: '5',
    title: 'Optimizing Developer Experience',
    excerpt: 'How platform engineering can transform the way teams build, deploy, and maintain modern applications.',
    content: '',
    author: 'Teo Blanco',
    date: '2024-02-20',
    category: 'Developer Experience',
    readTime: '5 min read'
  },
  {
    id: '6',
    title: 'Open Source Contributions That Matter',
    excerpt: 'Why contributing to open source is crucial for innovation and how to make impactful contributions to the community.',
    content: '',
    author: 'Mattia Bianchi',
    date: '2024-02-15',
    category: 'Open Source',
    readTime: '6 min read'
  }
]

export default function BlogPage() {
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
              <article key={post.id} className="blog-card">
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
                  <Link href={`/redirect/blog`} className="blog-read-more">
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
