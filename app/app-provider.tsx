"use client"
 
import React, { createContext } from "react"

interface AppState {
  mode: "light" | "dark",
  pathname: string
  side: {
    open: boolean
  },

  toggleSide: (v: boolean) => void
  toggleMode: (mode: AppState["mode"]) => void
}

const defualtAppValue: AppState = {
  mode: "light",
  pathname: "/",
  side: {
    open: false
  },

  toggleSide: () => {
    //
  },
  toggleMode() {
    //
  },
}


export const AppContext = createContext(defualtAppValue)

export function useSide() {
  const { mode, pathname, side, toggleSide, toggleMode } = React.useContext(AppContext)

  return {
    mode,
    open: side.open,
    pathname,
    toggleSide,
    toggleMode,
  }
}

const r = (p: AppState, n: Partial<AppState>) => ({ ...p, ...n })

const APPEARANCE_KEY = "bookmarks-theme-appearance"
 
export default function AppProvider({ children }: {
  children: React.ReactNode
}) {

  const [state, dispatch] = React.useReducer(r, defualtAppValue)

  React.useEffect(() => {
    const { pathname } = location
    dispatch({ pathname })

    const fallbackPreference = "auto"

    const preference = localStorage.getItem(`${APPEARANCE_KEY}`) || `${fallbackPreference}`
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  
    const isDark = !preference || preference === "auto" ? prefersDark : preference === "dark"
  
    if (isDark) {
      document.documentElement.classList.add("dark")
    }

    dispatch({ mode: isDark ? "dark" : "light" })
  }, [])

  const value: AppState = {
    mode: state.mode,
    pathname: state.pathname,
    side: {
      open: state.side.open,
    },
    toggleSide(s) {
      dispatch({ side: { open: s } })
    },
    toggleMode(mode: AppState["mode"]) {

      if (mode === "dark") {
        document.documentElement.classList.add("dark")
      } else if (mode === "light") {
        document.documentElement.classList.remove("dark")
      }

      dispatch({ mode })
    }, 
  }

  return (
    <AppContext.Provider
      value={value}
    >
      {children}
    </AppContext.Provider>
  )
}
