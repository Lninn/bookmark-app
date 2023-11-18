"use client"

import React from "react"
import { MaterialSymbolsArrowBackRounded } from "@/icons"

export default function ReturnButton() {
  return (
    <a href="/" className="hover:text-sky-400" style={{ fontSize: 24, display: "inline-flex" }} title="回到主页">
      <MaterialSymbolsArrowBackRounded  />
    </a>
  )
}
