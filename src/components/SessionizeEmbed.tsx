'use client'

import { useEffect, useMemo, useRef } from 'react'

interface Props {
  src: string
  className?: string
}

// Loads a Sessionize embed script inside an iframe via srcdoc so that
// document.write used by their embeds works in a React/Next.js app.
export default function SessionizeEmbed({ src, className }: Props) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  const base = useMemo(() => {
    return `<!doctype html><html><head><meta charset=\"utf-8\" /><base href=\"https://sessionize.com/\" target=\"_blank\" /><style>html,body{margin:0;padding:0;background:#fff;color:#111;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;}</style></head><body></body></html>`
  }, [])

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

  // Load a minimal document, then open/write/close so Sessionize's
  // document.write works inside the iframe context.
  iframe.srcdoc = base

    const resize = () => {
      try {
        const doc = iframe.contentDocument
        const body = doc?.body
        if (!body) return
        // Add a little buffer to avoid scrollbars
        const height = Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight)
        iframe.style.height = `${Math.max(60, height)}px`
      } catch {
        // Cross-origin or timing issue; ignore
      }
    }

    const onLoad = () => {
      resize()
      try {
        const doc = iframe.contentDocument
        if (!doc) return
        // Ensure the doc is open while we inject the external script
        doc.open()
  doc.write(`<!doctype html><html><head><meta charset=\"utf-8\" /><base href=\"https://sessionize.com/\" target=\"_blank\" /><style>html,body{margin:0;padding:0;background:#fff;color:#111;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;}</style></head><body><div id=\"sessionize-root\"></div><script type=\"text/javascript\" src=\"${src}\"></` + `script></body></html>`)
        doc.close()

        const body = doc.body
        if (!body) return
        const ro = new ResizeObserver(() => resize())
        ro.observe(body)
        // @ts-expect-error store for cleanup
        iframe._ro = ro
        // Fallback polling for height changes during initial render
        let ticks = 0
        const id = setInterval(() => {
          resize()
          if (++ticks > 40) clearInterval(id) // ~2s at 50ms
        }, 50)
        // @ts-expect-error store for cleanup
        iframe._poll = id
      } catch {
        // ignore
      }
    }

    iframe.addEventListener('load', onLoad)
    return () => {
      iframe.removeEventListener('load', onLoad)
      // @ts-expect-error cleanup
  const ro: ResizeObserver | undefined = iframe._ro
      ro?.disconnect?.()
  // @ts-expect-error cleanup
  const id: number | undefined = iframe._poll
  if (id) clearInterval(id)
    }
  }, [base, src])

  return (
    <iframe
      ref={iframeRef}
      className={className}
      title="Sessionize Embed"
      style={{ width: '100%', border: '0', height: 80, overflow: 'hidden' }}
      // sandbox intentionally omitted to maximize compatibility with the embed script
    />
  )
}
