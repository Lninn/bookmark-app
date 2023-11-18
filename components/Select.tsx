import React from "react"
import ReactDOM from "react-dom"

export default function Select({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Portal>
        <div>Select List</div>
      </Portal>
    </>
  )
}

interface PortalProps {
  children: React.ReactNode
}

const Portal = React.forwardRef<unknown, PortalProps>((props, ref) => {
  const { children } = props
  const [isClient, setIsClient] = React.useState(false)
 
  React.useEffect(() => {
    setIsClient(true)
  }, [])
  
  if (!isClient) return null
  
  if (React.isValidElement(children)) {
    const reChildren = React.cloneElement(
      children,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      { ref } as any
    )

    return ReactDOM.createPortal(
      reChildren,
      document.body,
    )
  } else {
    return null
  }
})

Portal.displayName = "Portal"
