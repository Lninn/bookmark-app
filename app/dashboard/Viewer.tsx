"use client"

import React from "react"
import Table, { TableColumn } from "../../components/Table"
import Button from "@/components/Button"
import { Dialog } from "@/components"
import { getFullUrl } from "../../components/shared"

const originalCols: TableColumn<any>[] = [
  {
    title: "Icon",
    dataIndex: "icon",
    width: 60,
    render: (_, record) => {
      return (<img src={record.icon} />)
    }
  },
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
]

const Viewer = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = React.useState<any[]>([])
  const [loading, setLoading] = React.useState(true)
  const [page, setPage] = React.useState(1)
  const [total, setTotal] = React.useState(0)
  const [pageSize] = React.useState(15)

  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [activeRecord, setActiveRecord] = React.useState<any>()
  const [iconUrl, setIconUrl] = React.useState("")

  const columns = [
    ...originalCols,
    {
      title: "操作",
      dataIndex: "action",
      width: 120,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render(_: unknown, record: any) {
        function onClick() {
          setIconUrl("")
          setActiveRecord(record)
          setDialogOpen(true)
        }
        return (
          <div>
            <Button onClick={onClick}>Get Icon</Button>
          </div>
        )
      }
    }
  ]

  React.useEffect(() => {
    if (!activeRecord) {
      return
    }

    const params = { url: activeRecord.url }

    // Append the query string to the URL
    const fullUrl = getFullUrl("/api/url", params)

    fetch(fullUrl).then(res => {
      return res.json()
    }).then(res => {
      if (res.success) {
        setIconUrl(res.data.icon)
      }
      console.log("debug ", res);
    })
  }, [activeRecord])
  
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
    fetch(`/api/url?page=${page}&pageSize=${pageSize}`).then(res => {
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

  function handleSyncInfo() {
    const url = new URL( location.origin + "/api");
    const searchPS = new URLSearchParams(url.search);

    searchPS.append("urls", data.map(d => d.url).toString())

    setLoading(true)
    fetch(`${url}/?${searchPS.toString()}`).then(res => res.json())
      .then(data => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const extendData: any[] = data?.data?.extendData || []

        setData(prev => {
          const newData = prev.map(datum => {
            const subData = extendData.find(d => d.url === datum.url)

            return { ...datum, extendData: subData  }
          })

          return newData
        })
      }).finally(() => setLoading(false))
  }
 
  return (
    <div>
      <div className="flex items-center gap-2">
      <Button onClick={handleSyncInfo}>Sync info</Button>
      </div>
       
       <Table
        loading={loading}
        data={data}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        columns={columns as any[]}
      />

       <div className="flex gap-2 p-3">
        {
          pageItems.map(num => {

            if (page < 3) {
              if (num > 5) return null
            } else {
              if (num < page - 2 || num > page + 2) return null 
            }

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

       <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          {iconUrl}
          {iconUrl ? <img src={iconUrl} className="w-6 h-6" /> : null}
       </Dialog>
    </div>
  )
}

export default Viewer
