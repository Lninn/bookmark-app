import DataTable from "./DataTable";

export default async function Playground() {
  return (
    <div>
      <div className="border px-4 py-3 rounded-lg flex">
        <div className="font-medium">数据列表</div>
        <div className="flex-grow"></div>
        <button className="border leading-none px-2 py-1">
          添加数据
        </button>
      </div>

      <DataTable />
    </div>
  );
}
