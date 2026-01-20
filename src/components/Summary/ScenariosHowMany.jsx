import { QAItem } from './QAItem.jsx'

export function ScenariosHowMany() {
  return (
    <QAItem title="Kā veidot scenārijus? Cik daudz scenāriju ir vienai iezīmei?">
      <p>
        Scenāriji apraksta vienas un tās pašas iezīmes uzvedību <strong>dažādos apstākļos</strong>.
        Tie tiek rakstīti strukturēti, lai būtu skaidri un pārbaudāmi.
      </p>
      <ul>
        <li>
          <strong>Struktūra</strong>: <em>Given</em> (nosacījumi) → <em>When</em> (darbība/notikums)
          → <em>Then</em> (sagaidāmais iznākums).
        </li>
        <li>
          <strong>Soļi ir atomiski</strong>: katrā rindā viena doma (viens nosacījums / viena darbība /
          viens iznākums). Papildus soļiem lieto <em>And/But/Or</em>.
        </li>
        <li>
          <strong>Cik daudz?</strong> Parasti <strong>vairāki</strong>: vismaz “Happy Path” un vēl
          scenāriji variācijām/ierobežojumiem (piem., neatbalstīts faila tips, par liels izmērs).
        </li>
      </ul>
    </QAItem>
  )
}

