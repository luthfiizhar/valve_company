"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 400,
    text: "Transaction",
  },
  {
    num: 600,
    text: "Satisfied Client",
  },
  {
    num: 100,
    text: "Unique Style",
  },
];

const Statistic = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-col flex gap-4 items-center justify-center xl:justify-start"
                key={index}>
                <span>
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl lg:text-6xl font-light text-[#545454]"></CountUp>
                  <span className="text-4xl lg:text-6xl font-light text-[#545454]">
                    +
                  </span>
                </span>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[120px]" : "max-w-[150px]"
                  } leading-snug text-[#545454] text-2xl lg:text-xl`}>
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistic;
