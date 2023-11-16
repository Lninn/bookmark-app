import db from "@/app/api/db"
import Bookmark from "@/models/Bookmark"
import mongoose from "mongoose"

export async function GET() {
  await db()

  const result = await Bookmark.find({})

  return Response.json({ data: result })
}

export async function POST(request: Request) {
  await db()

  const { data } = await request.json()

  try {
    await Bookmark.validate(data)
    console.log("验证成功")
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      return Response.json({
        success: false,
        msg: (err as mongoose.Error.ValidationError).message
      })
    } else {
      return Response.json({
        success: false,
        msg: "system errpor"
      })
    }
  }

  const instance = new Bookmark(data)

  const item = await instance.save()

  return Response.json({ success: true, data: [item] })
}
