type Props = {
  page?: string
}

export function WorkInProgress({ page }: Props) {
  return (
    <section id="wip">
      <div className="container">
        <div className="wip-card">
          <div className="wip-emoji" aria-hidden="true">👷‍♀️🚧</div>
          <h2 className="section-title">{page ? `${page} page` : 'This page'} is under construction</h2>
          <p className="section-description">We’re busy hammering out the details. Check back soon — fresh pixels are being poured!</p>
          <div className="wip-progress">
            <span className="wip-dot" />
            <span className="wip-dot" />
            <span className="wip-dot" />
          </div>
        </div>
      </div>
    </section>
  )
}
