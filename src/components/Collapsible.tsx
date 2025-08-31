'use client'

import { PropsWithChildren } from 'react'

interface CollapsibleProps {
  title: string
  defaultOpen?: boolean
  className?: string
}

export default function Collapsible({ title, defaultOpen = false, className, children }: PropsWithChildren<CollapsibleProps>) {
  return (
    <details className={`collapsible ${className ?? ''}`.trim()} open={defaultOpen}>
      <summary>
        <h3>{title}</h3>
      </summary>
      <div className="collapsible-content">
        {children}
      </div>
    </details>
  )
}
