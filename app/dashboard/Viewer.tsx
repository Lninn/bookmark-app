"use client"

import React from "react"
import Table, { TableColumn } from "./Table"
import { Bookmarks } from "@/models/BookmarksModel"

const columns: TableColumn<Bookmarks>[] = [
  {
    title: "标题",
    dataIndex: "title",
    width: 200,
    render: (_, record) => {
      return (
        <a href={record.url} target="__blank">{record.title}</a>
      )
    }
  },
  {
    title: "添加时间",
    dataIndex: "dateAdded",
    width: 140
  }
]

const Viewer = () => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch("/api/dashboard").then(res => {
      return res.json()
    }).then(res => {
      if (res.success) {
        setData(res.data)
      }
    })
  }, [])
 
  return (
    <div>
       <Table data={data} columns={columns }/>
    </div>
  )
}

export default Viewer
