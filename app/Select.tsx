"use client"

import React from "react"
import Portal from "../components/Portal";

const list = [
  {
    label: "Light"
  },
  {
    label: "Dark"
  },
  {
    label: "System"
  },
]

export default function Select({
  children
}: {
  children: React.ReactNode
}) {
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
      console.log("handleClick");
      setOpen(prev => !prev)
    }
    targetElement?.addEventListener("click", handleClick)

    function windowClick(e: MouseEvent) {
      const target = e.target

      if (!target) return null

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const _target = target as any

      if (_target === targetElement) {
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

  function handleItemClick() {
    setOpen(false)
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
          style={{ display: open ? "block": "none" }}
        >
          <div
            className="absolute w-36"
            style={{
              transform: `translateX(${left}) translateY(${top})`,
              transformOrigin: "left top"
            }}
          >
            <ul className="pointer-events-auto shadow-lg ring-1 ring-slate-900/10 font-semibold rounded py-1">
              {list.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="py-1 px-2 hover:bg-slate-50 text-sm cursor-pointer"
                    onClick={handleItemClick}
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
  
  return {
    left: `${Math.round(targetRect.left - offsetRect.left)}px`,
    top: `${Math.round(
      targetRect.top - offsetRect.top + targetRect.height + 16
    )}px`,
  }
}
