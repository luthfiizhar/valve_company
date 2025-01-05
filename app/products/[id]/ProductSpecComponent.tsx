import React from "react";

interface ProductSpecComponentProps {
  label: string;
  text: string;
}

const ProductSpecComponent = ({ label, text }: ProductSpecComponentProps) => {
  return (
    <div className="flex flex-row w-full gap-[10px] lg:w-[620px]">
      <div className="flex flex-row w-[156px] gap-[2px] text-[14px] text-[#000000] font-bold lg:w-[280px] lg:text-[24px]">
        <span className="flex w-full">{label}</span>
        <span className="flex-none">:</span>
      </div>
      <span className="w-full text-[14px] text-[#1f1f1f] font-light lg:text-[24px]">
        {text}
      </span>
    </div>
  );
};

export default ProductSpecComponent;
