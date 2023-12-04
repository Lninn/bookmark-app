import { SVGProps } from "react"
import Tabs from "./Tabs"

const list = Array.from({ length: 20 })

export default function Recruiting() {
  return (
    <div className="p-6">
      <div className="flex">
        <Tabs />
        <div className="flex-grow"></div>
        <div className="text-[#170d23] flex items-center gap-1 text-base">
          <div>Newest first</div>
          <TypcnArrowSortedDown />
        </div>
      </div>
      <div className="h-6"></div>
      <div className="flex flex-col gap-1">
        {list.map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  )
}

function Card() {
  return (
    <div className="bg-white py-6 px-7">
      <div className="flex">
        <div className="flex items-center gap-2">
          <div className="bg-[#ffd62c] grid items-center justify-center rounded-full p-1">
            <GgShapeHalfCircle className="-rotate-90 text-[28px] text-[#170d23]" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-[#] text-base leading-[1]">
              Product Owner
            </div>
            <div className="text-gray-400 text-sm leading-[1]">
              Heywork
            </div>
          </div>
        </div>

        <div className="ml-auto flex items-center">
          <div className="border border-dashed rounded-full w-8 h-8 grid items-center justify-center">
            <IcRoundPlus className="text-[24px] text-[#6a44d9]" />
          </div>
          <div className="w-12"></div>
          <div className="bg-[#6a44d9] border rounded-full w-8 h-8 grid items-center justify-center">
            <PhArrowArcRightBold className="text-[18px] text-white" />
          </div>
          <div className="w-2"></div>
          <div className="border rounded-full w-8 h-8 grid items-center justify-center">
            <PhDotsThreeOutlineFill className="text-[22px] text-[#6a44d9]" />
          </div>
        </div>
      </div>

      <div className="flex mt-6">
        <div className="flex gap-6">
          <div className="flex items-center gap-[2px]">
            <PhBagSimpleBold className="text-[#170d23]" />
            <span className="text-[#6a44d9]">120</span>
            <span className="text-[#170d23]">applications</span>
          </div>

          <div className="flex items-center gap-[2px]">
            <PhBagSimpleBold className="text-[#170d23]" />
            <span className="text-[#6a44d9]">120</span>
            <span className="text-[#170d23]">applications</span>
          </div>
        </div>
        <div className="flex-grow"></div>
        <div className="inline-flex gap-2">
          <button className="text-[#170d23] bg-[#f1f1f1] text-[12px] px-[6px] py-[3px] rounded-[5px]">
            High english
          </button>
          <button className="text-[#170d23] bg-[#f1f1f1] text-[12px] px-[6px] py-[3px] rounded-[5px]">
            High english
          </button>
          <button className="text-[#170d23] bg-[#f1f1f1] text-[12px] px-[6px] py-[3px] rounded-[5px]">
            High english
          </button>
        </div>
        <div className="w-2"></div>
        <button className="bg-[#ffd62c] rounded-full w-6 h-6 text-[12px] text-[#170d23]">+2</button>
      </div>
    </div>
  )
}

function PhBagSimpleBold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M216 60h-36.17a52 52 0 0 0-103.66 0H40a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V80a20 20 0 0 0-20-20Zm-88-24a28 28 0 0 1 27.71 24h-55.42A28 28 0 0 1 128 36Zm84 160H44V84h168Z"></path></svg>
  )
}

function GgShapeHalfCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M16 4a8 8 0 1 0 0 16v-3a5 5 0 0 1 0-10V4Z"></path></svg>
  )
}

function IcRoundPlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"></path></svg>
  )
}

function PhDotsThreeOutlineFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M156 128a28 28 0 1 1-28-28a28 28 0 0 1 28 28ZM48 100a28 28 0 1 0 28 28a28 28 0 0 0-28-28Zm160 0a28 28 0 1 0 28 28a28 28 0 0 0-28-28Z"></path></svg>
  )
}

function PhArrowArcRightBold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M244 88v64a12 12 0 0 1-12 12h-64a12 12 0 0 1 0-24h34.9l-15.48-15.37A84 84 0 0 0 44 184a12 12 0 0 1-24 0a108 108 0 0 1 184.37-76.37L220 123.16V88a12 12 0 0 1 24 0Z"></path></svg>
  )
}

function TypcnArrowSortedDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5.8 9.7L12 16l6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3c-.2.2-.3.4-.3.7s.1.5.3.7z"></path></svg>
  )
}
