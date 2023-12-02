import { CSSProperties, SVGProps } from "react"
import clsx from "clsx"

interface Menu {
  label: string
  icon: React.ReactNode
}

const menus: Menu[] = [
  {
    label: "Home",
    icon: <MaterialSymbolsLightHomeOutline />,
  },
  {
    label: "Projects",
    icon: <PhDotsNine />,
  },
  {
    label: "Business spend",
    icon: <LucideCreditCard />,
  },
  {
    label: "Transactions",
    icon: <IcRoundCompareArrows />,
  },
  {
    label: "Payments",
    icon: <MdiFileDocumentOutline />,
  },
  {
    label: "Statements",
    icon: <CarbonCurrencyDollar />,
  },
]

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
    <div className="p-6 bg-gray-600 grid grid-cols-[max-content,1fr]">
      <Menu />

      <div className="flex gap-6 p-10 bg-gray-200 rounded-2xl">

        <div className="flex flex-col gap-6">
          <Spending />
          <Spending />
        </div>

        <div className="bg-white p-6 rounded-2xl flex-grow">
          <div className="text-black">Activity</div>

          <Table />
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
    <div className="text-black bg-white p-8 rounded-2xl">
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

function Menu() {
  return (
    <div className="flex flex-col gap-2">
      {menus.map((m, i) => {
        return (
          <div key={i} className="flex gap-[6px] hover:text-sky-500 hover:cursor-pointer">
            <div className="w-6 h-6 flex items-center justify-center">
              {m.icon}
            </div>
            <span className="font-extralight">{m.label}</span>
          </div>
        )
      })}
    </div>
  )
}

function MaterialSymbolsLightHomeOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 19h3.692v-5.885h4.616V19H18v-9l-6-4.538L6 10v9Zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.885h-2.616V20H5Zm7-7.77Z"></path></svg>
  )
}

function PhDotsNine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M72 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12ZM60 116a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12ZM60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"></path></svg>
  )
}

function LucideCreditCard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path></g></svg>
  )
}

function IcRoundCompareArrows(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.01 14H3c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V14zm5.98-2.21V10H21c.55 0 1-.45 1-1s-.45-1-1-1h-6.01V6.21c0-.45-.54-.67-.85-.35l-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79a.5.5 0 0 0 .85-.36z"></path></svg>
  )
}

function MdiFileDocumentOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6m0 2h7v5h5v11H6V4m2 8v2h8v-2H8m0 4v2h5v-2H8Z"></path></svg>
  )
}

function CarbonCurrencyDollar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}><path fill="currentColor" d="M23 20.515c0-4.615-3.78-5.141-6.817-5.563c-3.31-.46-5.183-.86-5.183-3.71C11 8.85 13.507 8 15.654 8a6.754 6.754 0 0 1 5.568 2.628l1.556-1.256A8.65 8.65 0 0 0 17 6.096V3h-2v3.022c-3.615.22-6 2.26-6 5.22c0 4.73 3.83 5.263 6.908 5.69c3.252.453 5.092.842 5.092 3.583C21 23.547 17.867 24 16 24c-3.43 0-4.878-.964-6.222-2.628l-1.556 1.256A8.438 8.438 0 0 0 15 25.965V29h2v-3.045c3.726-.304 6-2.327 6-5.44Z"></path></svg>
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
