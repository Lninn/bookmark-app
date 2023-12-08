import db from "@/app/api/db"
import TodosModel from "@/models/TodosModel";
import mongoose from "mongoose";

export async function GET() {
  await db()

  const result= await TodosModel.find()

  return Response.json({ data: result })
}

const enum Status {
  Validation,
  System,
  Exists,
  Ok,
}

const messageMap: Record<Status, string> = {
  [Status.Validation]: "参数错误",
  [Status.Exists]: "当前 item 已存在",
  [Status.System]: "系统错误",
  [Status.Ok]: "成功",
}

export async function POST(request: Request) {
  await db()

  const { data } = await request.json()

  let status: Status | null = null

  try {
    await TodosModel.validate(data)

    const exists = await TodosModel.exists(data)
    if (exists) {
      status = Status.Exists
    } else {
      status = Status.Ok
    }
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      status = Status.Validation
    } else {
      status = Status.System
    }
  }

  if (status !== Status.Ok) {
    const msg = messageMap[status]
    return Response.json({ success: false, msg, })
  }

  try {
    const instance = new TodosModel(data)
    await instance.save()
  } catch (error) {
    return Response.json({ success: false, msg: "系统错误", })
  }

  return Response.json({ success: true, msg: "成功", })
}

