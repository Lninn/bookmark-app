import Link from "next/link"
import { SVGProps } from "react"

export default function Create() {
  return (
    <div className="bg-white h-screen">
      <div className="w-8 h-8 border flex items-center justify-center rounded-full fixed top-12 right-12">
        <Link href='/todo'><AntDesignCloseOutlined className="text-lg" /></Link>
      </div>

      <div className="pt-36 px-8">
        <div>
          <input
            type="text"
            placeholder="Enter new task"
            className="w-full text-xl"
          />
        </div>
      </div>

      <div className="flex w-full justify-center mt-60">
        <div className="w-36 flex justify-between">
          <MaterialSymbolsLightFolderOpenOutlineSharp className="w-6 h-6" />
          <PhFlagLight className="w-6 h-6" />
          <MaterialSymbolsDarkModeOutlineRounded className="w-6 h-6" />
        </div>
      </div>

      <button className="fixed bottom-12 right-12 bg-[#6a44d9] px-6 py-2 text-base text-white rounded-3xl font-light">
        New task
      </button>
    </div>
  )
}

function AntDesignCloseOutlined(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024" {...props}><path fill="currentColor" fillRule="evenodd" d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path></svg>
  )
}

function MaterialSymbolsDarkModeOutlineRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362q.15.225.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21Zm0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19Zm-.25-6.75Z"></path></svg>
  )
}


function MaterialSymbolsLightFolderOpenOutlineSharp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3 19V5h6.596l2 2h9.23v1h-9.632l-2-2H4v11.962l2.265-7.577h16.6L20.288 19H3Zm2.042-1h14.496l1.974-6.615H7.015L5.042 18Zm0 0l1.973-6.615L5.042 18ZM4 8V6v2Z"></path></svg>
  )
}

function PhFlagLight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M36.08 43.37A6 6 0 0 0 34 47.9V216a6 6 0 0 0 12 0v-45.22c28.08-22.79 51.88-11 79.34 2.57c16.12 8 33.49 16.58 52 16.58c13.57 0 27.76-4.6 42.56-17.42A6 6 0 0 0 222 168V47.9a6 6 0 0 0-9.93-4.54c-29 25.12-53.28 13.09-81.41-.84c-27.89-13.81-59.66-29.36-94.58.85ZM210 165.17c-28.08 22.8-51.88 11-79.34-2.58C105.4 150.08 77.09 136.07 46 156V50.72c28.08-22.8 51.88-11 79.34 2.56C150.6 65.79 178.91 79.8 210 59.91Z"></path></svg>
  )
}
