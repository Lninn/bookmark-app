"use client"

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

  const wrapDom = (
    <div>
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-500 opacity-50"></div>
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
        <div className="bg-slate-400 p-3 w-96 rounded-lg">
        <div className="flex justify-between border-b-2">
          <div >全局搜索</div>
          <div
            className="cursor-pointer hover:text-gray-700 hover:opacity-20 w-6 h-6 flex items-center justify-center"
            onClick={onClose}
          >
              X
            </div>
        </div>
        <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  )

  return ReactDOM.createPortal(
    open ? <div>{wrapDom}</div> : null,
    document.body
  )
}

export default Dialog
