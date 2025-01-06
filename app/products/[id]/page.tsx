import detailProductData from "@/app/data/DetailProductData";
import React from "react";
import SectionTitle from "@/app/components/SectionTitle";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductSpecComponent from "./ProductSpecComponent";
import ProductInfoDownload from "./ProductInfoDownload";

// export async function generateStaticParams() {
//   const posts = await fetch("http://localhost:3000/products").then((res) =>
//     res.json()
//   );

//   return posts.map((post: any) => ({
//     slug: post.id,
//   }));
// }

async function DetailProduct({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  var details: any = {};
  detailProductData.map((item: any, index: number) => {
    if (item.id === id) {
      details = item;
    }
  });
  let spec: { label: string; text: string }[] = details["spec"];
  let productInfo: { title: string; downloadURL: string }[] =
    details["productInfo"];
  //   console.log(spec);

  return (
    <div className="container w-full flex flex-col gap-[20px]">
      <SectionTitle title={details["title"]} isOneLine={true}></SectionTitle>
      <div className="w-full h-[267px] rounded-[30px] lg:h-[700px] bg-slate-500"></div>
      <div className="flex flex-col gap-[20px] lg:flex-row lg:gap-[32px] lg:items-center">
        <div className="text-primary text-[16px] font-medium whitespace-pre-line lg:text-[24px]">
          {details["desc"]}
        </div>
        <div className="bg-slate-400 w-full h-[212px] rounded-[30px] lg:h-[420px] lg:w-[460px] lg:flex-none"></div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <ProductInfoTitle text="Spesification"></ProductInfoTitle>
        <div className="flex flex-col gap-[12px] lg:flex-wrap lg:max-h-[648px] lg:h-auto lg:gap-x-[40px]">
          {spec.map((item: { label: string; text: string }, index: number) => {
            return (
              <ProductSpecComponent
                key={index}
                label={item.label}
                text={item.text}></ProductSpecComponent>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[16px] lg:pt-[16px]">
        <ProductInfoTitle text="Product Information"></ProductInfoTitle>
        <div className="flex flex-col gap-[16px] lg:flex-wrap lg:max-h-[100px] lg:h-auto lg:gap-x-[48px] lg:w-min">
          {productInfo.map(
            (item: { title: string; downloadURL: string }, index) => {
              return (
                <ProductInfoDownload
                  key={index}
                  title={item.title}
                  downloadURL={item.downloadURL}></ProductInfoDownload>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
