import React from "react";
import Aside from "./ASide";
import Header from "./Header";

export default function ZenaLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <>
      <Aside />

      <main className="pl-[--sidebar-width] h-screen">
        <Header />

        {children}
      </main>
      </>
  )
}
