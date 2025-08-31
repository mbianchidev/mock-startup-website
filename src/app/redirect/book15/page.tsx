import RedirectPage from '@/components/RedirectPage'

export default function Book15Redirect() {
  return (
    <RedirectPage 
      destination="https://cal.com/mbianchidev/intro"
      title="15 Minute Call"
      description="Redirecting to book a 15-minute intro call with Matteo"
    />
  )
}

export const metadata = {
  title: '15 Min Call - Matteo Bianchi',
  description: 'Book a 15-minute intro call with Matteo Bianchi'
}