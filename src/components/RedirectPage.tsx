'use client'

import { useEffect } from 'react'

interface RedirectPageProps {
  destination: string
  title: string
  description?: string
}

export default function RedirectPage({ destination, title, description }: RedirectPageProps) {
  useEffect(() => {
    // Redirect immediately
    window.location.href = destination
  }, [destination])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#f8fafc'
    }}>
      <div style={{
        maxWidth: '500px',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
      }}>
        <h1 style={{ marginBottom: '1rem', color: '#1f2937' }}>
          Redirecting to {title}...
        </h1>
        {description && (
          <p style={{ marginBottom: '2rem', color: '#6b7280' }}>
            {description}
          </p>
        )}
        <p style={{ marginBottom: '1rem', color: '#6b7280' }}>
          If you are not redirected automatically, 
          <a 
            href={destination}
            style={{ 
              color: '#3b82f6', 
              textDecoration: 'underline',
              marginLeft: '0.25rem'
            }}
          >
            click here
          </a>
        </p>
        <div style={{
          fontSize: '0.875rem',
          color: '#9ca3af'
        }}>
          Redirecting to: {destination}
        </div>
      </div>
    </div>
  )
}