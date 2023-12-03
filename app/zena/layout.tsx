import React, { SVGProps } from "react";
import Aside from "./ASide";

export default function ZenaLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <>
      <Aside />

      <main className="pl-[--sidebar-width] h-screen">
        <Header />

        <div style={{ borderRadius: "32px 0 0 0", minHeight: "calc(100% - 96px)" }}  className=" p-8 bg-white">
          {children}
        </div>
      </main>
      </>
  )
}

function Header() {
  return (
    <header className="pt-6 pb-6 pr-6 sticky top-0 z-bg">
      <div className="flex items-center text-black">
        <div className="p-2 z-bg-ac inline-flex rounded-full">
          <MaterialSymbolsArrowLeftAltRounded className="text-[24px]" />
        </div>

        <div className="flex-grow"></div>

        <div className="p-2 z-bg-ac inline-flex rounded-full">
          <MaterialSymbolsNotificationsOutline className="text-[24px]" />
        </div>
        <div className="w-8"></div>
        <div className="w-10 h-10 z-bg-ac rounded-full grid items-center justify-center text-[24px]">
          S
        </div>
        <div className="w-2"></div>
        <div className="flex items-center">
          <div>Sarah</div>
          <div><MaterialSymbolsKeyboardArrowDownRounded className="w-6 h-6"/></div>
        </div>
      </div>
    </header>
  )
}

function MaterialSymbolsArrowLeftAltRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13H7.85Z"></path></svg>
  )
}

function MaterialSymbolsNotificationsOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h2v2H4Zm8-7.5ZM12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22Zm-4-5h8v-7q0-1.65-1.175-2.825T12 6q-1.65 0-2.825 1.175T8 10v7Z"></path></svg>
  )
}

function MaterialSymbolsKeyboardArrowDownRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"></path></svg>
  )
}
