"use client"

import React from "react"
import { Dialog } from "@/components";
import TagView from "./TagView";

// ref https://dribbble.com/shots/18745656-Document-Side-Panel-Tag-Picker

// ref https://dribbble.com/shots/2883525-Web-proposal-for-a-form-creator-Unused-element-part-7

// ref https://dribbble.com/shots/15777093-Form-Dropdowns

// ref https://dribbble.com/shots/22593307-Search-Results-Modal-Interaction

const CardDialog = () => {
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
    <div>
      <div>
        <button onClick={() => setOpen(true)}>Open Dialog</button>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <form onSubmit={onSubmit}>
          <div className="flex mb-6">
            <input
              autoFocus
              type="text"
              id='name'
              className="text-neutral-900 w-full leading-7 px-2 py-1 outline-none"
              placeholder="Please Input a Url"
            />

            <button
              className="border border-gray-200/30 hover:border-gray-200/100 rounded p-1"
              style={{ padding: "2px 4px", fontSize: 12, alignSelf: "center" }}
            >
              Esc
            </button>
          </div>
        </form>

        <TagView />

        <div className="mt-2 px-2 text-right">
          <button
            onClick={handleAdd}
            className="bg-gray-50 rounded hover:bg-gray-100 px-2 py-1"
          >
            添加
          </button>
        </div>
      </Dialog>
    </div>
  )
}

export default CardDialog
