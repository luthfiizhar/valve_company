import React from "react";

interface SectionTitleProps {
  title: String;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className="flex flex-row gap-[36px] items-center">
      <div className="w-[100px] ">
        {" "}
        <hr
          style={{
            color: "#545454",
            backgroundColor: "#545454",
            height: 3,
          }}
        />
      </div>
      <div className="text-primary text-center lg:text-left text-[28px] lg:text-[36px] font-semibold">
        {title}
      </div>
      <div className="w-[100px] lg:hidden">
        {" "}
        <hr
          style={{
            color: "#545454",
            backgroundColor: "#545454",
            height: 3,
          }}
        />
      </div>
    </div>
  );
};

export default SectionTitle;
