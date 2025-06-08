import Link from 'next/link'

export default function NotFound() {
  return (
    <section id="hero" style={{ textAlign: 'center', padding: '120px 20px' }}>
      <div className="hero-content">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <div className="hero-buttons">
          <Link href="/" className="primary-button">Go Home</Link>
        </div>
      </div>
    </section>
  )
}