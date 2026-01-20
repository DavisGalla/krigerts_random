import { QAItem } from './QAItem.jsx'

export function HappyPath() {
  return (
    <QAItem title="Kas ir veiksmīgā iznākuma scenārijs (Happy Path Scenario)?">
      <p>
        <strong>Happy Path</strong> ir scenārijs, kur galvenais lietotājs sasniedz mērķi
        <strong>bez šķēršļiem</strong> — pieņemot, ka viss notiek “kā paredzēts”.
      </p>
      <ul>
        <li>
          <strong>Kāpēc svarīgs</strong>: tas nofiksē pamata uzvedību (bāzes plūsmu), uz kuras
          pēc tam būvē izņēmumu un ierobežojumu scenārijus.
        </li>
        <li>
          <strong>Ko tas atsedz</strong>: bieži tajā ir “klusie pieņēmumi” (piem., atļautie failu tipi,
          izmērs, minimālā izšķirtspēja), kurus vēlāk pārvērš atsevišķos scenārijos vai nosacījumos.
        </li>
      </ul>
    </QAItem>
  )
}

