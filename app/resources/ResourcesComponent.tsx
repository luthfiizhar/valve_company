"use client";
import Image from "next/image";
import { useState } from "react";

interface ResourcesComponentProps {
  text: string;
  // downloadURL: string;
  coverURL: string;
}

const ResourcesComponent = ({
  text,
  // downloadURL,
  coverURL,
}: ResourcesComponentProps) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  // console.log(isHovering);

  return (
    <div className="flex flex-col gap-[16px] w-[148px] items-center lg:w-[180px]">
      <div
        className="w-[100px] h-[100px] bg-gray-500 rounded-[20px] lg:w-[200px] lg:h-[200px] "
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <div className="relative h-full w-full bg-opacity-0 rounded-[20px]">
          <Image
            src={coverURL}
            alt="images not found"
            quality={100}
            sizes="100vw"
            fill
            className=" object-cover rounded-[20px] border-solid border-primary border-[0.5px]"></Image>
          {isHovering ? (
            <div className="block h-full w-full rounded-[20px] bg-black bg-opacity-50 justify-center content-center items-center">
              <div className="">download button</div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="text-[#000000] text-center text-[16px] lg:text-[24px] ">
        {text}
      </div>
    </div>
  );
};

export default ResourcesComponent;
