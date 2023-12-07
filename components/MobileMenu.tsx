"use client"

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
  },
  {
    title: "Github",
    path: "https://github.com/Lninn/bookmark-app"
  }
]

const MobileMenu = () => {
  const { pathname, open } = useSide()

  if (!open) return null

  return (
    <div className="sticky top-16 z-50">
      <div className="wrapper">
        <div className="absolute inset-0 h-screen w-full overflow-scroll bg-white flex">
          <nav className="px-4 w-full ml-auto mr-auto">
            <ul>
              {menus.map(menuItem => {
                const isActive= menuItem.path === pathname

                return (
                  <li
                    key={menuItem.title}
                    className="py-3 px-2"
                  >
                    <a
                      href={menuItem.path}
                      className="text-base text-slate-700 dark:text-slate-600"
                      style={{ color: isActive ? "rgb(14 165 233)" : "" }}
                    >
                      {menuItem.title}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
