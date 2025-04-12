"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/public/images/hero_2.png";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="container w-full max-auto">
      <div className=" flex flex-col lg:flex-row  gap-[20px] lg:gap-[32px] bg-primary bg-opacity-20 rounded-2xl p-8 lg:p-16 mt-8 lg:items-start">
        <div className="order-2 lg:order-1 w-full flex flex-col items-center lg:items-start gap-[24px]">
          <div className="flex flex-col text-primary text-[16px] lg:text-[20px]">
            <p className="whitespace-pre-line">
              {
                "Dear Customer,\n\nWe are thrilled to introduce Stock of Valf, a premier supplier of high-quality valves tailored primarily for the oil and gas industry. Founded by industry veterans with decades of experience, our company is dedicated to meeting the niche requirements of our valued customers. At Stock of Valf, we understand the unique challenges and demands of the oil and gas sector. Our comprehensive range of valves is designed to deliver exceptional performance, reliability, and durability in the most demanding environments. Whether you need standard solutions or custom designs, our team of experts is committed to providing products that exceed your expectations. We look forward to the opportunity to collaborate with you and fulfill your specific needs with our top-tier products and unparalleled service.\n\nSincerely, \nStock of Valf Team"
              }
            </p>
          </div>
          <Link href={"/contact"}>
            <Button className="text-[16px] lg:text-[24px] w-[176px] lg:w-[250px]">
              Contact Us
            </Button>
          </Link>
        </div>
        <AnimatePresence>
          <div className="order-1 lg:order-2 block max-w-full h-[240px] lg:max-w-[480px] lg:min-w-[480px] lg:h-[300px] lg:content-center">
            <div className="relative h-full w-full content-center object-contain rounded-2xl overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
                }}>
                <Image
                  src={heroImage}
                  alt=""
                  // layout="fill"
                  placeholder="blur"
                  quality={100}
                  // objectFit="cover"
                  fill
                  className="object-cover transition-opacity"></Image>{" "}
              </motion.div>{" "}
            </div>
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
