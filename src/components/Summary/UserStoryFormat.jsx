import { QAItem } from './QAItem.jsx'

export function UserStoryFormat() {
  return (
    <QAItem title="Kādā formātā veidot lietotājstāstus (User Story)?">
      <p>
        Praktisks un izplatīts formāts ir 3 daļu veidne, kas pasaka <strong>kas</strong>,
        <strong> ko grib</strong> un <strong>kāpēc</strong>.
      </p>
      <ul>
        <li>
          <strong>Kā [loma / aktieris]</strong>
        </li>
        <li>
          <strong>Es vēlos [konkrētu sistēmas uzvedību]</strong>
        </li>
        <li>
          <strong>Lai [sasniegtu mērķi, kas balsta spēju]</strong>
        </li>
      </ul>
      <p className="muted">
        Piemērs: Kā autors es vēlos augšupielādēt profila bildi, lai lasītāji mani vieglāk
        atpazītu.
      </p>
    </QAItem>
  )
}

