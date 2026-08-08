import RedirectPage from '@/components/RedirectPage'
import { shortLinkMetadata } from '@/components/ShortLinkPage'

export default function ResumeRedirect() {
  return (
    <RedirectPage 
      destination="/static/Matteo_Bianchi_resume.pdf"
      title="Resume"
      description="Redirecting to Matteo's resume"
    />
  )
}

export const metadata = shortLinkMetadata