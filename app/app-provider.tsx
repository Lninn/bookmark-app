"use client"
 
import React, { createContext } from "react"

interface AppState {
  side: {
    open: boolean
  },

  toggleSide: (v: boolean) => void
}

const defualtAppValue: AppState = {
  side: {
    open: false
  },

  toggleSide: () => {
    //
  },
}

export const AppContext = createContext(defualtAppValue)

export function useSide() {
  const { side, toggleSide } = React.useContext(AppContext)

  return {
    open: side.open,
    toggleSide,
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
