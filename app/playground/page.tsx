import Client from "./Client";
import UrlsParse from "./UrlsParse";

export default async function Dashboard() {
  return (
    <div className="p-3">
      <Client />

      <UrlsParse />
    </div>
  );
}
