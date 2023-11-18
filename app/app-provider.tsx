"use client"
 
import React, { createContext } from "react"

interface AppState {
  side: {
    open: boolean
  },

  openSide: () => void
}

const defualtAppValue: AppState = {
  side: {
    open: true
  },

  openSide: () => {
    //
  },
}

export const AppContext = createContext(defualtAppValue)

export function useSide() {
  const { side, openSide } = React.useContext(AppContext)

  return {
    open: side.open,
    openSide,
  }
}

const r = (p: AppState, n: Partial<AppState>) => ({ ...p, ...n })
 
export default function AppProvider({ children }: {
  children: React.ReactNode
}) {

  const [state, dispatch] = React.useReducer(r, defualtAppValue)

  const value: AppState = {
    side: {
      open: state.side.open,
    },
    openSide() {
      if (!state.side.open) return

      dispatch({ side: { open: false } })
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
