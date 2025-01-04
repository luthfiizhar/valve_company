import React from "react";
import { Button } from "@/components/ui/button";

interface ProductProps {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
}

const ProductComponent = ({ id, title, desc, imageUrl }: ProductProps) => {
  return (
    <div className="flex flex-col gap-[10px] w-full lg:flex-row lg:gap-[64px]  lg:items-center">
      <div className="px-[20px] text-[24px] text-primary font-semibold text-left lg:hidden">
        {title}
      </div>
      <div
        className={`flex-none w-full h-[360px] lg:w-[512px] lg:h-[512px] bg-slate-500 ${
          id % 2 !== 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"
        }`}></div>
      <div
        className={`flex flex-col gap-[32px] lg:max-w-full items-center lg:items-start ${
          id % 2 !== 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"
        }`}>
        <div className="hidden lg:flex lg:text-[36px] lg:text-primary lg:font-semibold">
          {title}
        </div>
        <div className="px-[20px] text-[18px] text-primary font-medium text-left whitespace-pre-line lg:px-0 lg:text-[20px]">
          {desc}
        </div>
        <Button className="text-[16px] lg:text-[24px] w-[176px] lg:w-[250px]">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default ProductComponent;
