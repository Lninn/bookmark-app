import UrlsParse from "./UrlsParse";

export default async function Home() {
  return (
    <main className="p-24 flex flex-col gap-8">
      <div>所有的数据</div>
      <a href="/dashboard">Dashboard</a>
      <UrlsParse />
    </main>
  );
}
