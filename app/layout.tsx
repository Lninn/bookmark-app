import "./globals.css"

import type { Metadata } from "next"
import AppProvider from "./app-provider"
import Header from "./Header"
import MobileMenu from "./MobileMenu"


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
      <body className="bg-white text-slate-500 dark:text-slate-400">
        <AppProvider>
          <Header />
          <MobileMenu />
          <main>
            <div className="max-w-screen-xl px-4 py-10 ml-auto mr-auto">
              {children}
            </div>
          </main>
        </AppProvider>
      </body>
    </html>
  )
}
