"use client"

import { Bookmarks } from "@/models/BookmarksModel"

export interface TableColumn<T> {
  title: string
  dataIndex: string
  width: number | string
  render?: (val: unknown, recprd: T) => React.ReactNode
}

interface IProps {
  columns: TableColumn<Bookmarks>[]
  data: Bookmarks[]
}

const Table = (props: IProps) => {
  const { columns, data } = props

  return (
    <div className="w-full">
      <table>
        <colgroup>
          {columns.map((col, i) => {
            const width = typeof col.width === "string" ? col.width : col.width + "px"
            return (
              <col key={i} style={{ width }} />
            )
          })}
        </colgroup>

        <TableHeader columns={columns} />

        <tbody>
          {data.map((datum, i) => {
            return (
              <tr key={i}>
                {columns.map((col, j) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const value = (datum as any)[col.dataIndex]
                  return (
                    <td key={j} className="whitespace-pre-wrap">
                      {col.render ? col.render(value, datum) : value}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const TableHeader = ({
  columns,
}: {
  columns: TableColumn<Bookmarks>[]
}) => {
  return (
    <thead>
      <tr>
        {columns.map((col, idx) => {
          return (
            <th key={idx}>{col.title}</th>
          )
        })}
      </tr>
    </thead>
  )
}

export default Table
