import React from "react";
import SectionTitle from "../SectionTitle";
import WhyDescComponent from "./WhyDescComponent";

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

const WhyUsSection = () => {
  return (
    <section className="pt-[36px]">
      <div className="container w-full max-auto flex flex-col gap-[64px] items-center lg:items-start">
        <div className="py-[10px] lg:py-0">
          <SectionTitle title="Why Us"></SectionTitle>
        </div>
        <div className="flex flex-col w-full gap-[20px] items-center lg:flex-row lg:items-start lg:justify-center lg:gap-auto lg:max-w[360px]">
          {whyLists.map((item, index) => {
            return (
              <WhyDescComponent
                key={index}
                title={item.title}
                desc={item.desc}></WhyDescComponent>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
