import React from "react"

interface IProps {
  onClick: () => void
  children: React.ReactNode
}

const Button = ({ onClick, children }: IProps) => {
  return (
    <button onClick={onClick} className="border px-3 py-2 hover:text-sky-300">
      {children}
    </button>
  )
}

export default Button
