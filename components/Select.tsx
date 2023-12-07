"use client"

import React from "react"
import Portal from "./Portal";

interface IProps {
  children: React.ReactNode
  options: {
    key: string
    label: React.ReactNode
  }[]
  value?: string
  onChange?: (key: string) => void
}

export default function Select({
  value,
  options,
  onChange,
  children
}: IProps) {
  const child = React.Children.only(children) as React.ReactElement;

  const triggerRef = React.useRef<HTMLDivElement | null>(null)
  const offsetContainerRef = React.useRef<HTMLDivElement | null>(null)

  const [state, setState] = React.useState({
    left: "0",
    top: "0",
  })

  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {

    const targetElement = triggerRef.current
    const offsetContainer = offsetContainerRef.current

    const targetRect = targetElement?.getBoundingClientRect()
    const offsetContainerRect = offsetContainer?.getBoundingClientRect()

    function handleClick() {
      setOpen(prev => !prev)
    }
    targetElement?.addEventListener("click", handleClick)

    function windowClick(e: MouseEvent) {
      const target = e.target

      if (!target) return null

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const _target = target as any

      if (_target === targetElement || _target.closest(".trigger")) {
        return
      }

      if (_target.closest(".offsetContainer")) return
 
      setOpen(false)
    }
    window.addEventListener("click", windowClick)

    const newState = getOffset(
      offsetContainerRect,
      targetRect,
    )

    setState(newState)

    return () => {
      if (targetElement) {
        targetElement.removeEventListener("click", handleClick)
      }

      window.removeEventListener("click", windowClick)
    }
  }, [])

  function handleItemClick(key: string) {
    setOpen(false)

    if (onChange) {
      onChange(key)
    }
  }

  const { left, top } = state

  return (
    <>
      <TriggerWrapper ref={triggerRef} >
        {child}
      </TriggerWrapper>
      <Portal>
        <div
          ref={offsetContainerRef}
          className="offsetContainer fixed inset-0 pointer-events-none"
        >
          <div
            className="absolute w-36"
            style={{
              transform: `translateX(${left}) translateY(${top})`,
              transformOrigin: "left top"
            }}
          >
            <ul
              className="pointer-events-auto shadow-lg ring-1 ring-slate-900/10 font-semibold rounded py-1 bg-white dark:bg-slate-800"
              style={{ display: open ? "block": "none" }}
            >
              {options.map((item, idx) => {
                const isActive = item.key === value

                return (
                  <li
                    key={idx}
                    style={isActive ? { color: "rgb(14 165 233)" } : {}}
                    className="py-1 px-2 hover:bg-slate-50 text-sm cursor-pointer dark:hover:bg-slate-600/30"
                    onClick={() => handleItemClick(item.key)}
                  >
                    {item.label}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Portal>
    </>
  )
}

export interface TriggerWrapperProps {
  children: React.ReactElement;
}

const TriggerWrapper = React.forwardRef<HTMLElement, TriggerWrapperProps>(
  (props, ref) => {
    const { children } = props;

    const mergedRef = (node: unknown) => {
      if (ref) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (ref as any).current = node
      }
    }

    return React.cloneElement(children, {
      ref: mergedRef,
      className: "trigger"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any)
  },
);

TriggerWrapper.displayName = "TriggerWrapper"

interface Rect {
  left: number
  right: number
  top: number
  bottom: number
  width: number
  height: number
}

export function getOffset (
  offsetRect?: Rect,
  targetRect?: Rect,
) {
  if (!offsetRect || !targetRect) {
    return {
      left: "0px",
      top: "0px",
    }
  }

  const left = targetRect.left - offsetRect.left

  const cw = document.documentElement.clientWidth
  const outLeft = left + 144 > cw ? left - 144 / 2 : left

  return {
    left: `${Math.round(outLeft)}px`,
    top: `${Math.round(
      targetRect.top - offsetRect.top + targetRect.height + 24
    )}px`,
  }
}
