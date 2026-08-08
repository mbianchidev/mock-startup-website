import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'
import {
  isSocialImageKey,
  type SocialImageKey,
} from '@/lib/siteConfig'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPostMetadata {
  title: string
  date: string
  author: string
  category: string
  excerpt: string
  slug: string
  image: SocialImageKey
  imageAlt: string
  updated?: string
  tags?: string[]
  readTime?: string
}

export interface BlogPostData extends BlogPostMetadata {
  content: string
}

function requiredString(
  data: Record<string, unknown>,
  field: string,
  fileName: string
) {
  const value = data[field]

  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error(`Blog post "${fileName}" requires a non-empty "${field}" field`)
  }

  return value.trim()
}

function validDate(value: string, field: string, fileName: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new Error(`Blog post "${fileName}" has an invalid "${field}" date: ${value}`)
  }

  const parsedDate = new Date(`${value}T00:00:00.000Z`)

  if (Number.isNaN(parsedDate.getTime()) || parsedDate.toISOString().slice(0, 10) !== value) {
    throw new Error(`Blog post "${fileName}" has an invalid "${field}" date: ${value}`)
  }

  return value
}

function parseTags(value: unknown, fileName: string) {
  if (value === undefined) {
    return undefined
  }

  if (
    !Array.isArray(value)
    || value.length === 0
    || value.some((tag) => typeof tag !== 'string' || tag.trim() === '')
  ) {
    throw new Error(`Blog post "${fileName}" must use a non-empty string list for "tags"`)
  }

  return value.map((tag) => tag.trim())
}

function parsePostMetadata(
  fileName: string,
  slug: string,
  data: Record<string, unknown>,
  content: string
): BlogPostMetadata {
  const image = requiredString(data, 'image', fileName)

  if (!isSocialImageKey(image)) {
    throw new Error(`Blog post "${fileName}" references an unknown social image: ${image}`)
  }

  const date = validDate(requiredString(data, 'date', fileName), 'date', fileName)
  const updatedValue = data.updated
  const updated =
    updatedValue === undefined
      ? undefined
      : validDate(requiredString(data, 'updated', fileName), 'updated', fileName)
  const readTimeValue = data.readTime
  const readTime =
    readTimeValue === undefined
      ? calculateReadTime(content)
      : requiredString(data, 'readTime', fileName)
  const tags = parseTags(data.tags, fileName)

  return {
    slug,
    title: requiredString(data, 'title', fileName),
    date,
    author: requiredString(data, 'author', fileName),
    category: requiredString(data, 'category', fileName),
    excerpt: requiredString(data, 'excerpt', fileName),
    image,
    imageAlt: requiredString(data, 'imageAlt', fileName),
    ...(updated ? { updated } : {}),
    ...(tags ? { tags } : {}),
    readTime,
  }
}

export function getSortedPostsData(): BlogPostMetadata[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md') && !fileName.toUpperCase().startsWith('README'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return parsePostMetadata(
        fileName,
        slug,
        matterResult.data,
        matterResult.content
      )
    })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md') && !fileName.toUpperCase().startsWith('README'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}

export async function getPostData(slug: string): Promise<BlogPostData | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const metadata = parsePostMetadata(
    `${slug}.md`,
    slug,
    matterResult.data,
    matterResult.content
  )

  const processedContent = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(matterResult.content)
  
  const contentHtml = processedContent
    .toString()
    .replace(/<img(?![^>]*\bloading=)([^>]*)>/g, '<img loading="lazy" decoding="async"$1>')

  return {
    ...metadata,
    content: contentHtml,
  }
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}
