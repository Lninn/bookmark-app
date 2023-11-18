"use client"
 
import React, { createContext } from "react"

interface AppState {
  pathname: string
  side: {
    open: boolean
  },

  toggleSide: (v: boolean) => void
}

const defualtAppValue: AppState = {
  pathname: "/",
  side: {
    open: false
  },

  toggleSide: () => {
    //
  },
}

export const AppContext = createContext(defualtAppValue)

export function useSide() {
  const { pathname, side, toggleSide } = React.useContext(AppContext)

  return {
    open: side.open,
    pathname,
    toggleSide,
  }
}

const r = (p: AppState, n: Partial<AppState>) => ({ ...p, ...n })
 
export default function AppProvider({ children }: {
  children: React.ReactNode
}) {

  const [state, dispatch] = React.useReducer(r, defualtAppValue)

  React.useEffect(() => {
    const { pathname } = location
    dispatch({ pathname })
  }, [])

  const value: AppState = {
    pathname: state.pathname,
    side: {
      open: state.side.open,
    },
    toggleSide(s) {
      dispatch({ side: { open: s } })
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
