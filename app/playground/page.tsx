import Client from "./Client";

export default async function Dashboard() {
  return (
    <div>
      <div>
        <a href="/">Index</a>
      </div>

      <Client />
    </div>
  );
}
