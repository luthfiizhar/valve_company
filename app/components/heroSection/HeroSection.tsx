import { Button } from "@/components/ui/button";
import Statistic from "./Statistic";

const HeroSection = () => {
  return (
    <section className="">
      <div className="container w-full max-auto flex flex-col lg:flex-row  gap-[20px] lg:gap-[32px]">
        <div className="order-2 lg:order-1 w-full flex flex-col items-center lg:items-start gap-[24px]">
          <p className="flex flex-col text-primary text-[16px] lg:text-[20px]">
            <span>Dear Customer,</span>
            <span>
              We are thrilled to introduce Stock of Valf, a premier supplier of
              high-quality valves tailored primarily for the oil and gas
              industry. Founded by industry veterans with decades of experience,
              our company is dedicated to meeting the niche requirements of our
              valued customers. At Stock of Valf, we understand the unique
              challenges and demands of the oil and gas sector. Our
              comprehensive range of valves is designed to deliver exceptional
              performance, reliability, and durability in the most demanding
              environments. Whether you need standard solutions or custom
              designs, our team of experts is committed to providing products
              that exceed your expectations. We look forward to the opportunity
              to collaborate with you and fulfill your specific needs with our
              top-tier products and unparalleled service.
            </span>
            <span>Sincerely,</span>
            <span>Stock of Valf Team</span>
          </p>
          <Button className="text-[16px] lg:text-[24px] w-[176px] lg:w-[250px]">
            Contact Us
          </Button>
        </div>
        <div className="order-1 lg:order-2 max-w-full h-[240px] lg:max-w-[480px] lg:min-w-[480px] lg:h-auto bg-fuchsia-400"></div>
      </div>
    </section>
  );
};

export default HeroSection;
