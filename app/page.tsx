import UrlsParse from "./UrlsParse";

export default async function Home() {
  return (
    <main className="p-24 flex flex-col gap-8">
      <div className="flex gap-2">
        <a href="/dashboard" className="hover:text-gray-300">Dashboard</a>
        <a href="/playground" className="hover:text-gray-300">Playground</a>
      </div>

      <div>所有的数据</div>
      
      <UrlsParse />
    </main>
  );
}
