import { TableCell } from './TableCell.jsx'

export function TableRow({ columns, row }) {
  return (
    <tr>
      {columns.map((col) => (
        <TableCell key={col.key}>{row[col.key]}</TableCell>
      ))}
    </tr>
  )
}

