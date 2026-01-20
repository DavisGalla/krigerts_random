import { Translations } from './components/Translations/Translations.jsx'
import { Summary } from './components/Summary/Summary.jsx'
import { Functional } from './components/common/Functional.jsx'

export function App() {
  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Funkcionālās iezīmes</h1>
        <p className="pageSubtitle">Konspekts, tulkojumi un termini</p>
      </header>

      <main className="pageMain">
        <Summary />
        <Functional />
        <Translations />
      </main>
    </div>
  )
}

