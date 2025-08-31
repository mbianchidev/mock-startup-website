import RedirectPage from '@/components/RedirectPage'

export default function GitHubRedirect() {
  return (
    <RedirectPage 
      destination="https://github.com/mbianchidev"
      title="GitHub Profile"
      description="Redirecting to Matteo's GitHub profile"
    />
  )
}

export const metadata = {
  title: 'GitHub - Matteo Bianchi',
  description: 'Redirecting to Matteo Bianchi GitHub profile'
}