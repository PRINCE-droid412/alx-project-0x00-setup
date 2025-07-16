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
    </div>

    
  )
}
export default Landing