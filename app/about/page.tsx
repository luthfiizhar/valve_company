import React from "react";
import SectionTitle from "../components/SectionTitle";
import aboutImage from "@/public/images/about_pict.jpg";
import Image from "next/image";

const AboutUsPage = () => {
  return (
    <div className="container w-full flex flex-col gap-[24px] items-center lg:items-start">
      {/* <SectionTitle title="About Us" isOneLine={true}></SectionTitle> */}
      <div className="w-full h-[300px] bg-slate-400 rounded-[30px] lg:h-[712px]">
        <div className="relative w-full h-full object-contain">
          <Image
            src={aboutImage}
            alt=""
            fill
            className="object-cover rounded-[30px]"></Image>
          <div className="absolute h-full w-full bg-black opacity-50 rounded-[30px] "></div>
          <h1 className="absolute h-full w-full text-center content-center text-white font-semibold text-[32px] lg:text-[48px]">
            About Us
          </h1>
        </div>
      </div>
      <span className="whitespace-pre-line text-primary text-[16px] font-medium lg:text-[24px]">
        {
          "We are thrilled to introduce Stock of Valf, a premier supplier ofhigh-quality valves tailored primarily for the oil and gas industry. Founded by industry veterans with decades of experience, our compa  ny is dedicated to meeting the niche requirements of our valued customers.\nAt Stock of Valf, we understand the unique challenges and demands of the oil and gas sector. Our comprehensive range of valves is designed to deliver exceptional performance, reliability, and durability in the most demanding environments. Whether you need standard solutions or custom designs, our team of experts is committed to providing products that exceed your expectations. We look forward to the opportunity to collaborate with you and fulfill your specific needs with our top-tier products and unparalleled service.\nSincerely,\nStock of ValfTeam"
        }
      </span>
    </div>
  );
};

export default AboutUsPage;
