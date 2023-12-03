export async function GET() {
  await sleep(3000)

  return Response.json({ success: true })
}

async function sleep(ms: number) {
  return new Promise((r) => {
    setTimeout(r, ms)
  })
}
