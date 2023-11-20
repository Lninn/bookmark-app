import { NextRequest } from "next/server";


export async function GET(request: NextRequest) {

  const searchParams = request.nextUrl.searchParams
  const originalUrl = searchParams.get("url")

  return Response.json({ success: true, data: { originalUrl } })
}
