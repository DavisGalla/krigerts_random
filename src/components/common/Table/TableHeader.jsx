import { TableCell } from './TableCell.jsx'

export function TableHeader({ columns }) {
  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <TableCell key={col.key} as="th">
            {col.label}
          </TableCell>
        ))}
      </tr>
    </thead>
  )
}

