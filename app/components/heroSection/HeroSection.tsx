import { Button } from "@/components/ui/button";
import Statistic from "./Statistic";

const HeroSection = () => {
  return (
    <section className="">
      <div className="container max-autoh-[860px] relative">
        <div className="absolute top-0 left-0 w-[336px] ">
          <div className="flex flex-col gap-8 items-start">
            <p className="text-md text-left">
              At Kurvalf, we specialize in the precision manufacturing of high
              performance valves that drive efficiency, safety, and reliability
              across industries worldwide. With state-of-the-art technology and
              a commitment to quality, our valves are engineered to meet the
              most demanding standards in oil & gas, water treatment, power
              generation, and beyond. From design to delivery, we ensure every
              valve is built to perform under pressure guaranteeing your systems
              run smoothly, safely, and efficiently.
            </p>
            <div className="pl-8">
              <Button>Contact Us</Button>
            </div>
          </div>
          <div className="relative w-[500px] mt-10">
            <Statistic></Statistic>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[420px] bg-red-500"></div>
        {/* <div className="absolute bottom-0 right-[100px] w-[600px] h-[420px] bg-red-200"></div> */}
      </div>
    </section>
  );
};

export default HeroSection;
