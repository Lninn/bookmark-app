import db from "@/app/api/db"
import BookmarksModel from "@/models/BookmarksModel"
import mongoose from "mongoose"
import { NextRequest } from "next/server"


export async function GET(req: NextRequest) {
  await db()

  const searchParams = req.nextUrl.searchParams

  const urlString = searchParams.get("urls") || ""
  const urls = urlString.split(",").filter(s => s)

  return Response.json({ data: urls })
}

export async function POST(request: Request) {
  await db()

  const { data } = await request.json()

  try {
    await BookmarksModel.validate(data)
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

  const instance = new BookmarksModel(data)

  const item = await instance.save()

  return Response.json({ success: true, data: [item] })
}
