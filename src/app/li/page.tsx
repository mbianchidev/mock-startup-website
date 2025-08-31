import RedirectPage from '@/components/RedirectPage'

export default function LinkedInShortRedirect() {
  return (
    <RedirectPage 
      destination="https://www.linkedin.com/in/mbianchidev/"
      title="LinkedIn Profile"
      description="Redirecting to Matteo's LinkedIn profile"
    />
  )
}

export const metadata = {
  title: 'LinkedIn - Matteo Bianchi',
  description: 'Redirecting to Matteo Bianchi LinkedIn profile'
}