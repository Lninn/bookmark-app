"use client"

import Select from "@/components/Select"

export default function HomeViewer () {
  return (
    <div className="flex gap-3">
      <h2>Hello world</h2>
      <Select>
        <button>选一个 item</button>
      </Select>
    </div>
  )
}
