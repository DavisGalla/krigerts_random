import { QAItem } from './QAItem.jsx'

export function RubiksCube() {
  return (
    <QAItem title="Kā Rubika kubs ļauj skatīties uz funkcionālajām iezīmēm?">
      <p>
        Metafora: iedomājies iezīmi kā <strong>Rubika kubu</strong>. Pats “kubs” nemainās
        (tā ir viena funkcionalitāte), bet, <strong>pagriežot</strong> to un skatoties no
        cita leņķa, tu ieraugi citus “attēlus” — t. i., <strong>citus scenārijus</strong>.
      </p>
      <ul>
        <li>
          <strong>Katrs “leņķis”</strong>: cita perspektīva, cita apstākļu kombinācija.
        </li>
        <li>
          <strong>Mērķis</strong>: atrast variācijas, kur iepriekšējie pieņēmumi vairs nav spēkā
          (ierobežojumi, NFR, kļūdu gadījumi).
        </li>
      </ul>
    </QAItem>
  )
}

