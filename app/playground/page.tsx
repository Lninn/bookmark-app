import Client from "./Client";
import UrlsParse from "./UrlsParse";

export default async function Dashboard() {
  return (
    <div>
      <div>
        <a href="/">Index</a>
      </div>

      <Client />

      <UrlsParse />
    </div>
  );
}
