
import AppProvider from "./app-provider"
import Header from "./Header"
import MobileMenu from "./MobileMenu"


interface Menu {
  label: string
}

const menus: Menu[] = Array.from({
  length: 100
}).map((_, idx) => {
  return {
    label: "item " + idx
  }
})

function SideBar() {
  return (
    <aside style={{ height: "calc(100vh - 57px)", overflowY: "scroll" }} className="w-52 text-sky-50 border-r border-gray-200/50">
      <div className="p-3 text-black">
        {menus.map((menuConfig, idx) => {
          return (
            <div key={idx} className="mb-2 px-2 py-1 hover:bg-gray-300/30 rounded">
              {menuConfig.label}
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppProvider>
      <Header />
      <MobileMenu />
      <main className="flex">
        <SideBar />
        <div className="max-w-screen-xl px-4 py-10 ml-auto mr-auto">
          {children}
        </div>
      </main>
    </AppProvider>
  )
}
