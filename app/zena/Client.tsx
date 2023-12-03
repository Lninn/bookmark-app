"use client"

import { useEffect, useState } from "react"

export default function Client() {
  useState("client")

  useEffect(() => {
    q()
  }, [])
  
  return null
}

async function q() {
  const res = await fetch("/zena")
  const data = await res.json()
  
  console.log("debug ", {  data })
}
