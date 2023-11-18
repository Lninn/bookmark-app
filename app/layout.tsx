import "./globals.css"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import AppProvider from "./app-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bookmarks app",
  description: "a app for bookmark data",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-500 dark:text-slate-400`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
