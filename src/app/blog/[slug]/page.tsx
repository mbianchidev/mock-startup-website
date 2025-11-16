import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostData, getAllPostSlugs } from '@/lib/markdown'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostData(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - Matteo Platform`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostData(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <article className="blog-post">
        <div className="blog-post-header">
          <div className="container">
            <Link href="/blog" className="back-link">
              <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to Blog
            </Link>
            <div className="blog-post-meta">
              <span className="blog-category">{post.category}</span>
              <span className="blog-read-time">{post.readTime}</span>
            </div>
            <h1>{post.title}</h1>
            <div className="blog-post-author-info">
              <span className="author-name">{post.author}</span>
              <span className="blog-separator">•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>
          </div>
        </div>
        
        <div className="blog-post-content">
          <div className="container">
            <div 
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>

        <div className="blog-post-footer">
          <div className="container">
            <Link href="/blog" className="back-to-blog-btn">
              <i className="fas fa-arrow-left" aria-hidden="true"></i> Back to All Posts
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
