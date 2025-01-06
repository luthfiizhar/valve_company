import React from "react";
import SectionTitle from "../components/SectionTitle";

const AboutUsPage = () => {
  return (
    <div className="container w-full flex flex-col gap-[24px] items-center lg:items-start">
      <SectionTitle title="About Us" isOneLine={true}></SectionTitle>
      <div className="w-full h-[300px] bg-slate-400 rounded-[30px] lg:h-[712px]"></div>
      <span className="whitespace-pre-line text-primary text-[16px] font-medium lg:text-[24px]">
        {
          "We are thrilled to introduce Stock of Valf, a premier supplier ofhigh-quality valves tailored primarily for the oil and gas industry. Founded by industry veterans with decades of experience, our compa  ny is dedicated to meeting the niche requirements of our valued customers.\nAt Stock of Valf, we understand the unique challenges and demands of the oil and gas sector. Our comprehensive range of valves is designed to deliver exceptional performance, reliability, and durability in the most demanding environments. Whether you need standard solutions or custom designs, our team of experts is committed to providing products that exceed your expectations. We look forward to the opportunity to collaborate with you and fulfill your specific needs with our top-tier products and unparalleled service.\nSincerely,\nStock of ValfTeam"
        }
      </span>
    </div>
  );
};

export default AboutUsPage;
