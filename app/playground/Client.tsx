"use client"

import React from "react";
import { Dialog } from "@/components";
import clsx from "clsx"

const _tags: string[] = [
  "科技创新", "健康生活", "旅游探索", "美食烹饪", "教育学习", "娱乐活动", 
  "音乐欣赏", "电影观赏", "体育运动", "时尚潮流", "艺术欣赏", "历史研究", 
  "文化交流", "政治观察", "经济分析", "环保行动", "科学研究", "数学问题", 
  "物理学习", "化学实验", "生物探索", "医学知识", "心理学习", "哲学思考", 
  "宗教信仰", "建筑设计", "创意设计", "摄影技巧", "写作技巧", "阅读推荐", 
  "游戏体验", "动漫欣赏", "舞蹈学习", "戏剧欣赏", "绘画技巧", "雕塑艺术", 
  "陶艺制作", "园艺养护", "烹饪技巧", "手工艺制作", "编程学习", "网络安全", 
  "人工智能", "数据科学", "物联网技术", "区块链技术", "虚拟现实", "增强现实", 
  "机器学习", "深度学习"
];


const Client = () => {
  const [open, setOpen] = React.useState(false)

  const [tags] = React.useState<string[]>(_tags)
  const [selectedTags, setSetselectedTags] = React.useState<string[]>([])

  function addTag(t: string) {
    setSetselectedTags([
      ...selectedTags,
      t
    ])
  }

  async function handleAdd() {
    const params = {
      name: "1",
    }

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: params }),
      })
      const data = await res.json()

      if (data.success) {
        console.log("Demo 请求成功")
        location.reload()
      } else {
        console.log("Demo 请求失败 ", data.msg)
      }
    } catch (error) {
      console.log("error")
    }
  }

  function onSubmit(e) {
    e.preventDefault()
  }

  return (
    <div style={{ height: 1000 }}>
      <div>
        <button onClick={() => setOpen(true)}>Open Dialog</button>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <form onSubmit={onSubmit}>
          <div className="flex mb-6">
            <input
              autoFocus
              type="text"
              id='name'
              className="text-neutral-900 w-full leading-7 px-2 py-1 outline-none"
              placeholder="Please Input a Url"
            />

            <button
              className="border border-gray-200/30 hover:border-gray-200/100 rounded p-1"
              style={{ padding: "2px 4px", fontSize: 12, alignSelf: "center" }}
            >
              Esc
            </button>
          </div>
        </form>

        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
            height: 200,
            overflow: "scroll"
          }}
        >
          {tags.map((tagStr, idx) => {
            return (
              <div
                key={idx}
                className={clsx(
                  "px-2 py-1 border border-transparent hover:border-gray-200 rounded cursor-pointer flex items-center justify-center",
                  {
                    "border-sky-300": selectedTags.includes(tagStr)
                  }
                )}
                onClick={() => addTag(tagStr)}
              >
                {tagStr}
              </div>
            )
          })}
        </div>

        <div className="mt-2 px-2 text-right">
          <button
            onClick={handleAdd}
            className="bg-gray-50 rounded hover:bg-gray-100 px-2 py-1"
          >
            添加
          </button>
        </div>
      </Dialog>
    </div>
  )
}

export default Client
