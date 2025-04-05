"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

interface ProductProps {
  index: number;
  id: string;
  title: string;
  desc: string;
  imageUrl: string;
}

const ProductComponent = ({
  index,
  id,
  title,
  desc,
  imageUrl,
}: ProductProps) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <div
      className={`flex flex-col gap-[10px] w-full lg:flex-row lg:gap-[64px]  lg:items-center shadow-lg rounded-lg px-4 py-4`}>
      <div className="px-[20px] text-[24px] pt-2 text-primary font-semibold text-left lg:hidden">
        {title}
      </div>
      <div
        className={`flex justify-center content-center object-cover w-full h-[360px]  lg:flex-none lg:w-[512px] lg:h-[512px]  lg:object-contain ${
          index % 2 !== 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"
        }`}>
        <div
          className="relative h-full w-full object-contain items-center"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
          <Image
            src={imageUrl}
            alt=""
            sizes="100vw"
            quality={100}
            fill
            className="object-contain"></Image>
          {isHovering ? (
            <div className="absolute w-full h-full rounded-[20px] bg-black bg-opacity-50">
              <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <div className="flex flex-row gap-[8px]">
                  {/* <Link href={downloadURL} target="_blank" download>
                    <Button
                      className="rounded-[4px] lg:rounded-[8px]"
                      size={"sm"}>
                      <BsDownload></BsDownload>
                    </Button>
                  </Link> */}
                  <Link href={`/products/${encodeURIComponent(id)}`}>
                    <Button
                      className="rounded-[4px] lg:rounded-[8px]"
                      size={"icon_lg"}>
                      <BsBoxArrowUpRight></BsBoxArrowUpRight>
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
      <div
        className={`flex flex-col gap-[32px] lg:max-w-full items-center lg:items-start ${
          index % 2 !== 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"
        }`}>
        <div className="hidden lg:flex lg:text-[36px] lg:text-primary lg:font-semibold">
          {title}
        </div>
        <div className="px-[20px] text-[18px] text-primary font-medium text-left whitespace-pre-line lg:px-0 lg:text-[20px]">
          {desc}
        </div>
        <Button
          className="text-[16px] lg:text-[24px] w-[176px] lg:w-[250px]"
          asChild>
          <Link href={`/products/${encodeURIComponent(id)}`}>Learn More</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductComponent;
