import Image from 'next/image'
import matteoMark from '@/assets/brand/matteo-mark.svg'
import styles from './SiteShell.module.css'

type BrandLogoProps = {
  priority?: boolean
}

export function BrandLogo({ priority = false }: BrandLogoProps) {
  return (
    <span className={styles.brandLogo}>
      <Image
        src={matteoMark}
        alt=""
        width={68}
        height={56}
        className={styles.brandMark}
        data-brand-mark
        aria-hidden="true"
        priority={priority}
      />
      <span className={styles.brandCopy}>
        <span className={styles.brandName}>Matteo</span>
        <span className={styles.brandTagline}>human platform</span>
      </span>
    </span>
  )
}
