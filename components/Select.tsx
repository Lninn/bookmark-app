import React from "react"
import ReactDOM from "react-dom"

export default function Select({
  children
}: {
  children: React.ReactNode
}) {
  const child = React.Children.only(children) as React.ReactElement;

  const triggerRef = React.useRef<HTMLDivElement | null>(null)

  const offsetContainerRef = React.useRef<HTMLDivElement | null>(null)
  const followerRef = React.useRef<HTMLDivElement | null>(null)

  const targetElement = triggerRef.current
  const offsetContainer = offsetContainerRef.current

  const targetRect = targetElement?.getBoundingClientRect()
  const offsetContainerRect = offsetContainer?.getBoundingClientRect()

  const [isClient, setIsClient] = React.useState(false)
 
  React.useEffect(() => {
    setIsClient(true)
  }, [])

  console.log("rehder",{
    targetElement, offsetContainer
  });

  const { left, top } = getOffset(
    offsetContainerRect,
    targetRect,
  )

  if (!isClient) return null

  return (
    <>
      <TriggerWrapper ref={triggerRef} >
        {child}
      </TriggerWrapper>
      <Portal>
        <div className="fixed inset-0 pointer-events-none" ref={offsetContainerRef}>
          <div
            className="absolute"
            style={{
              width: "300px",
              transform: `translateX(${left}) translateY(${top})`,
              transformOrigin: "left top"
            }}
            ref={followerRef}
          >
            <div className="bg-white pointer-events-auto">
              <div>Select List</div>
              <div>Select List</div>
              <div>Select List</div>
              <div>Select List</div>
            </div>
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

interface PortalProps {
  children: React.ReactNode
}

const Portal = ({ children }: PortalProps) => {
  if (React.isValidElement(children)) {
    return ReactDOM.createPortal(
      children,
      document.body,
    )
  } else {
    return null
  }
}

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
      left: 0,
      top: 0,
    }
  }
  
  return {
    left: `${Math.round(targetRect.left - offsetRect.left)}px`,
    top: `${Math.round(
      targetRect.top - offsetRect.top + targetRect.height
    )}px`,
  }
}


Portal.displayName = "Portal"
