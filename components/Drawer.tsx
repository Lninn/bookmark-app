"use client"

import React from "react"
import ReactDOM from "react-dom"
import { useSide } from "@/app/app-provider"
import { MaterialSymbolsClose } from "@/icons"

interface IProps {
  children: React.ReactNode
}

const Drawer = ({
  children
}: IProps) => {
  const { open, toggleSide } =  useSide()
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  const dom = open ? (
    <div>
      <div className="fixed inset-0 z-50 overflow-y-auto lg:hidden">
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="bg-white border h-full w-80 max-w-[calc(100%-3rem)] p-6 relative ml-auto">
          <button onClick={() => toggleSide(false)} className="absolute top-5 right-5 flex items-center justify-center text-slate-500 hover:text-slate-600">
            <MaterialSymbolsClose className="w-6 h-6" />
          </button>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  ) : null

  if (!isClient) return null

  return ReactDOM.createPortal(
    dom,
    window.document.body,
  )
}

export default Drawer
