import RedirectPage from '@/components/RedirectPage'

export default function BlogRedirect() {
  return (
    <RedirectPage 
      destination="https://blog.mb-consulting.dev"
      title="Blog"
      description="Redirecting to Matteo's Blog"
    />
  )
}

export const metadata = {
  title: 'Blog - Matteo Bianchi',
  description: 'Redirecting to Matteo Bianchi Blog'
}