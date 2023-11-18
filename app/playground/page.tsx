import Client from "./Client";
import UrlsParse from "./UrlsParse";

export default async function Dashboard() {
  return (
    <>
      <Client />

      <UrlsParse />
    </>
  );
}
