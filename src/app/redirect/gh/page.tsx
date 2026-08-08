import RedirectPage from '@/components/RedirectPage'
import { shortLinkMetadata } from '@/components/ShortLinkPage'

export default function GitHubRedirect() {
  return (
    <RedirectPage 
      destination="https://github.com/mbianchidev"
      title="GitHub Profile"
      description="Redirecting to Matteo's GitHub profile"
    />
  )
}

export const metadata = shortLinkMetadata