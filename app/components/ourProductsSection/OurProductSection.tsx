"use client";
import React, { PropsWithChildren } from "react";
import SectionTitle from "../SectionTitle";
import ProductComponent from "./ProductComponent";
// import { useRef } from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const cardVariants = {
  initial: { y: 0, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

interface Product {
  id: string;
  name: string;
  description: string;
  highlightImageURL: string;
  order: number;
  productCode: string;
}

function Box({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="rounded-lg block pb-10 h-40 lg:h-96 w-full">{children}</div>
  );
}

const OurProductSection = () => {
  const [data, setData] = useState<Product[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/product/`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        // isInView = useInView(ref, { once: true });
      });
  }, []);

  if (isLoading) {
    return (
      <div className="container w-full ">
        <div className="">
          <Skeleton
            className="h-full rounded-lg"
            wrapper={Box}
            count={10}></Skeleton>
        </div>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="container w-full ">
        <p>Product data not found.</p>
      </div>
    );
  }

  return (
    <section className="pt-[36px]">
      <div className="container w-full flex flex-col gap-[64px] items-center lg:items-start">
        <div className="py-[10px] lg:py-0">
          <SectionTitle title="Our Product" isOneLine={false}></SectionTitle>
        </div>
        <ul className="flex flex-col w-full lg:w-full justify-center">
          {data.map((item, index) => {
            console.log(item);
            return (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3, delay: 0.4 }}>
                <ProductComponent
                  index={index + 1}
                  id={item.productCode}
                  title={item.name}
                  desc={item.description}
                  imageUrl={item.highlightImageURL}></ProductComponent>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OurProductSection;
