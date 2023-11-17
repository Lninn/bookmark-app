import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Playground",
}

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="p-3">
      {children}
    </div>
  )
}
