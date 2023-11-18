"use client"

import { Bookmarks } from "@/models/BookmarksModel"
import React from "react"

export interface TableColumn<T> {
  title: string
  dataIndex: string
  width: number | string
  render?: (val: unknown, recprd: T) => React.ReactNode
}

interface IProps {
  loading: boolean
  columns: TableColumn<Bookmarks>[]
  data: Bookmarks[]
}

const Table = (props: IProps) => {
  const { loading, columns, data } = props

  if (loading) {
    return <Skeleton />
  }

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
                    <td key={j} className="whitespace-pre-wrap px-3 py-2">
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

function Skeleton() {
  const items = React.useMemo(() => {
    return Array.from({ length: 10 }).map(
      () => {
        const w = (Math.random() * 100).toFixed(0)
        return {
          style: { width: w + "%", color: "#fff" }
        }
      }
    )
  }, [])

  return (
    <div className="flex flex-col gap-4 p-4" style={{ backgroundColor: "#141414" }}>
      {items.map((datum, idx) => {
        
        return (
          <div
            key={idx}
            style={datum.style}
            className="bg-gray-500 h-8 rounded opacity-25 skeleton"
            suppressHydrationWarning={true}
          />
        )
      })}
    </div>
  )
}

export default Table
