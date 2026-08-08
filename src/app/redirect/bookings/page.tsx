import RedirectPage from '@/components/RedirectPage'
import { shortLinkMetadata } from '@/components/ShortLinkPage'

export default function BookingsRedirect() {
  return (
    <RedirectPage 
      destination="https://cal.com/mbianchidev"
      title="Bookings"
      description="Redirecting to Matteo's booking calendar"
    />
  )
}

export const metadata = shortLinkMetadata