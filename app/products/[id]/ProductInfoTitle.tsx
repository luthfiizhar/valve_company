import React from "react";

interface ProductInfoTitleProps {
  text: string;
}

const ProductInfoTitle = ({ text }: ProductInfoTitleProps) => {
  return (
    <div className="flex flex-col gap-[8px] items-start w-auto">
      <div className="text-[24px] text-[#1F1F1F] font-semibold lg:text-[36px]">
        {text}
      </div>
      <div className="w-full">
        {" "}
        <hr
          style={{
            color: "#DADADA",
            backgroundColor: "#DADADA",
            height: 1,
            width: "auto",
          }}
        />
      </div>
    </div>
  );
};

export default ProductInfoTitle;
