export function QAItem({ title, children }) {
  return (
    <section className="qaItem">
      <h3 className="qaTitle">{title}</h3>
      <div className="qaBody">{children}</div>
    </section>
  )
}

