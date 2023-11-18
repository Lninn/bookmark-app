"use client"

import React, { SVGProps } from "react"
import MaterialSymbolsSunnyOutlineRounded from "./MaterialSymbolsSunnyOutlineRounded"
import { useSide } from "./app-provider"
import { MaterialSymbolsClose } from "@/icons"


export default function Header() {
  return (
    <header
      className="sticky top-0 bg-slate-50 dark:bg-slate-900/80"
      style={{
        backdropFilter: "saturate(180%) blur(5px)",
        boxShadow: "inset 0 -1px 0 0 var(--accents-2)"
      }}
    >
      <Nav />
    </header>
  )
}

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
  const { pathname, open, toggleSide } = useSide()

  function handleSideBtnClick() {
    document.body.style.overflow = open ? "unset" : "hidden"

    toggleSide(!open)
  }

  return (
    <div className="py-4 px-8 border-b border-slate-900/10 flex">
      <div>
        <div>Bookmarks App</div>
      </div>

      <div className="hidden lg:flex items-center ml-auto">
        <nav className="text-sm leading-6">
          <ul className="flex gap-8">
            {menus.map(menuItem => {
               const isActive= menuItem.path === pathname

              return (
                <li
                  key={menuItem.title}
                  className="hover:text-sky-500 font-medium"
                  style={{ color: isActive ? "rgb(14 165 233)" : "" }}
                >
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

      <div className="ml-auto flex items-center lg:hidden">
        <button onClick={handleSideBtnClick}>
          {open ? <MaterialSymbolsClose className="w-6 h-6" /> : <MaterialSymbolsMenu className="w-6 h-6" />}
        </button>
      </div>
    </div>
  )
}

function MaterialSymbolsMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"></path></svg>
  )
}
