import { TableHeader } from './TableHeader.jsx'
import { TableRow } from './TableRow.jsx'

export function Table({ caption, columns, rows, getRowKey }) {
  return (
    <div className="tableWrap">
      <table className="table">
        {caption ? <caption className="tableCaption">{caption}</caption> : null}
        <TableHeader columns={columns} />
        <tbody>
          {rows.map((row) => (
            <TableRow
              key={getRowKey(row)}
              columns={columns}
              row={row}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

