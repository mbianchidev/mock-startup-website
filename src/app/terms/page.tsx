import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Matteo Platform',
  description: 'Terms and conditions governing the use of the Matteo website and services.'
}

export default function TermsPage() {
  return (
    <div className="terms-privacy-page">
      <section>
        <h2>Terms of Service</h2>
        <p>These terms and conditions govern your use of our website and services.</p>
      </section>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By using our website, you agree to these terms and conditions.</p>
      </section>

      <section>
        <h2>2. Changes to Terms</h2>
        <p>We may update these terms from time to time. Your continued use of the website after changes indicates your acceptance of the new terms.</p>
      </section>
      
      <section>
        <h2>3. User Responsibilities</h2>
        <p>You are responsible for your use of the website and must comply with all applicable laws.</p>
      </section>

      <section>
        <h2>4. Limitation of Liability</h2>
        <p>We are not liable for any damages arising from your use of the website.</p>
      </section>

      <section>
        <h2>5. Governing Law</h2>
        <p>These terms are governed by the laws of the jurisdiction in which we operate.</p>
      </section>

      <section>
        <h2>6. Contact Information</h2>
        <p>
          If you have any questions about these terms, please contact us at{' '}
          <a href="mailto:privacy@mb-consulting.dev">privacy@mb-consulting.dev</a>.
        </p>
      </section>
    </div>
  )
}
