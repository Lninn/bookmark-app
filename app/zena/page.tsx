import React, { CSSProperties, SVGProps } from "react"
import clsx from "clsx"
import Client from "./Client"
import Aside from "./ASide"

function FormItem({
  label,
  defaultValue,
}: {
  label: string
  defaultValue: string
}) {
  return (
    <div className="border inline-flex flex-col gap-1 px-4 py-2 rounded-lg">
      <label>{label}</label>
      <input className="outline-none" type="text" defaultValue={defaultValue} />
    </div>
  )
}

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

const dataSource = Array.from({ length: 8 }).map(() => {
  return {
    transaction: "House Painting",
    amount: 23654,
    date: Date.now()
  }
})

export default function Zena() {
  return (
    <>
      <Client />
      
      <Aside />
      
      <main className="pl-[--sidebar-width]">
        <Header />

        <div className="p-10 rounded-2xl bg-white">
          <Settings />
          
          <div className="flex flex-col gap-6">
            <Spending />
            <Spending />
          </div>

          <div className="bg-white p-6 rounded-2xl flex-grow">
            <div className="text-black">Activity</div>

            <Table />
          </div>
        </div>
      </main>
    </>
  )
}

function Header() {
  return (
    <header className="pt-6 pb-4">
      <div className="flex items-center text-black">
        <div className="p-2 bg-slate-300 inline-flex rounded-full">
          <MaterialSymbolsArrowLeftAltRounded className="text-[32px]" />
        </div>

        <div className="flex-grow"></div>

        <div className="p-2 bg-slate-300 inline-flex rounded-full">
          <MaterialSymbolsNotificationsOutline className="text-[32px]" />
        </div>
        <div className="w-8"></div>
        <div className="w-12 h-12 bg-slate-300 rounded-full grid items-center justify-center text-[32px]">
          S
        </div>
        <div className="w-2"></div>
        <div className="flex items-center">
          <div>Sarah</div>
          <div><MaterialSymbolsKeyboardArrowDownRounded className="w-8 h-8"/></div>
          <div className="w-8 h-8 bg-black"></div>
        </div>

      </div>
    </header>
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
          <tr className="border-b">
            {columns.map((c, i) => {
              return (
                <th key={i} style={{ textAlign: c.align, width: c.width }}>{c.title}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {dataSource.map((d, i) => {
            return (
              <tr key={i}>
                {columns.map((c, j)=> {
                  const cellValue = d[c.dataIndex]
                  const dom = c.render ? c.render(cellValue) :  cellValue

                  return (
                    <td key={j}>{dom}</td>
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

const settingMenus: { label: string }[] = [
  {
    label: "My profile",
  },
  {
    label: "Team",
  },
  {
    label: "Bank",
  },
  {
    label: "Notifications",
  },
]

function Settings() {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="text-3xl text-black">Settings</div>

      <div className="flex gap-3">
        {settingMenus.map((c, i) => {
          return (
            <div
              key={i}
              className="text-xl"
            >
              {c.label}
            </div>
          )
        })}
      </div>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-3">
          <FormItem label='Frist name' defaultValue="Sarah" />
          <FormItem label='Last name' defaultValue="Connor" />
        </div>

        <FormItem label='Email' defaultValue="sarah@gmail.com" />
        <FormItem label='Phone number' defaultValue="(586)232-3009" />
      </div>

      <div className="bg-gray-100 p-8">
        <div className="flex">
          <div>
            <div className="text-2xl">Profile image</div>
            <div className="opacity-80">Let your team members see your beautiful face.</div>
          </div>

          <div className="flex-grow"></div>

          <div className="w-16 h-16 bg-white rounded-full grid items-center justify-center text-4xl">L</div>
        </div>

        <div className="h-6"></div>
        
        <div className="flex gap-4">
          <Button icon={<MaterialSymbolsLightAddAPhotoOutline className="w-8 h-8" />}>
            Add image
          </Button>

          <Button icon={<MaterialSymbolsLightDeleteOutlineSharp className="w-8 h-8" />}>
            Remove
          </Button>
        </div>
      </div>

      <Button className="bg-pink-400/40">
        Save information
      </Button>

    </div>
  )
}

function Button({
  icon,
  children,
  className,
}: {
  icon?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <button className={clsx(
      "flex items-center gap-2 bg-amber-300/30 px-4 py-2 rounded-xl hover:bg-gray-300/50",
      className
    )}>
      {icon}
      <span className="text-xl">{children}</span>
    </button>
  )
}

function MaterialSymbolsLightAddAPhotoOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11 13Zm-7.385 7q-.69 0-1.152-.462Q2 19.075 2 18.385V7.615q0-.69.463-1.152Q2.925 6 3.615 6h2.958l1.85-2h5.192v1h-4.76L7.013 7H3.615q-.269 0-.442.173T3 7.615v10.77q0 .269.173.442t.442.173h14.77q.269 0 .442-.173t.173-.442v-8h1v8q0 .69-.462 1.152q-.463.463-1.153.463H3.615ZM19 7V5h-2V4h2V2h1v2h2v1h-2v2h-1Zm-8 9.73q1.567 0 2.65-1.08q1.08-1.083 1.08-2.65t-1.08-2.65Q12.566 9.27 11 9.27t-2.65 1.08Q7.27 11.433 7.27 13t1.081 2.65Q9.433 16.73 11 16.73Zm0-1q-1.165 0-1.948-.782T8.269 13q0-1.165.783-1.948T11 10.269q1.165 0 1.948.783T13.731 13q0 1.165-.783 1.948T11 15.731Z"></path></svg>
  )
}

function MaterialSymbolsLightDeleteOutlineSharp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 20V6H5V5h4v-.77h6V5h4v1h-1v14H6Zm1-1h10V6H7v13Zm2.808-2h1V8h-1v9Zm3.384 0h1V8h-1v9ZM7 6v13V6Z"></path></svg>
  )
}

function MaterialSymbolsArrowLeftAltRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.85Z"></path></svg>
  )
}

function MaterialSymbolsNotificationsOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2H4Zm8-7.5ZM12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22Zm-4-5h8v-7q0-1.65-1.175-2.825T12 6q-1.65 0-2.825 1.175T8 10v7Z"></path></svg>
  )
}

function MaterialSymbolsKeyboardArrowDownRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"></path></svg>
  )
}
