"use client"

import React from "react"
import Table, { TableColumn } from "./Table"
import { Bookmarks } from "@/models/BookmarksModel"

const columns: TableColumn<Bookmarks>[] = [
  {
    title: "标题",
    dataIndex: "title",
    width: 400,
    render: (_, record) => {
      return (
        <div className="text-sky-500">
          <a href={record.url} target="__blank" >{record.title}</a>
        </div>
      )
    }
  },
  {
    title: "添加时间",
    dataIndex: "dateAdded",
    width: 200,
    render(_, record) {
      const date = record.dateAdded
      if (!date && date !== 0) return "--"

      return (new Date(date)).toLocaleString()
    }
  },
  {
    title: "index",
    dataIndex: "index",
    width: 100
  },
  {
    title: "操作",
    dataIndex: "action",
    width: 100,
    render() {
      return (
        <div>
          <button>解析</button>
        </div>
      )
    }
  }
]

const Viewer = () => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [page, setPage] = React.useState(1)
  const [total, setTotal] = React.useState(0)

  const pageItems = React.useMemo(() => {
    const pages = Math.floor(total / 10)

    const numbers = Array.from({
      length: pages
    }).map((_, idx) => {
      return idx + 1
    })

    return numbers
  }, [total])

  React.useEffect(() => {
    queryData(page)
  }, [])

  function queryData(page: number) {
    setLoading(true)
    fetch(`/api/dashboard?page=${page}&pageSize=10`).then(res => {
      return res.json()
    }).then(res => {
      if (res.success) {
        setTotal(res.total)
        setData(res.data)
      }
    }).finally(() => setLoading(false))
  }

  function handleClick(num: number) {
    setPage(num)
    queryData(num)
  }
 
  return (
    <div>
       <Table
        loading={loading}
        data={data}
        columns={columns }
      />

       <div className="flex gap-2 p-3">
        {
          pageItems.map(num => {
            return (
              <div
               key={num} 
               style={{ color: num === page ? "rgb(14, 165, 233)" : "" }}
               className="cursor-pointer hover:text-gray-600 flex items-center justify-center text-lg w-8 h-8 bg-gray-500 rounded-md" 
               onClick={() => handleClick(num)}
              >
                {num}
              </div>
            )
          })
        }
       </div>
    </div>
  )
}

export default Viewer
