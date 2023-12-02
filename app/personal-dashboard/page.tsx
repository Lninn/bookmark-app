import { SVGProps } from "react"
import clsx from "clsx"

export default function PersonalDashboard() {
  return (
    <div className="bg-gray-400 grid grid-rows-[1fr, 2fr] gap-3 h-screen">

      <div className="grid grid-cols-[1fr,1fr,2fr] gap-3">
        <div className="flex flex-col gap-3">
          <NumCard
            className="bg-[--personal-p-color] text-[--personal-s-color] flex-grow"
            title="TODAY'S"
            num="1.8"
            note="6H"
          />
          <NumCard
            className="bg-[--personal-t-color] text-[--personal-s-color] flex-grow"
            title="TODAY'S"
            num="2"
            note="5"
          />
        </div>

        <PaidInvices />
        <TotalBalance />
      </div>

      <div className="grid grid-cols-[1fr,1fr,2fr] gap-3">
        <Effect />
        <Effect />

        <div className="grid grid-rows-2">
          <div className="flex gap-3">
            <Useage />
            <Useage />
          </div>
        
          <Guide />
        </div>
      </div>

    </div>
  )
}

function Useage() {
  return (
    <div className="bg-[--personal-t-color] p-4 grid grid-rows-2">
      <div className="uppercase">chatgpt api usage</div>

      <div className="mt-auto">
        <div className="flex items-end">
          <div className="text-6xl">5.01</div>
          <div className="flex gap-1">
            <span>/</span>
            <span>$18.00</span>
          </div>
        </div>
        <div className="h-[5px] bg-red-300"></div>
      </div>
    </div>
  )
}

function Effect() {
  return (
    <div className="bg-[--personal-p-color] text-[--personal-s-color]">
      <div className="h-[300px]"></div>
      <div className="uppercase flex flex-col text-3xl">
        <span>aesthetic-</span>
        <span>usability</span>
        <span>effect</span>
      </div>
      <div>
        users often perecice aestheticly placesr design as desgin that&lsquo;s more usable
      </div>
      <div className="flex gap-1">
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    </div>
  )
}

function TotalBalance() {
  return (
    <div className="bg-[--personal-p-color] text-[--personal-s-color] p-4 flex flex-col">
      <div className="flex justify-between">
        <div className="uppercase">total balance (btc)</div>
        <div className="flex gap-1">
          <button>7D</button>
          <button>30D</button>
          <button>5M</button>
          <button>12M</button>
        </div>
      </div>

      <div className="flex items-end mt-auto">
        <div className="text-6xl">1.593</div>
        <div className="w-[100px]"></div>
        <div className="h-[160px] w-full bg-gray-400"></div>
      </div>
    </div>
  )
}

function PaidInvices() {
  return (
    <div className="bg-[--personal-p-color] text-[--personal-s-color] p-4 flex flex-col">
      <div className="flex">
        <div className="text-large uppercase">paid invoices</div>
        <div>:</div>
      </div>
      
      <div className="flex flex-col gap-3 mt-auto">
        <div className="flex justify-between">
          <div className="text-3xl">24</div>
          <div className="flex gap-1">
            <span>/</span>
            <span>32</span>
          </div>
        </div>
        <div className="h-[1px] bg-[--personal-s-color] opacity-40"></div>
        <div className="flex justify-between">
          <div className="uppercase">total</div>
          <div className="flex gap-1">
            <span>$6.000</span>
            <span>/</span>
            <span>12.000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function NumCard({
  title,
  num,
  note,
  className
}: {
  title: string
  num: string
  note: string
  className?: string
}) {
  return (  
    <div className={clsx("p-4 grid grid-rows-[1fr, 1fr]",className)}>
      <div className="flex justify-between">
        <div>{title}</div>
        <div>:</div>
      </div>
      <div className="flex justify-between items-end mt-3">
        <div className="text-7xl">{num}</div>
        <div className="flex gap-1">
          <span>/</span>
          <span>{note}</span>
        </div>
      </div>
    </div>
  )
}

function Guide() {
  return (
    <div className="bg-[--personal-s-color] p-4 grid grid-rows-2">
      <div className="flex items-start">
        <div className="flex-grow"></div>
        <div className="bg-[#333] text-[--personal-s-color] rounded-full p-2">
          <MdiArrowTopRight className="w-6 h-6" />
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col text-[--personal-p-color] font-medium text-2xl leading-6">
          <span>CUSTOM</span>
          <span>DASHBOARD</span>
        </div>
        <div className="flex gap-1">
          <span>10</span>
          <span>/</span>
          <span>20</span>

          <span>TEMPLATES</span>
        </div>
      </div>
    </div>
  )
}

function MdiArrowTopRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19L5 17.59Z"></path></svg>
  )
}
