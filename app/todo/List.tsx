"use client"

import clsx from "clsx"
import { SVGProps, useEffect, useRef, useState } from "react"

interface Item {
  text: string
  fill: string
  checked: boolean
}

export default function List() {
  const [list, setList] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch("/api/todo").then(res => res.json()).then(res => {
      // console.log("debug ", res)
      setList(res.data)
    }).finally(() => setLoading(false))
  }, [])

  function onClick(item: Item) {
    setList(p => p.map(d => ({
      ...d,
      checked: d.text === item.text ? !d.checked : d.checked
    })))
  }

  if (loading) {
    return <Skeleton />
  }

  return (
    <div className="w-full flex flex-col gap-2">
      {list.map((d, i) => {
        return <TodoItem key={i} config={d} onClick={() => onClick(d)} />
      })}
    </div>
  )
}

interface ITodoProps {
  config: Item
  onClick: () => void
}

function calculateOpacity(dragDistance, totalWidth) {
  // 确保拖动距离不小于0且不大于总宽度
  dragDistance = Math.max(0, Math.min(dragDistance, totalWidth));

  // 计算透明度值
  const opacity = dragDistance / totalWidth;
  return opacity;
}

function TodoItem(props: ITodoProps) {
  const { config, onClick } = props

  const draggableRef = useRef<HTMLDivElement>(null)

  const [applyX, setApplyX] = useState(0)

  useEffect(() => {
    const draggable = draggableRef.current
    if (!draggable) return

    const state = {
      offsetX: 0,
      offsetY: 0,
    }

    draggable.addEventListener("touchstart", function (e) {
      // 记录初始位置和 left 值
      const touch = e.touches[0];
      state.offsetX = touch.clientX - draggable.getBoundingClientRect().left;
      state.offsetY = touch.clientY - draggable.getBoundingClientRect().top;
    });

    draggable.addEventListener("touchmove", function (e) {
      e.preventDefault(); // 防止滚动
  
      const touch = e.touches[0];
  
      // 计算新的位置
      const newX = touch.clientX - state.offsetX;
      // const newY = touch.clientY - state.offsetY;
  
      // 更新元素的位置
      draggable.style.left = newX + "px";
      // draggable.style.top = newY + "px";

      setApplyX(newX)
    });
  }, [])

  return (
    <div className="relative h-[52px]">
      <div
       className="absolute top-0 left-0 right-0 bg-white h-[52px] w-full" 
        style={{ opacity: calculateOpacity(Math.abs(applyX), 311) }}
      >
        <button>删除</button>
      </div>
      <div
        className={clsx(
          "flex items-center gap-3 bg-[#061955] px-4 py-3 rounded-lg w-full absolute h-[52px]",
          {
            "line-through decoration-2 decoration-white": config.checked
          }
        )} 
        onClick={onClick}
        ref={draggableRef}
      >
        {
          config.checked ? (
            <div className="border-2 rounded-full w-6 h-6 flex items-center justify-center">
              <IcSharpCheck className="text-[14px] text-white" />
            </div>
          ): (
            <div className="border-2 border-[#ff764d] w-6 h-6 rounded-full" style={{ borderColor: config.fill }}></div>
          )
        }
        <div className="text-lg text-white">{config.text}</div>
      </div>
    </div>
  )
}

function IcSharpCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"></path></svg>
  )
}

const Skeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-300 h-4 rounded"></div>
      <div className="bg-gray-300 h-4 rounded"></div>
      <div className="bg-gray-300 h-4 rounded"></div>
      <div className="bg-gray-300 h-4 rounded"></div>
      <div className="bg-gray-300 h-4 rounded"></div>
      <div className="bg-gray-300 h-4 rounded"></div>
      <div className="bg-gray-300 h-4 rounded"></div>
      <div className="bg-gray-300 h-4 rounded"></div>
      <div className="bg-gray-300 h-4 rounded"></div>
    </div>
  );
};
