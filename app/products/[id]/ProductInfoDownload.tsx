"use client";
import { PropsWithChildren } from "react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { RxDownload } from "react-icons/rx";
import Link from "next/link";

import Skeleton from "react-loading-skeleton";

interface ProductInfoResultProps {
  id: string;
  name: string;
  productInfo: [ProductInfoProps];
}

interface ProductInfoProps {
  title: string;
  file: string;
}

interface ResponseProps {
  message: string;
  data: ProductInfoResultProps;
}

function Box({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="rounded-lg block pb-10 h-[100px] lg:h-[100px] w-full">
      {children}
    </div>
  );
}

const ProductInfoDownload = ({}) => {
  const path = usePathname();
  const pathArray = path.split("/");
  const id = pathArray[pathArray.length - 1];
  const [data, setData] = useState<ResponseProps>();
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`/api/product_info/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="container w-full h-full ">
        <Skeleton
          className="h-auto rounded-lg"
          height={"100px"}
          wrapper={Box}
          count={1}></Skeleton>
      </div>
    );
  }

  if (!data) return <p>No profile data</p>;

  const productInfoRes: ProductInfoResultProps = data?.data;
  const productInfo: ProductInfoProps[] = productInfoRes?.productInfo;
  return (
    <div className="flex flex-col gap-[16px] lg:flex-wrap lg:max-h-[100px] lg:h-auto lg:gap-x-[48px] lg:max-w-[500px]">
      {productInfo.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-row w-max gap-[16px] justify-center lg:max-w-[300px]">
            <span className="text-[16px] text-[#000000] font-semibold lg:text-[24px]">
              {item.title}
            </span>
            <Link href={item.file} target="_blank">
              <RxDownload size={24}></RxDownload>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductInfoDownload;
