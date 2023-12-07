import { SVGProps } from "react"

const menus = [
  { label: "Templates" },
  { label: "Categroies" },
  { label: "Analysis" },
]

interface IProps {
  onClose: () => void
}

export default function ASide({ onClose }: IProps) {
  return (
    <aside className="fixed inset-0 bg-[#041955] text-white w-screen h-screen">

      <div className="flex flex-col h-full mt-24 pl-12 pb-24">

        <div className="border rounded-full w-20 h-20 flex items-center justify-center text-[36px]">
          A
        </div>
        <div className="h-10"></div>
        <div className="capitalize text-4xl">
          <div>olivia</div>
          <div>mitchell</div>
        </div>

        <div className="h-10"></div>

        <div className="flex flex-col gap-4">
          {menus.map((m, i) => {
            return (
              <div
                key={i}
                className="flex items-center gap-3"
              >
                <MaterialSymbolsLightBookmarkOutlineSharp
                  className="text-[28px]"
                />
                <div className="tracking-wider text-[16px]">{m.label}</div>
              </div>
            )
          })}
        </div>

        <div className="flex-grow"></div>

        <div className="flex flex-col gap-2">
          <div className="text-gray-400 text-[14px]">Good</div>
          <div className="text-[24px]">Consistancy</div>
        </div>

      </div>

      <div
        className="absolute z-40 top-12 right-32 border flex items-center justify-center p-2 rounded-full"
        onClick={onClose}
      >
        <MaterialSymbolsLightArrowBackIosNew className="tex-[14px]" />
      </div>
    </aside>
  )
}

function MaterialSymbolsLightArrowBackIosNew(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M16 21.308L6.692 12L16 2.692l1.063 1.064L8.82 12l8.244 8.244L16 21.308Z"></path></svg>
  )
}

function MaterialSymbolsLightBookmarkOutlineSharp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 19.5V4h12v15.5l-6-2.583L6 19.5Zm1-1.55l5-2.15l5 2.15V5H7v12.95ZM7 5h10H7Z"></path></svg>
  )
}
