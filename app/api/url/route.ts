import { NextRequest } from "next/server";


export async function GET(request: NextRequest) {

  const searchParams = request.nextUrl.searchParams
  const originalUrl = searchParams.get("url")

  if (!originalUrl) {
    return Response.json({ success: false })
  }

  const data = new URL(originalUrl)

  let reqUrl = ""
  const targetUrl = data.origin
  try {
    const iconUrl = await createIconUrl(targetUrl)
    reqUrl = iconUrl
  } catch (error: any) {
    console.log("[debug]", {
      targetUrl,
      name: error.name
    })
  }

  return Response.json({ success: true, data: { originalUrl, icon: reqUrl } })
}

async function createIconUrl(url: string) {
  const userAgents = [
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Safari/605.1.15",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:77.0) Gecko/20100101 Firefox/77.0",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36"
  ];
  const userAgent = userAgents[Math.floor(Math.random() * userAgents.length)];

  const controller = new AbortController();
  const timeout = 20000; // 设置超时时间为 20000 毫秒

  // 如果超过了设定的超时时间，就中止请求
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
          "User-Agent": userAgent,
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
          "DNT": "1",
          "Connection": "keep-alive",
          "Upgrade-Insecure-Requests": "1"
      },
      signal: controller.signal
    })
    const doc = await res.text()
    return getIcon(url, doc)
  } catch (error: any) {
    const isTimeout = error.name === "AbortError"
    console.log("[debug-createIconUrl] ", {
      url,
      isTimeout,
      name: error.name,
      error,
    });
  } finally {
    clearTimeout(timeoutId);
  }

  return ""
}

async function getIcon(url: string, doc: string) {
  const obj = new URL(url);

  const tryUrl = obj.origin + "/favicon.ico";
  const isPass = await urlHasValid(tryUrl);

  if (isPass) return tryUrl;

  let matchedRes: any

  const regex = /<link rel="shortcut icon"(?: type="image\/x-icon")? href="(.*?)">/g;
  matchedRes = regex.exec(doc);
  if (matchedRes) {
    const val = matchedRes[1]
    if (val) return val
  }

  matchedRes = doc.match(/<link rel="icon" href="(?<href>[^"]+)"/);
  if (matchedRes) {
    const href = matchedRes.groups?.href;

    if (href) return obj.origin + href;
  }

  return "";
}

async function urlHasValid(url: string) {
  try {
    const res = await fetch(url);
    const headers = res.headers

    const ct = headers.get("content-type")
    if (!ct) return false

    if (ct === "text/html; charset=utf-8") return false

    return res.status === 200;
  } catch (err: any) {
    console.log("[debug-urlHasValid]", {
      name: err.name,
      url,
    });
    
  }

  return false;
}
