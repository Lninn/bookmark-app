import db from "@/app/api/db"

export async function GET() {
  return Response.json({ data: [] })
}

export async function POST(request: Request) {
  await db()

  const { data } = await request.json()
  
  return Response.json({ success: true, data: data })
}
