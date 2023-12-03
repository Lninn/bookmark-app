export default function FormItem({
  label,
  defaultValue,
}: {
  label: string
  defaultValue: string
}) {
  return (
    <div className="border inline-flex flex-col gap-1 px-4 py-2 rounded-lg text-left">
      <label>{label}</label>
      <input className="outline-none" type="text" defaultValue={defaultValue} />
    </div>
  )
}
