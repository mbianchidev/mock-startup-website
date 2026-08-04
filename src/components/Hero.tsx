import Image from 'next/image'
import matteoPortrait from '@/assets/matteo-kcd-denmark.jpg'
import styles from '@/app/home.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.heroGrid}>
        <div className={styles.heroCopy}>
          <p className={styles.releaseBadge}>
            <span aria-hidden="true" />
            Matteo v2026.8 is accepting deployments
          </p>
          <h1 id="hero-title" className={styles.heroTitle}>
            The engineer between product, platform, and people.
          </h1>
          <p className={styles.heroText}>
            Senior Engineer — Platforms, Solutions &amp; AI. Matteo turns customer
            pain into cloud systems, developer platforms, and AI automation people
            actually adopt—then makes the trade-offs clear to engineers, leaders,
            and communities.
          </p>
          <div className={styles.heroActions}>
            <a
              href="https://cal.com/mbianchidev/intro"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryAction}
            >
              Start a hiring conversation
              <span aria-hidden="true">↗</span>
            </a>
            <a href="#compatibility" className={styles.secondaryAction}>
              Run compatibility test
              <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className={styles.heroFinePrint}>
            Full-time is the primary deployment. Select consulting endpoints remain available.
          </p>
        </div>

        <aside className={styles.productShell} aria-label="Matteo product specifications">
          <div className={styles.shellHeader}>
            <span className={styles.productCode}>MATTEO / HUMAN PLATFORM</span>
            <span className={styles.productStatus}>
              <span className={styles.statusDot} aria-hidden="true" />
              Ready to deploy
            </span>
          </div>
          <div className={styles.portraitFrame}>
            <Image
              src={matteoPortrait}
              alt="Matteo Bianchi speaking on stage at KCD Denmark"
              width={900}
              height={700}
              className={styles.portrait}
              priority
            />
            <span className={styles.portraitLabel}>LIVE SYSTEM / KCD DENMARK</span>
          </div>
          <dl className={styles.productSpecs}>
            <div className={styles.specRow}>
              <dt>Runtime</dt>
              <dd>Senior engineering + customer empathy</dd>
            </div>
            <div className={styles.specRow}>
              <dt>Interfaces</dt>
              <dd>Platforms · solutions · AI · open source</dd>
            </div>
            <div className={styles.specRow}>
              <dt>Known quirk</dt>
              <dd>May automate the recurring task before lunch</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
