"use client"

import React from "react"

const List = ({ num }: { num: string }) => {
  const [name, setName] = React.useState("")

  React.useEffect(() => {
    console.log(name, num)
  }, [])

  return (
    <div>
      List
      <button onClick={() => setName("hello")}>Btn</button>
      <div>{name}</div>
    </div>
  )
}

export default List
