import BookmarksModel, { Bookmarks } from "@/models/BookmarksModel"
import mongoose from "mongoose"
import db from "@/app/api/db"
import { type NextRequest } from "next/server"
// import { getFullUrl } from "@/app/shared"

export async function POST(request: Request) {
  const { data } = await request.json()

  await db()

  const bookmarks = data as Bookmarks[]

  try {
    await BookmarksModel.insertMany(bookmarks)
  } catch (err) {
    if (err instanceof mongoose.MongooseError) {
      return Response.json({ success: false, msg: err.message })
    } else {
      return Response.json({ success: false, msg: "系统错误" })
    }
  }

  return Response.json({ success: true })
}

// ref 分页 https://cnodejs.org/topic/559a0bf493cb46f578f0a601
export async function GET(request: NextRequest) {

  const searchParams = request.nextUrl.searchParams
  const page = Number(searchParams.get("page")) || 1
  const pageSize = Number(searchParams.get("pageSize")) || 10

  await db()

  const result= await BookmarksModel
    .find()
    .skip((page - 1) * pageSize)
    .limit(pageSize)
    .sort({ dateAdded: "ascending" }).exec()

  const total = await BookmarksModel.countDocuments()

  const data: any[] = result.map(datum => {
    const {
      id,
      parentId,
      index,
      url,
      title,
      dateAdded,
    } = datum

    return {
      id,
      parentId,
      index,
      url,
      title,
      dateAdded,
    }
  })

  // const baseUrl = process.env.VERCEL_URL ? "https://" + process.env.VERCEL_URL : "http://localhost:3000"
  
  // const pedings =data.map(datum => {
  //   const params = {
  //     url: datum.url
  //   }

  //   const cUrl = getFullUrl(`${baseUrl}/api/url`, params)
  //   return fetch(cUrl).then(res => res.json()).then(res => {
  //     if (res.success) return res.data.icon
  //     return ""
  //   })
  // })

  // const iconResDataList = await Promise.all(pedings)

  // const nextData = data.map((datum, idx) => {
  //   return {
  //     ...datum,
  //     icon: iconResDataList[idx]
  //   }
  // })
  
  return Response.json({ success: true, data, total })
}
