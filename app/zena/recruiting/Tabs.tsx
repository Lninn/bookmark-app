"use client"

import clsx from "clsx"
import { useEffect, useRef, useState } from "react"

const list: Config[] = [
  { label: "Active", },
  { label: "Archived", }
]

interface Config {
  label: string
}

const defaultLabel = "Active"

interface TabInfo { width: number, x: number }

export default function Tabs() {
  const [ac, setAc] = useState(defaultLabel)
  const refs = useRef<Record<string, HTMLDivElement>>({})
  const wMapRefs = useRef<Record<string, TabInfo>>()

  const cursorRef = useRef<HTMLDivElement | null>(null)

  function register(e, item: Config) {
    refs.current[item.label] = e
  }

  function onTabClick(item: Config) {
    setAc(item.label)
    interact(item.label)
  }

  useEffect(() => {
    const eMap = refs.current

    let _l: number | undefined = undefined
    const wmap = Object.keys(eMap).reduce(
      (accu, next) => {
        const t = eMap[next]
        const { width, left } = t.getBoundingClientRect()

        if (!_l) {
          _l = left
        }

        return { ...accu, [next]: { width, x: left - _l } }
      }, {}
    )

    wMapRefs.current = wmap

    interact(defaultLabel)
  }, [])

  function interact(label: string) {
    const wMap = wMapRefs.current
    if (!wMap) return

    const info = wMap[label]
    const cursor = cursorRef.current
    if (!info || !cursor) return

    cursor.style.width = info.width + "px"
    cursor.style.transform = `translateX(${info.x}px)`
  }

  return (
    <div className="flex gap-4 relative">
      {list.map((item, i) => {
        const acitve = ac === item.label
        const c = clsx({ "text-[#170d23]": acitve }, "mb-1 text-base cursor-pointer")

        return (
          <div key={i} ref={e => register(e, item)} className={c} onClick={() => onTabClick(item)}>
            {item.label}
          </div>
        )
      })}

      <div className="bg-[#6a44d9] h-[2px] absolute bottom-0 transition-transform duration-100" ref={cursorRef} />
    </div>
  )
}
