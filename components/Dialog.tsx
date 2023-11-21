"use client"

import React from "react"
import ReactDOM from "react-dom"

interface IProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

const Dialog = (props: IProps) => {
  const {
    open,
    onClose,
    children
  } = props

  const [isClient, setIsClient] = React.useState(false)
 
  React.useEffect(() => {
    setIsClient(true)
  }, [])

  React.useEffect(() => {
    function addBody() {
      document.body.style.overflow = "hidden"
      document.body.style.position = "relative"
      document.body.style.overscrollBehavior = "contain"
    }

    function removeBody() {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.overscrollBehavior = ""
    }
    
    if (open) {
      addBody()
    } else {
      removeBody()
    }
  }, [open])
 
  const wrapDom = (
    <div className="fixed inset-0">
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-500 opacity-50"></div>
      <div
        style={{
          position: "fixed",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        className="w-96 lg:w-2/4 rounded-lg bg-white transition-transform"
      >
        <div className="flex justify-between p-3 border-b">
          <div >Search</div>
          <div
            className="cursor-pointer hover:text-gray-700 hover:opacity-20 w-6 h-6 flex items-center justify-center"
            onClick={onClose}
          >
            X
          </div>
        </div>
        <div className="p-3">
          {children}
        </div>
      </div>
    </div>
  )

  if (!isClient) {
    return null
  }

  return ReactDOM.createPortal(
    open ? <div>{wrapDom}</div> : null,
    window.document.body
  )
}

export default Dialog
