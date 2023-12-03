import React, { CSSProperties } from "react"
import Button from "./components/Button"

interface IColumn {
  title: string
  dataIndex: string
  align?: CSSProperties["textAlign"]
  width?: CSSProperties["width"]
  render?: (val: string) => React.ReactNode
}

const columns: IColumn[] = [
  {
    title: "Transaction",
    dataIndex: "transaction",
    align: "left",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    align: "left",
    width: 100,
    render(val) {
      return "$" + num(val)
    }
  },
  {
    title: "Date",
    dataIndex: "date",
    align: "left",
    width: 150,
    render(val) {
      const d = new Date(val)
      const text = d.getMonth() + "-" + d.getDate()

      return text + " " + d.toLocaleTimeString()
    },
  },
]

function num(n) {
  return new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    n,
  )
}

const dataSource = Array.from({ length: 10 }).map(() => {
  return {
    transaction: "House Painting",
    amount: 23654,
    date: Date.now()
  }
})

export default function Zena() {
  return (
    <div className="grid grid-cols-[max-content,1fr] gap-6 max-w-screen-lg">
      <div className="flex flex-col gap-6">
        <Spending />
        <Spending />
      </div>

      <div className="bg-white p-6 rounded-2xl flex-grow border">
        <div className="text-black">Activity</div>

        <Table />

        <div className="mt-6">
          <Button className="w-full z-bg-ac text-center">See all transaction</Button>
        </div>
      </div>
    </div>
  )
}

function DailyLimit() {
  return (
    <div className="flex flex-col gap-1">
      <div className="font-medium text-lg">Daily limit</div>
      <div className="h-2 bg-sky-600"></div>
      <div>$400 spent of $2000</div>
    </div>
  )
}

function Spending() {
  return (
    <div className="text-black bg-white p-8 rounded-2xl border">
      <div className="flex justify-between">
        <div>Spending</div>
        <div className="w-[100px]"></div>
        <div>Edit limits</div>
      </div>

      <DailyLimit />
      <div className="h-8"></div>
      <hr />
      <div className="h-8"></div>
      <DailyLimit />

    </div>
  )
}

function Table() {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-neutral-600">
            {columns.map((c, i) => {
              return (
                <th
                  key={i}
                  style={{ textAlign: c.align, width: c.width }}
                  className="z-cell"
                >
                  {c.title}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((d, i) => {
            return (
              <tr key={i} className="border-b border-neutral-200">
                {columns.map((c, j)=> {
                  const cellValue = d[c.dataIndex]
                  const dom = c.render ? c.render(cellValue) :  cellValue

                  return (
                    <td key={j} className="z-cell">{dom}</td>
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
