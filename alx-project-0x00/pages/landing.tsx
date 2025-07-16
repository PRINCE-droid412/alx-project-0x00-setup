import React from "react";
import Card from "@/components/Card"
import Pill from "@/components/Pill"
import Button from "@/components/Button";



const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
        <Pill title="Villa" />
        <Pill title="apartment" />
        <Pill title="kitchen" />

  <div className="flex gap-4 flex-wrap">
    {/* Sizes */}
    <Button title="Small Button" styles="text-sm px-3 py-1" />
    <Button title="Medium Button" styles="text-base px-4 py-2" />
    <Button title="Large Button" styles="text-lg px-6 py-3" />
  </div>

  <div className="flex gap-4 flex-wrap mt-4">
    {/* Shapes */}
    <Button title="Rounded Sm" styles="rounded-sm" />
    <Button title="Rounded Md" styles="rounded-md" />
    <Button title="Rounded Full" styles="rounded-full" />
  </div>
</div>
    </div>

    
  )
}
export default Landing