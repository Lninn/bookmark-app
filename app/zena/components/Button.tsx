import clsx from "clsx"
import { ButtonHTMLAttributes } from "react"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
}

export default function Button(props: IButtonProps) {
  const {
    icon,
    className,
    children,
    ...restButtonProps
  } = props

  const fc = clsx(
    "flex items-center justify-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-300/50",
    className
  )

  return (
    <button className={fc} {...restButtonProps}>
      {icon}
      <span className="text-xl">{children}</span>
    </button>
  )
}

