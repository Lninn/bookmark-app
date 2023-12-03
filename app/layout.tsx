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
      <body className="text-slate-500 dark:text-slate-300 dark:bg-slate-900 bg-[--personal-s-color]">
        {children}
      </body>
    </html>
  )
}
