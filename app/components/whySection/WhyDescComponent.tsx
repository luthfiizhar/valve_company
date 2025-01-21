import React from "react";
import Image from "next/image";

interface WhyDescInterface {
  title: string;
  desc: string;
  icon: string;
}

const WhyDescComponent = ({ title, desc, icon }: WhyDescInterface) => {
  return (
    <div className="flex flex-col items-center gap-[24px] lg:flex-row lg:items-start lg:gap-[16px] lg:max-w-[360px]">
      <div className="w-[42px] h-[42px] lg:w-[72px] lg:h-[72px] lg:min-w-[72px]">
        <div className="relative w-full h-full items-center">
          <Image
            src={icon}
            quality={100}
            fill
            alt=""
            className="object-contain"></Image>
        </div>
      </div>
      <div className="flex flex-col items-center text-center w-auto gap-[24px] lg:gap-[32px] lg:items-start lg:text-left">
        <div className="text-[#0C4D70] text-[28px] font-semibold">{title}</div>
        <div className="text-primary text-[18px] lg:text-[20px] font-medium">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default WhyDescComponent;
