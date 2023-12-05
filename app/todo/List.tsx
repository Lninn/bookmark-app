"use client"

import clsx from "clsx"
import { SVGProps, useState } from "react"

interface Item {
  label: string
  fill: string
  checked: boolean
}

const _list: Item[] = [
  {
    label: "Create a new template",
    fill: "#444655",
    checked: false,
  },
  {
    label: "Check emails",
    fill: "#E31B4F",
     checked: false,
  },
  {
    label: "Create a new template",
    fill: "#444655",
     checked: false,
  },
  {
    label: "Check emails",
    fill: "#E31B4F",
     checked: false,
  },
  {
    label: "Create a new template",
    fill: "#444655",
     checked: false,
  },
  {
    label: "Check emails",
    fill: "#E31B4F",
     checked: false,
  },
  {
    label: "Create a new template",
    fill: "#444655",
     checked: false,
  },
  {
    label: "Check emails",
    fill: "#E31B4F",
     checked: false,
  },
  {
    label: "Create a new template",
    fill: "#444655",
     checked: false,
  },
  {
    label: "Check emails",
    fill: "#E31B4F",
     checked: false,
  },
]

export default function List() {
  const [list, setList] = useState(_list)


  function onClick(item: Item) {
    setList(p => p.map(d => ({
      ...d,
      checked: d.label === item.label ? !d.checked : d.checked
    })))
  }

  return (
    <div className="w-full flex flex-col gap-2">
      {list.map((d, i) => {
        const cls = clsx(
          "flex items-center gap-3 bg-[#061955] px-4 py-3 rounded-lg",
          {
            "line-through decoration-2 decoration-white": d.checked
          }
        )

        return (
          <div className={cls} key={i} onClick={() => onClick(d)}>
            {
              d.checked ? (
                <div className="border-2 rounded-full w-6 h-6 flex items-center justify-center">
                  <IcSharpCheck className="text-[14px] text-white" />
                </div>
              ): (
                <div className="border-2 border-[#ff764d] w-6 h-6 rounded-full" style={{ borderColor: d.fill }}></div>
              )
            }
            <div className="text-lg text-white">{d.label}</div>
          </div>
        )
      })}
    </div>
  )
}

function IcSharpCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"></path></svg>
  )
}
