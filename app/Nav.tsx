"use client"

import React, { SVGProps } from "react"
import MaterialSymbolsSunnyOutlineRounded from "./MaterialSymbolsSunnyOutlineRounded"
import Side from "./Side"
import { useSide } from "./app-provider"

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
  const { toggleSide } = useSide()
  return (
    <div className="py-4 px-8 border-b border-slate-900/10 flex">
      <div>
        <div>Bookmarks App</div>
      </div>

      <div className="hidden lg:flex items-center ml-auto">
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

      <div className="ml-auto flex items-center">
        <button onClick={() => toggleSide(true)}>
          <MaterialSymbolsMenu className="w-6 h-6" />
        </button>
      </div>

      <Side />
    </div>
  )
}

function MaterialSymbolsMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"></path></svg>
  )
}

export default Nav
