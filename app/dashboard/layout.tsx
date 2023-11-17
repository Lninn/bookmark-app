import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default function DashboardLayout({
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
