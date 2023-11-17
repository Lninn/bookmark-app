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
        <a href={record.url} target="__blank" className="text-sky-500">{record.title}</a>
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
  }
]

const nums = [1,2,3,4,5]

const Viewer = () => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    queryData(1)
  }, [])

  function queryData(page: number) {
    setLoading(true)
    fetch(`/api/dashboard?page=${page}&pageSize=10`).then(res => {
      return res.json()
    }).then(res => {
      if (res.success) {
        setData(res.data)
      }
    }).finally(() => setLoading(false))
  }

  function handleClick(num: number) {
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
          nums.map(num => {
            return (
              <div
               key={num} 
               className="cursor-pointer hover:text-gray-600" 
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
