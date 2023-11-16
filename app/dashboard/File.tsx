"use client"

import React from "react"


const File = () => {
  const ref = React.useRef((text: string) => {
    console.log(text)
  })

  return (
    <div>
      <input type="file" onChange={e => {
        const files = e.target.files
        if (!files || files.length === 0) return

        const file = files[0]

        const reader = new window.FileReader();

        reader.addEventListener(
          "load",
          () => {
            const s = reader.result
            if (s) {
              ref.current(s as string)
            }
          },
          false,
        );

        if (file) {
          reader.readAsText(file);
        }
      }} />
    </div>
  )
}

export default File
