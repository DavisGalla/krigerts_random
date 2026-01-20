import { Table } from '../common/Table/Table.jsx'

const GHERKIN_TERMS = [
  { en: 'Feature', lv: 'Funkcionālā iezīme' },
  { en: 'Rule', lv: 'Noteikums / Nosacījums' },
  { en: 'Background', lv: 'Konteksts' },
  { en: 'Scenario', lv: 'Scenārijs' },
  { en: 'Scenario Outline', lv: 'Scenārija pēc parauga' },
  { en: 'Examples', lv: 'Piemēri' },
  { en: 'Given', lv: 'Kad' },
  { en: 'When', lv: 'Ja' },
  { en: 'Then', lv: 'Tad' },
  { en: 'And', lv: 'Un' },
  { en: 'But, Or', lv: 'Bet / Vai' },
  { en: 'User story', lv: 'Lietotāja stāsts' },
]

export function Translations() {
  return (
    <section className="card">
      <h2 className="cardTitle">Gherkin termini</h2>

      <Table
        caption="Gherkin terminu tulkojumu tabula"
        columns={[
          { key: 'en', label: 'Angļu valodā' },
          { key: 'lv', label: 'Latviešu valodā' },
        ]}
        rows={GHERKIN_TERMS}
        getRowKey={(row) => row.en}
      />
    </section>
  )
}

