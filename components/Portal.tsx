import React from "react"
import ReactDOM from "react-dom"

interface PortalProps {
  children: React.ReactNode
}

export default function Portal({ children }: PortalProps) {
  if (React.isValidElement(children)) {
    return ReactDOM.createPortal(
      children,
      document.body,
    )
  } else {
    return null
  }
}
