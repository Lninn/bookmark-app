import type { Metadata } from "next"
import Nav from "../Nav"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default function DashboardLayout({
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
