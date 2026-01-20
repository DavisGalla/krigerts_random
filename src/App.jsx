import { Translations } from './components/Translations/Translations.jsx'
import { Summary } from './components/Summary/Summary.jsx'

export function App() {
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Funkcionālās iezīmes</h1>
        <p className="pageSubtitle">Konspekts, tulkojumi un termini</p>
      </header>

      <main className="pageMain">
        <Summary />
        <Translations />
      </main>
    </div>
  )
}

