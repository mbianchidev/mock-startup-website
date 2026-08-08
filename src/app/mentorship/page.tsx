import ShortLinkPage, { shortLinkMetadata } from '@/components/ShortLinkPage'

export const metadata = shortLinkMetadata

export default function ShortLinkRoute() {
  return <ShortLinkPage source="/mentorship" />
}
