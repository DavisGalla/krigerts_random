import { Table } from '../common/Table/Table.jsx'

const GHERKIN_TERMS = [
  { en: 'Feature', lv: 'Funkcionalitāte' },
  { en: 'Rule', lv: 'Noteikums' },
  { en: 'Background', lv: 'Fons' },
  { en: 'Scenario', lv: 'Scenārijs' },
  { en: 'Scenario Outline', lv: 'Scenārija apraksts' },
  { en: 'Examples', lv: 'Piemēri' },
  { en: 'Given', lv: 'Ņemot vērā' },
  { en: 'When', lv: 'Kad' },
  { en: 'Then', lv: 'Tad' },
  { en: 'And', lv: 'Un' },
  { en: 'But', lv: 'Bet' },
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

