export async function GET() {
  // query data

  const data = await [{ id: 123 }]
 
  return Response.json({ data })
}
