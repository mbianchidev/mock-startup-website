import RedirectPage from '@/components/RedirectPage'
import { shortLinkMetadata } from '@/components/ShortLinkPage'

export default function LinkedInShortRedirect() {
  return (
    <RedirectPage 
      destination="https://www.linkedin.com/in/mbianchidev/"
      title="LinkedIn Profile"
      description="Redirecting to Matteo's LinkedIn profile"
    />
  )
}

export const metadata = shortLinkMetadata