import React from "react";

interface ResourcesComponentProps {
  text: string;
  downloadURL: string;
}

const ResourcesComponent = ({ text, downloadURL }: ResourcesComponentProps) => {
  return (
    <div className="flex flex-col gap-[16px] w-[148px] items-center lg:w-[180px]">
      <div className="w-[100px] h-[100px] bg-slate-500 rounded-[20px] lg:w-[200px] lg:h-[200px]"></div>
      <div className="text-[#000000] text-center text-[16px] lg:text-[24px]">
        {text}
      </div>
    </div>
  );
};

export default ResourcesComponent;
