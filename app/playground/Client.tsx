"use client"

import React from "react";
import { Dialog } from "@/components";

const Client = () => {
  const [open, setOpen] = React.useState(false)

  async function handleAdd() {
    const params = {
      name: "1",
    }

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: params }),
      })
      const data = await res.json()

      if (data.success) {
        console.log("Demo 请求成功")
        location.reload()
      } else {
        console.log("Demo 请求失败 ", data.msg)
      }
    } catch (error) {
      console.log("error")
    }
  }

  function onSubmit(e) {
    e.preventDefault()
  }

  return (
    <div style={{ height: 1000 }}>
      <div>
        <button onClick={() => setOpen(true)}>Open Dialog</button>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <form onSubmit={onSubmit}>
          <div className="flex">
            <input
              autoFocus
              type="text"
              id='name'
              className="text-neutral-900 w-full leading-7 px-2 py-1 outline-none"
              placeholder="Please Input a Url"
            />
            <button>esc</button>
          </div>
        </form>

        <div className="h-36 flex items-center justify-center">
          Content Loading
        </div>

        <div className="mt-2 px-2 text-center">
          <button onClick={handleAdd}>Submit</button>
        </div>
      </Dialog>
    </div>
  )
}

export default Client
