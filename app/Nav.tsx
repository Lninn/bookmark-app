import React, { SVGProps } from "react"

const menus = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Playground",
    path: "/playground"
  },
  {
    title: "Dashboard",
    path: "/dashboard"
  }
]

const Nav = () => {
  return (
    <div className="py-4 px-8 border-b border-slate-900/10 flex">
      <div>
        <div>Bookmarks App</div>
      </div>

      <div className="flex items-center ml-auto">
        <nav className="text-sm leading-6 text-slate-700">
          <ul className="flex gap-8">
            {menus.map(menuItem => {
              return (
                <li key={menuItem.title} className="hover:text-sky-500 text-slate-700 font-medium">
                  <a href={menuItem.path}>{menuItem.title}</a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center pl-6 ml-6 border-l border-slate-200">
          <button>
            <MaterialSymbolsSunnyOutlineRounded />
          </button>
        </div>
      </div>
    </div>
  )
}

function MaterialSymbolsSunnyOutlineRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="w-6 h-6" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 5q-.425 0-.713-.288T11 4V2q0-.425.288-.713T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5Zm4.95 2.05q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275ZM20 13q-.425 0-.713-.288T19 12q0-.425.288-.713T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13h-2Zm-8 10q-.425 0-.713-.288T11 22v-2q0-.425.288-.713T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23ZM5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275t.7.275L7.05 5.65q.275.275.275.7t-.275.7q-.3.275-.7.275t-.7-.275Zm12.7 12.725l-1.4-1.425q-.275-.3-.275-.713t.275-.687q.275-.275.688-.275t.712.275l1.425 1.4q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3ZM2 13q-.425 0-.713-.288T1 12q0-.425.288-.713T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13H2Zm2.225 6.775q-.275-.275-.275-.7t.275-.7L5.65 16.95q.275-.275.687-.275t.713.275q.3.3.3.713t-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm0-2q1.65 0 2.825-1.175T16 12q0-1.65-1.175-2.825T12 8q-1.65 0-2.825 1.175T8 12q0 1.65 1.175 2.825T12 16Zm0-4Z"></path></svg>
  )
}

export default Nav
