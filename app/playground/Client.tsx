"use client"

import { Dialog } from "@/components";
import React from "react";
import File from "./File"
import UrlsParse from "./UrlsParse";

const Client = () => {
  const [open, setOpen] = React.useState(true)

  return (
    <div>
      <div>
        <button onClick={() => setOpen(true)}>Open Dialog</button>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-3">
          <div>选择一个文件</div>
          <File />
          <UrlsParse />
        </div>
      </Dialog>
    </div>
  )
}

export default Client
