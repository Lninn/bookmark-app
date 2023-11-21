import BookmarksModel, { Bookmarks } from "@/models/BookmarksModel";
import { NextRequest } from "next/server";
import db from "../db";


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

  return Response.json({ success: true, data, total })
}

export async function POST(request: Request) {
  const { data } = await request.json()

  await db()

  const bookmarks = data as Bookmarks[]

  try {
    await BookmarksModel.insertMany(bookmarks)
  } catch (err: any) {
    if (err instanceof mongoose.MongooseError) {
      return Response.json({ success: false, msg: err.message })
    } else {
      return Response.json({ success: false, msg: "系统错误" })
    }
  }

  return Response.json({ success: true })
}
