'use client'

import { useState } from "react";
import App from "./App";
import ASide from "./ASide";

export default function ClientApp() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ASide onClose={() => setOpen(false)} />
      <App open={open} onOpen={() => setOpen(true)} />
    </>
  )
}
