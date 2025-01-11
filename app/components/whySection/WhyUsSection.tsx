"use client";

import React from "react";
import SectionTitle from "../SectionTitle";
import WhyDescComponent from "./WhyDescComponent";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const whyLists = [
  {
    title: "Trusted",
    desc: "Precision, reliability, and on-time delivery you can count on",
  },
  {
    title: "High Quality",
    desc: "Engineered for durability, tested for performance, and built to exceed industry standards",
  },
  {
    title: "Fast",
    desc: "Quick turnaround, rapid shipping, and on-time delivery to keep your projects moving",
  },
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="pt-[36px]">
      <div className="container w-full max-auto flex flex-col gap-[64px] items-center lg:items-start">
        <div className="py-[10px] lg:py-0">
          <SectionTitle title="Why Us" isOneLine={false}></SectionTitle>
        </div>
        <ul
          ref={ref}
          className="flex flex-col w-full gap-[20px] items-center lg:flex-row lg:items-start lg:justify-center lg:gap-auto lg:max-w[360px]">
          {whyLists.map((item, index) => {
            return (
              <motion.li
                key={index}
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.3, delay: index * 0.4 }}>
                <WhyDescComponent
                  title={item.title}
                  desc={item.desc}></WhyDescComponent>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WhyUsSection;
