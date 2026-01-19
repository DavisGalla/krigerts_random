import { Translations } from './components/Translations/Translations.jsx'

export function App() {
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Funkcionālās iezīmes</h1>
        <p className="pageSubtitle">Tulkojumi un termini</p>
      </header>

      <main className="pageMain">
        <Translations />
      </main>
    </div>
  )
}

