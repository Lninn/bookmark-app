import Button from "../components/Button";
import FormItem from "../components/FormItem";

export default function NewPurchase() {
  return (
    <div className="flex flex-col gap-6 max-w-screen-sm mx-auto text-center">
      <div className="h-[100px]"></div>
      <h3 className="text-3xl text-black">New purchase on your card</h3>
      <p className="max-w-[300px] mx-auto text-lg">
        Please add the requested details according to your organization&apos;s expense polices
      </p>

      <div className="bg-white p-6 flex flex-col gap-6 rounded-lg w-[320px] mx-auto">
        <FormItem label='Frist name' defaultValue="sq wanderlust house" />
        <FormItem label='Frist name' defaultValue="$1230000" />
        <FormItem label='Frist name' defaultValue="Apr 14, at 3:11 PM" />
        <Button className="z-bg-ac">Add details</Button>
      </div>
    </div>
  )
}
