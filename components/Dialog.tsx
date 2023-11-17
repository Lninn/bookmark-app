"use client"

interface IProps {
  children: React.ReactNode
}

const Dialog = (props: IProps) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

export default Dialog
