import { QAItem } from './QAItem.jsx'

export function FunctionalFeature() {
  return (
    <QAItem title="Kas un kāpēc ir funkcionālā iezīme?">
      <p>
        <strong>Funkcionālā iezīme</strong> ir sistēmas realizēta funkcionalitāte, kas
        atbalsta kādu plašāku spēju (capability). Tā apraksta, <em>kā sistēmai jāuzvedas</em>,
        kad šo funkcionalitāti izmanto.
      </p>
      <ul>
        <li>
          <strong>Minimums</strong>: nosaukums (<em>Feature Title</em>) + vismaz viens scenārijs.
        </li>
        <li>
          <strong>Kāpēc vajag</strong>: lai uzvedību varētu saprast visi iesaistītie (bizness,
          izstrāde, tests) un vēlāk arī pārbaudīt (ar automatizāciju).
        </li>
      </ul>
    </QAItem>
  )
}

