import RedirectPage from '@/components/RedirectPage'

export default function ResumeRedirect() {
  return (
    <RedirectPage 
      destination="/static/Matteo_Bianchi_resume.pdf"
      title="Resume"
      description="Redirecting to Matteo's resume"
    />
  )
}

export const metadata = {
  title: 'Resume - Matteo Bianchi',
  description: 'Matteo Bianchi Resume PDF'
}