"use client";
import { PropsWithChildren } from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import SectionTitle from "@/app/components/SectionTitle";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductSpecComponent from "./ProductSpecComponent";
import ProductInfoDownload from "./ProductInfoDownload";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

// export async function generateStaticParams() {
//   const posts = await fetch("http://localhost:3000/products").then((res) =>
//     res.json()
//   );

//   return posts.map((post: any) => ({
//     slug: post.id,
//   }));
// }

// interface DataProductProps {
//   message: string;
//   data: ProductProps;
// }

interface ProductProps {
  id: string;
  name: string;
  description: string;
  highlightImageURL: string;
  bigImageURL: string;
  smallImageURL: string;
  productInfo: [ProductInfoProps];
  specification: [SpecificationProps];
}

interface SpecificationProps {
  label: string;
  text: string;
}

interface ProductInfoProps {
  title: string;
  downloadURL: string;
}

function Box({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="rounded-lg block pb-10 h-full lg:h-full w-full">
      {children}
    </div>
  );
}

const DetailProduct = () => {
  const param = useParams<{ id: string }>();

  const [data, setData] = useState<ProductProps>();

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/${param.id}`)
      .then((res) => {
        console.log(res);

        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [param.id]);

  if (isLoading) {
    return (
      <div className="container w-full h-full ">
        <Skeleton
          className="h-auto rounded-lg"
          height={"100vh"}
          wrapper={Box}
          count={1}></Skeleton>
      </div>
    );
  }
  if (!data) return <p>No profile data</p>;

  // const product: ProductProps = data.data;
  const spec: SpecificationProps[] = data.specification;
  const productInfo: ProductInfoProps[] = data.productInfo;

  let isLongDesc = false;
  if (spec.length > 5) {
    isLongDesc = true;
  }

  // let bigImage = details["largeImages"];
  // let smallImage = details["smallImages"];
  return (
    <div className="container w-full flex flex-col gap-[20px]">
      <SectionTitle title={data.name} isOneLine={true}></SectionTitle>
      <div className="w-full h-[267px] rounded-[30px] lg:h-[700px] bg-slate-500">
        <div className="relative w-full h-full content-center bg-clip-content">
          <Image
            src={data.bigImageURL}
            fill
            className="object-cover  rounded-[30px]"
            alt=""></Image>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] lg:flex-row lg:gap-[32px] lg:items-center">
        <div className="text-primary text-[16px] font-medium whitespace-pre-line lg:text-[24px]">
          {data.description}
        </div>
        <div className="bg-slate-400 w-full h-[212px] rounded-[30px] lg:h-[420px] lg:w-[460px] lg:flex-none">
          <div className="relative w-full h-full content-center bg-clip-content">
            <Image
              src={data.smallImageURL}
              fill
              className="object-cover  rounded-[30px]"
              alt=""></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <ProductInfoTitle text="Specification"></ProductInfoTitle>
        <div
          className={`flex flex-col gap-[12px] lg:flex-wrap lg:max-h-[648px] lg:h-auto lg:gap-x-[40px]`}>
          {spec.map((item: { label: string; text: string }, index: number) => {
            return (
              <ProductSpecComponent
                key={index}
                label={item.label}
                text={item.text}
                isLongDesc={isLongDesc}></ProductSpecComponent>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[16px] lg:pt-[16px]">
        <ProductInfoTitle text="Product Information"></ProductInfoTitle>
        <div className="flex flex-col gap-[16px] lg:flex-wrap lg:max-h-[100px] lg:h-auto lg:gap-x-[48px] lg:max-w-[500px]">
          {productInfo.map((info, index) => {
            return (
              <ProductInfoDownload
                key={index}
                title={info.title}
                downloadURL={info.downloadURL}></ProductInfoDownload>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
