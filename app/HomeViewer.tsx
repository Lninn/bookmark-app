import React from "react"
import dynamic from "next/dynamic"

const ClientSelect = dynamic(() => import("./Select"), { ssr: false })

export default function HomeViewer () {
  return (
    <div className="flex gap-3">
      <h2>Hello world</h2>
      <ClientSelect>
        <button className="bg-sky-300">选一个 item</button>
      </ClientSelect>
    </div>
  )
}
