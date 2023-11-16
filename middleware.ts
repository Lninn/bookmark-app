import { NextRequest, NextResponse } from "next/server"

const legacyPrefixes = ["/docs", "/blog"]

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/",
  ],
};

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  console.log("pathname ", pathname)
 
  if (legacyPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next()
  }
 
  // apply trailing slash handling
  if (
    !pathname.endsWith("/") &&
    !pathname.match(/((?!\.well-known(?:\/.*)?)(?:[^/]+\/)*[^/]+\.\w+)/)
  ) {
    req.nextUrl.pathname += "/"
    return NextResponse.redirect(req.nextUrl)
  }
}
