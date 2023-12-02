"use client"

import React, { useState } from "react"
import { IcRoundClear } from "@/icons/IcRoundClear";
import clsx from "clsx"

export default function HomeViewer () {
  return (
    <div className="flex gap-3">
      <h2>Hello world</h2>

      <Input />

      <Select
        options={[
          { label: "Label 1", value: 1 },
          { label: "Label 2", value: 2 },
          { label: "Label 3", value: 3 },
        ]}
      />
    </div>
  )
}

function Input() {
  const [value, setValue] = useState<string>("")

  function handleValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  function onClear() {
    setValue("")
  }

  const showClearIcon = !!value

  return (
    <div className="py-1 px-2 border hover:outline outline-sky-400 inline-flex items-center">
      <input
        value={value}
        type="text"
        className="outline-none"
        onChange={handleValueChange}
      />
      <span
        className={clsx(
          "opacity-0 w-6 h-6 flex justify-center items-center cursor-pointer",
          { "opacity-100": showClearIcon
        })}
        onClick={onClear}
      >
        <IcRoundClear />
      </span>
    </div>
  )
}

interface Option {
  label: string
  value: string | number
}

function Select({
  options = [],
}: {
  options?: Option[]
}) {
  return (
    <select>
      {options.map(opt => {
        return (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        )
      })}
    </select>
  )
}
