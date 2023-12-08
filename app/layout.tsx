import "./globals.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bookmarks app",
  description: "a app for bookmark data",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props
  return (
    <html lang="en">
      <body className="w-screen h-screen">
        {children}
      </body>
    </html>
  )
}
