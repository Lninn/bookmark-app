import BookmarksModel, { Bookmarks } from "@/models/BookmarksModel"
import mongoose from "mongoose"
import db from "@/app/api/db"

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

export async function GET() {
  await db()

  const result= await BookmarksModel.find({})

  const data = result.map(datum => {
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

  return Response.json({ success: true, data })
}
