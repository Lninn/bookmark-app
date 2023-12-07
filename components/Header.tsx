"use client"

import React, { SVGProps } from "react"
import { AppState, useSide } from "./app-provider"
import {
  MaterialSymbolsClose,
  MaterialSymbolsLightDarkModeOutlineRounded,
  MaterialSymbolsSunnyOutlineRounded,
  MaterialSymbolsDesktopMacOutlineRounded,
} from "@/icons"
import dynamic from "next/dynamic"


const options = [
  {
    key: "light",
    label: (
      <div className="flex gap-2 items-center">
        <MaterialSymbolsSunnyOutlineRounded className="w-6 h-6" />
        浅色
      </div>
    )
  },
  {
    key: "dark",
    label: (
      <div className="flex gap-2 items-center">
        <MaterialSymbolsLightDarkModeOutlineRounded className="w-6 h-6" />
        深色
      </div>
    )
  },
  {
    key: "system",
    label: (
      <div className="flex gap-2 items-center">
        <MaterialSymbolsDesktopMacOutlineRounded className="w-6 h-6" />
        系统
      </div>
    )
  },
] satisfies { label: React.ReactNode; key: AppState["mode"] }[]

const ClientSelect = dynamic(() => import("./Select"), { ssr: false })

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
    title: "PersonalDashboard",
    path: "/personalDashboard"
  },
  {
    title: "Playground",
    path: "/playground"
  },
  {
    title: "Dashboard",
    path: "/dashboard"
  },
]

const Nav = () => {
  const { mode, pathname, open, toggleSide, toggleMode } = useSide()

  function handleSideBtnClick() {
    document.body.style.overflow = open ? "unset" : "hidden"

    toggleSide(!open)
  }

  function getPreferenceDom() {
    if (mode === "dark") {
      return (
        <button style={{ color: "rgb(14 165 233)" }}>
          <MaterialSymbolsLightDarkModeOutlineRounded className="w-6 h-6" />
        </button>
      )
    } else if (mode === "light") {
      return (
        <button style={{ color: "rgb(14 165 233)" }}>
          <MaterialSymbolsSunnyOutlineRounded className="w-6 h-6" />
        </button>
      )
    } else {
      return (
        <button style={{ color: "rgb(14 165 233)" }}>
          <MaterialSymbolsDesktopMacOutlineRounded className="w-6 h-6" />
        </button>
      )
    }
  }

  function handleModeChange(key: string) {
    toggleMode(key as AppState["mode"])
  }

  const preferenceNode = getPreferenceDom()

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

        <div className="flex gap-6 items-center pl-6 ml-6 border-l border-slate-200">
          <ClientSelect value={mode} options={options} onChange={handleModeChange}>
            {preferenceNode}
          </ClientSelect>

          <button onClick={() => { window.open("https://github.com/Lninn/bookmark-app") }}>
            <MdiGithub className="w-6 h-6" />
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

function MdiGithub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"></path></svg>
  )
}
