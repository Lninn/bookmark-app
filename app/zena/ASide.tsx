"use client"

import React, { SVGProps, useState } from "react"
import clsx from "clsx"
import { useRouter } from "next/navigation"

interface IMenuConfig {
  label: string
  path?: string
  icon: React.ReactNode
}

const mainMenus: IMenuConfig[] = [
  {
    label: "Home",
    icon: <MaterialSymbolsLightHomeOutline />,
  },
  {
    label: "New purchase on your card",
    icon: <PhDotsNine />,
    path: "/zena/new-purchase",
  },
  {
    label: "Business spend",
    icon: <LucideCreditCard />,
    path: "/zena/recruiting"
  },
  {
    label: "Transactions",
    icon: <IcRoundCompareArrows />,
  },
  {
    label: "Payments",
    icon: <MdiFileDocumentOutline />,
  },
  {
    label: "Statements",
    icon: <CarbonCurrencyDollar />,
  },
]

const secondMenus: IMenuConfig[] = [
  {
    label: "Settings",
    icon: <MdiFileDocumentOutline />,
    path: "/zena/settings"
  },
  {
    label: "Need help?",
    icon: <CarbonCurrencyDollar />,
  },
]

export default function Aside() {
  const [activeKey, setActiveKey] = useState("Transactions")

  return (
    <aside className="flex flex-col fixed top-0 left-0 bottom-0 overflow-y-auto px-6 w-[--sidebar-width]">
      <div className="sticky top-0 pt-6 pb-2 z-bg">
        <div className="uppercase text-[28px] text-black font-serif">
          bookmark
        </div>
      </div>
      <div className="h-12 flex-shrink-0"></div>
      <MenuList activeKey={activeKey} onChange={setActiveKey} menus={mainMenus} />
      <div className="flex-grow min-h-[60px]"></div>
      <MenuList menus={secondMenus} />
      <div className="h-6 flex-shrink-0"></div>
    </aside>
  )
}

interface MenuListProps {
  menus: IMenuConfig[]
  activeKey?: string
  onChange?: (k: string) => void
}

function MenuList({ menus, activeKey, onChange, }: MenuListProps) {
  const router = useRouter()

  function handleClick(m: IMenuConfig) {
    onChange && onChange(m.label)

    if (m.path) {
      router.push(m.path)
    } else {
      router.push("/zena")
    }
  }

  return (
    <div className="flex flex-col">
      {menus.map((m, i) => {
        const active = m.label === activeKey
        const fc = clsx(
          "flex gap-4 hover:z-bg-ac hover:cursor-pointer text-[--personal-t-color] px-[10px] py-3 rounded-xl",
          { "z-bg-ac": active },
          [active ? "font-bold" : "font-nomal"]
        )

        return (
          <div
            key={i}
            className={fc}
            onClick={() => handleClick(m)}
          >
            <div className="flex items-center justify-center">
              {getIcon(m.icon)}
            </div>
            <span className="text-[16px] text-black/80 whitespace-nowrap overflow-x-hidden text-ellipsis">
              {m.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}

function getIcon(dom) {
  if (React.isValidElement(dom)) {
    return React.cloneElement(dom, { className: "w-6 h-6" } as any)
  } else {
    return dom
  }
}
function MaterialSymbolsLightHomeOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 19h3.692v-5.885h4.616V19H18v-9l-6-4.538L6 10v9Zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.885h-2.616V20H5Zm7-7.77Z"></path></svg>
  )
}

function PhDotsNine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M72 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm56-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 24a12 12 0 1 0-12-12a12 12 0 0 0 12 12ZM60 116a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12ZM60 184a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"></path></svg>
  )
}

function LucideCreditCard(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path></g></svg>
  )
}

function IcRoundCompareArrows(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9.01 14H3c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V14zm5.98-2.21V10H21c.55 0 1-.45 1-1s-.45-1-1-1h-6.01V6.21c0-.45-.54-.67-.85-.35l-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79a.5.5 0 0 0 .85-.36z"></path></svg>
  )
}

function MdiFileDocumentOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6m0 2h7v5h5v11H6V4m2 8v2h8v-2H8m0 4v2h5v-2H8Z"></path></svg>
  )
}

function CarbonCurrencyDollar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}><path fill="currentColor" d="M23 20.515c0-4.615-3.78-5.141-6.817-5.563c-3.31-.46-5.183-.86-5.183-3.71C11 8.85 13.507 8 15.654 8a6.754 6.754 0 0 1 5.568 2.628l1.556-1.256A8.65 8.65 0 0 0 17 6.096V3h-2v3.022c-3.615.22-6 2.26-6 5.22c0 4.73 3.83 5.263 6.908 5.69c3.252.453 5.092.842 5.092 3.583C21 23.547 17.867 24 16 24c-3.43 0-4.878-.964-6.222-2.628l-1.556 1.256A8.438 8.438 0 0 0 15 25.965V29h2v-3.045c3.726-.304 6-2.327 6-5.44Z"></path></svg>
  )
}
