"use client"

import React, { SVGProps } from "react"
import ReactDOM from "react-dom"

interface IProps {
  onClose: () => void
}

function SideMenu({
  onClose
}: IProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto lg:hidden">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>
      <div className="bg-white border h-full w-80 max-w-[calc(100%-3rem)] p-6 relative ml-auto">
        <button onClick={onClose} className="absolute top-5 right-5 flex items-center justify-center text-slate-500 hover:text-slate-600">
          <MaterialSymbolsClose className="w-6 h-6" />
        </button>
        <div>
          Side Content
        </div>
      </div>
    </div>
  )
}

export default function Side() {
  const [open, setOpen] = React.useState(true)

  const dom = open ? (
    <div>
      <SideMenu onClose={() => setOpen(false)} />
    </div>
  ) : null

  return ReactDOM.createPortal(
    dom,
    document.body,
  )
}


function MaterialSymbolsClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"></path></svg>
  )
}
