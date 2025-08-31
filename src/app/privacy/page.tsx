import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Matteo Platform',
  description: 'This privacy policy explains how we collect, use, and protect your information.'
}

export default function PrivacyPage() {
  return (
    <div className="terms-privacy-page">
      <section>
        <h2>Privacy Policy</h2>
        <p>This privacy policy explains how we collect, use, and protect your information.</p>
      </section>

      <section>
        <h2>1. Information We Collect</h2>
        <p>Absolutely nothing. Unless you send me an email, duh. In that case, I will collect your email address and name.</p>
        <p>We do not collect any personal information from you when you visit our website.</p>
        <p>We do not use cookies or any tracking technologies.</p>
        <p>If you contact us via email, we will only use your information to respond to your inquiry.</p>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>We do not use your information for any purpose.</p>
      </section>

      <section>
        <h2>3. Data Security</h2>
        <p>We take data security seriously and have implemented measures to protect your information (we don't have any database this is just HTML and CSS).</p>
      </section>

      <section>
        <h2>4. Third-Party Services</h2>
        <p>We do not share your information with any third-party services.</p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You have the right to request access to the personal information we hold about you and to ask for it to be deleted.</p>
      </section>

      <section>
        <h2>6. Changes to This Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website.</p>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this privacy policy, please contact us at{' '}
          <a href="mailto:info@mb-consulting.dev">info@mb-consulting.dev</a>.
        </p>
      </section>
      
      <section>
        <h2>8. Effective Date</h2>
        <p>
          This privacy policy is effective as of <span id="current-year">2025</span>.
        </p>
      </section>

      <section>
        <h2>9. Governing Law</h2>
        <p>This privacy policy is governed by the laws of the jurisdiction in which we operate.</p>
      </section>

      <section>
        <h2>10. Children's Privacy</h2>
        <p>
          Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children
          under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
        </p>
      </section>

      <section>
        <h2>11. International Users</h2>
        <p>If you are accessing our website from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States.</p>
      </section>

      <section>
        <h2>12. Links to Other Websites</h2>
        <p>Our website may contain links to other websites. We are not responsible for the privacy practices of those websites.</p>
      </section>

      <section>
        <h2>13. Data Retention</h2>
        <p>We do not retain any personal information about you. If you contact us via email, we will retain your information only as long as necessary to respond to your inquiry.</p>
      </section>

      <section>
        <h2>14. Data Breach Notification</h2>
        <p>In the event of a data breach, we will notify you as required by law.</p>
      </section>

      <section>
        <h2>15. User Consent</h2>
        <p>By using our website, you consent to our privacy policy.</p>
      </section>

      <section>
        <h2>16. Opt-Out Rights</h2>
        <p>You have the right to opt-out of receiving marketing communications from us. You can do this by following the unsubscribe instructions in our emails.</p>
      </section>

      <section>
        <h2>17. Data Portability</h2>
        <p>You have the right to request a copy of your personal information in a structured, commonly used, and machine-readable format.</p>
      </section>

      <section>
        <h2>18. Data Accuracy</h2>
        <p>We take reasonable steps to ensure that the personal information we hold is accurate, complete, and up-to-date.</p>
      </section>

      <section>
        <h2>19. Data Minimization</h2>
        <p>We only collect personal information that is necessary for the purposes outlined in this privacy policy.</p>
      </section>

      <section>
        <h2>20. Data Protection Officer</h2>
        <p>
          If you have any questions or concerns about our privacy practices, please contact our Data Protection Officer at{' '}
          <a href="mailto:privacy@mb-consulting.dev">privacy@mb-consulting.dev</a>.
        </p>
      </section>

      <section>
        <h2>21. Cookies</h2>
        <p>We do not use cookies or any tracking technologies on our website.</p>
      </section>
    </div>
  )
}
