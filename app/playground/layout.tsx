import type { Metadata } from "next"
import Nav from "../Nav"

export const metadata: Metadata = {
  title: "Playground",
}

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Nav />

      {children}
    </div>
  )
}
