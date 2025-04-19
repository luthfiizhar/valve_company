"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsDownload, BsCode } from "react-icons/bs";
import Link from "next/link";

interface ResourcesComponentProps {
  text: string;
  downloadURL: string;
  coverURL: string;
}

const ResourcesComponent = ({
  text,
  downloadURL,
  coverURL,
}: ResourcesComponentProps) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  // console.log(isHovering);

  return (
    <div className="flex flex-col gap-[16px] w-[140px] items-center lg:w-[180px]">
      <div
        className="w-[100px] h-[100px]  rounded-[20px] lg:w-[200px] lg:h-[200px] "
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}>
        <div className="relative h-full w-full bg-opacity-0 rounded-[20px]">
          <Image
            src={coverURL}
            alt=""
            quality={100}
            sizes="100vw"
            fill
            placeholder="blur"
            blurDataURL="/images/alt_img.jpg"
            className=" object-cover rounded-[20px] border-solid border-primary border-[0.5px]"></Image>
          {isHovering ? (
            <div className="absolute w-full h-full rounded-[20px] bg-black bg-opacity-50">
              <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <div className="flex flex-row gap-[8px]">
                  <Link href={downloadURL} target="_blank" download>
                    <Button
                      className="rounded-[4px] lg:rounded-[8px]"
                      size={"sm"}>
                      <BsDownload></BsDownload>
                    </Button>
                  </Link>
                  <Link href={downloadURL} target="_blank">
                    <Button
                      className="rounded-[4px] lg:rounded-[8px]"
                      size={"sm"}>
                      <BsCode></BsCode>
                    </Button>
                  </Link>
                </div>
              </div>
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
