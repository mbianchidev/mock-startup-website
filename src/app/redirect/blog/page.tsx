import RedirectPage from '@/components/RedirectPage'
import { shortLinkMetadata } from '@/components/ShortLinkPage'

export default function BlogRedirect() {
  return (
    <RedirectPage 
      destination="https://blog.mb-consulting.dev"
      title="Blog"
      description="Redirecting to Matteo's Blog"
    />
  )
}

export const metadata = shortLinkMetadata