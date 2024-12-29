import Browsethepage from "@/components/Browsethepage";
import Furnirooffuture from "@/components/Furnirooffuture";
import Hero from "@/components/hero";
import OurProducts from "@/components/ourproducts";
import Slider from "@/components/slider";


export default function Home() {
  return (
    <div>
      <Hero/>
      <br />
      <Browsethepage/>
      <br />
      <OurProducts/>
      <br />
      <br />
      <br />
      <Slider/>
      <br />
      <Furnirooffuture/>
      
    </div>
  );
}
