"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import detailProductData from "@/app/data/DetailProductData";
import SectionTitle from "@/app/components/SectionTitle";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductSpecComponent from "./ProductSpecComponent";
import ProductInfoDownload from "./ProductInfoDownload";
import Image from "next/image";

// export async function generateStaticParams() {
//   const posts = await fetch("http://localhost:3000/products").then((res) =>
//     res.json()
//   );

//   return posts.map((post: any) => ({
//     slug: post.id,
//   }));
// }

interface Data {
  message: string;
  data: Product;
}

interface Product {
  id: string;
  name: string;
  description: string;
  highlightImageURL: string;
  bigImagesURL: string;
  smallImagesURL: string;
  specification: [Specification];
  productInfo: [ProductInfo];
}

interface Specification {
  label: string;
  text: string;
}

interface ProductInfo {
  title: string;
  downloadURL: string;
}

const DetailProduct = () => {
  const path = usePathname();
  let pathArray = path.split("/");
  let id = pathArray[pathArray.length - 1];
  console.log(`id ${id}`);

  const [data, setData] = useState<Data>();
  const [isLoading, setLoading] = useState(true);
  // const { id } = await params;

  // var details: any = {};
  // detailProductData.map((item: any, index: number) => {
  //   if (item.id === id) {
  //     details = item;
  //   }
  // });
  // let spec: { label: string; text: string }[] = details["spec"];
  // let productInfo: { title: string; downloadURL: string }[] =
  //   details["productInfo"];
  // let bigImage = details["largeImages"];
  // let smallImage = details["smallImages"];

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        // console.log(data);

        // isInView = useInView(ref, { once: true });
      });
  }, []);

  if (isLoading) return <p>Loading ...</p>;
  if (!data) return <p>No profile data</p>;
  //   console.log(spec);
  console.log(data["data"]);
  let product: Product = data.data;
  let spec: Specification[] = product.specification;
  let productInfo: ProductInfo[] = product.productInfo;
  let isLongDesc = false;
  if (spec.length > 5) {
    isLongDesc = true;
  }

  // let bigImage = details["largeImages"];
  // let smallImage = details["smallImages"];
  return (
    <div className="container w-full flex flex-col gap-[20px]">
      <SectionTitle title={product.name} isOneLine={true}></SectionTitle>
      <div className="w-full h-[267px] rounded-[30px] lg:h-[700px] bg-slate-500">
        <div className="relative w-full h-full content-center bg-clip-content">
          <Image
            src={product.bigImagesURL}
            fill
            className="object-cover  rounded-[30px]"
            alt=""></Image>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] lg:flex-row lg:gap-[32px] lg:items-center">
        <div className="text-primary text-[16px] font-medium whitespace-pre-line lg:text-[24px]">
          {product.description}
        </div>
        <div className="bg-slate-400 w-full h-[212px] rounded-[30px] lg:h-[420px] lg:w-[460px] lg:flex-none">
          <div className="relative w-full h-full content-center bg-clip-content">
            <Image
              src={product.smallImagesURL}
              fill
              className="object-cover  rounded-[30px]"
              alt=""></Image>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[12px]">
        <ProductInfoTitle text="Spesification"></ProductInfoTitle>
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
};

export default DetailProduct;
