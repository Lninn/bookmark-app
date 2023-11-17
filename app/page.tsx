export default async function Home() {
  return (
    <main className="p-24 flex flex-col gap-8">
      <div className="flex gap-2">
        <a href="/dashboard" className="hover:text-gray-300">Dashboard</a>
        <a href="/playground" className="hover:text-gray-300">Playground</a>
      </div>

      <div className="text-5xl text-sky-400">
        Hello world
      </div>
    </main>
  );
}
