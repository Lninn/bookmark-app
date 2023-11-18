import React, { SVGProps } from "react"
import { useSide } from "./app-provider"
import { MaterialSymbolsSunnyOutlineRounded } from "@/icons"

export function PreferenceSwitcher() {
  const { mode, toggleMode } = useSide()
  return (
    <div>
      {
          mode === "dark" ? (
            <button onClick={() => toggleMode("light")}>
              <MaterialSymbolsLightDarkModeOutlineRounded className="w-6 h-6" />
            </button>
          ) : null
        }
        {
          mode === "light" ? (
            <button onClick={() => toggleMode("dark")}>
              <MaterialSymbolsSunnyOutlineRounded className="w-6 h-6" />
            </button>
          ) : null
        }
    </div>
  )
}

function MaterialSymbolsLightDarkModeOutlineRounded(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.058 20q-3.333 0-5.667-2.334Q4.058 15.333 4.058 12q0-2.47 1.413-4.536t4.01-2.972q.306-.107.536-.056q.231.05.381.199t.191.38q.042.233-.062.489q-.194.477-.282.966t-.087 1.03q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.698 0 1.278-.148q.58-.148.987-.24q.217-.04.4.01q.18.051.287.176q.119.125.16.308q.042.182-.047.417q-.715 2.45-2.803 4.014Q14.733 20 12.058 20Zm0-1q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.158 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5.058 12q0 2.9 2.05 4.95t4.95 2.05Zm-.25-6.75Z"></path></svg>
  )
}
