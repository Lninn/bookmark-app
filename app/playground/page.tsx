interface IColumn {
  title: string
  dataIndex: string
  render?: (record: Datum) => void
}

const columns: IColumn[] = [
  {
    title: "描述",
    dataIndex: "desc"
  },
  {
    title: "类型",
    dataIndex: "type",
    render(record) {
      const map = {
        "img": "图片",
        "link": "链接",
      }

      return map[record.type]
    },
  },
  {
    title: "标签",
    dataIndex: "tags",
    render(record) {
      return record.tags.map((tag, i) => {
        return (
          <span key={i}>{tag}</span>
        )
      })
    },
  },
  {
    title: "预览",
    dataIndex: "preview",
    render(record) {
      if (record.type === "link") {
        return (<a href={record.url} target="_blank">查看</a>)
      }
      return (
        <span>查看</span>
      )
    },
  },
]

interface Datum {
  desc: string;
  url: string;
  type: string;
  tags: string[];
}

const data: Datum[] = [
  {
    desc: "黄山旅游导游图",
    url: "https://pic4.zhimg.com/v2-fbac92cb867c960b363d5898dadfdff3_r.jpg",
    type: "img",
    tags: ["黄山", "导游图"],
  },
  {
    desc: "全国五级行政区划查询与下载",
    url: "https://map.ruiduobao.com/",
    type: "link",
    tags: ["全国行政区", "地理位置"],
  },

  {
    desc: "excalidraw",
    url: "https://excalidraw.com/",
    type: "link",
    tags: ["在线画板"]
  }
]

export default async function Playground() {

  return (
    <div>
      <div className="border px-4 py-3 rounded-lg flex">
        <div className="font-medium">数据列表</div>
        <div className="flex-grow"></div>
        <button className="border leading-none px-2 py-1">
          添加
        </button>
      </div>

      <div className="h-full">
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-400/50">
              {columns.map((col, idx) => {
                return (
                  <th
                    key={idx}
                    className="text-left"
                  >
                    {col.title}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((datum, idx) => {
              return (
                <tr key={idx}>
                  {columns.map((col, ijx) => {
                    const value = datum[col.dataIndex]
                    const dom = col.render ? col.render(datum) : value
                    return (
                      <td key={ijx} >
                        {dom}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
