import RedirectPage from '@/components/RedirectPage'

export default function BookingsRedirect() {
  return (
    <RedirectPage 
      destination="https://cal.com/mbianchidev"
      title="Bookings"
      description="Redirecting to Matteo's booking calendar"
    />
  )
}

export const metadata = {
  title: 'Bookings - Matteo Bianchi',
  description: 'Book a call with Matteo Bianchi'
}