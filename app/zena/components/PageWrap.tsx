export default function PageWrap({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      style={{ borderRadius: "32px 0 0 0", minHeight: "calc(100% - 96px)" }}
      className=" p-8 bg-white"
    >
      {children}
    </div>
  )
}

