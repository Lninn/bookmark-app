import Link from "next/link"
import { SVGProps } from "react"

interface Item {
  label: string
}

const list: Item[] = [
  {
    label: "Create a new template"
  },
  {
    label: "Create a new template"
  },
  {
    label: "Create a new template"
  },
  {
    label: "Create a new template"
  },
  {
    label: "Create a new template"
  },
  {
    label: "Create a new template"
  },
  {
    label: "Create a new template"
  },
  {
    label: "Create a new template"
  },
  {
    label: "Create a new template"
  },
  {
    label: "Create a new template"
  },
]

const cateList = [
  {
    count: 40,
    title: "Business",
    fill: "#ff764d",
  },
  {
    count: 40,
    title: "Business",
    fill: "#ffb57c",
  },
  {
    count: 40,
    title: "Business",
    fill: "#ffb57c",
  },
  {
    count: 40,
    title: "Business",
    fill: "#ffb57c",
  },
  {
    count: 40,
    title: "Business",
    fill: "#7efd94",
  },
]

export default function Todo() {
  return (
    <div className="bg-[#f9fbfe] h-screen">
      <div className="flex sticky top-0 bg-[#f9fbfe] p-8 z-10">
        <MajesticonsMenuAltLine className="w-6 h-6" />
        <div className="flex-grow"></div>
        <div className="flex">
          <IconamoonSearchLight className="w-6 h-6" />
          <div className="w-6"></div>
          <MdiBellOutline className="w-6 h-6" />
        </div>
      </div>

      <div className="text-black px-8">
        <div className="text-3xl">Whats upm Joy!</div>
      </div>

      <div className="px-8 mt-8">
        <div className="text-gray-400 uppercase text-sm">categories</div>
        <div className="overflow-scroll w-full flex items-center gap-2 mt-4">
          {cateList.map((c, i) => (
            <div key={i} className="bg-white p-4 flex flex-col w-48 flex-shrink-0">
              <div>{c.count} tasks</div>
              <div className="h-1"></div>
              <div className="font-medium text-black text-lg">{c.title}</div>
              <div className="h-2"></div>

              <div className="relative h-1">
                <div className="w-full h-full bg-gray-400 absolute"></div>
                <div className="absolute w-2/3 h-full bg-red-300" style={{ background: c.fill }}></div>
              </div>

            </div>
          ))}
        </div>
      </div>
      <div className="h-4"></div>
      <div className="px-8">
        <div className="text-gray-400 uppercase text-sm">todays tasks</div>
        <div className="h-1"></div>
        <div className="w-full flex flex-col gap-1">
          {list.map((d, i) => (
            <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg" key={i}>
              <div className="border-2 border-[#ff764d] w-6 h-6 rounded-full"></div>
              <div className="text-lg text-[#1b274b]">{d.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#6b8cff] fixed right-12 bottom-12 rounded-full p-2">
        <Link href='/todo/create'><MaterialSymbolsAdd className="text-3xl text-white" /></Link>
      </div>
    </div>
  )
}

function MdiBellOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6l2 2m-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10v-7Z"></path></svg>
  )
}

function MaterialSymbolsAdd(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z"></path></svg>
  )
}

function MajesticonsMenuAltLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><g fill="currentColor"><path d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"></path></g></svg>
  )
}

function IconamoonSearchLight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314Z"></path></svg>
  )
}
