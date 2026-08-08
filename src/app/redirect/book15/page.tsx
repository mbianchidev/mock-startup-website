import RedirectPage from '@/components/RedirectPage'
import { shortLinkMetadata } from '@/components/ShortLinkPage'

export default function Book15Redirect() {
  return (
    <RedirectPage 
      destination="https://cal.com/mbianchidev/intro"
      title="15 Minute Call"
      description="Redirecting to book a 15-minute intro call with Matteo"
    />
  )
}

export const metadata = shortLinkMetadata