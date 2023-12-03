import clsx from "clsx"
import { SVGProps } from "react"


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

export default function Settings() {
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
