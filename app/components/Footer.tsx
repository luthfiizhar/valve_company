"use client";
import React from "react";
import Image from "next/image";
// import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
// import appstoreImage from "@/public/images/icons/app_store.png";
// import playstoreImage from "@/public/images/icons/play_store.png";
import footerLogo from "@/public/images/SOV_logo_White.svg";
// import backgroundImage from "@/public/images/background_home.png"
// import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const aboutUsButtons = [
  { text: "Profile", link: "/about" },
  { text: "Products", link: "/products" },
  { text: "Resource", link: "/resources" },
];
const contactsInfo = [
  { text: "stockofvalf@stockofvalf.com" },
  { text: "+90 541 190 2903" },
  {
    text: "Kızılırmak Mah. 1450 Sok. No: 18, Köprülü Plaza, Kat No:6 Daire No: 23, Çankaya, Ankara, TÜRKİYE",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className=" px-[10px] py-[20px] mt-[32px]">
        <div className="flex flex-col gap-[32px] text-[#D1D1D1] lg:hidden">
          <div className="w-full items-center flex flex-col gap-[12px]">
            <div className="relative h-[36px] w-[42px] lg:h-[64px] lg:w-[64px]">
              <Image
                src={footerLogo}
                className="object-contain h-[36px] w-[42px]  lg:w-[62px] lg:h-[64px]"
                alt=""
                fill></Image>
            </div>
            <div className="text-[16px] text-center">
              Your high quality valve for a secure connection
            </div>
            {/* <div className="flex items-center gap-[24px] ">
            {iconsMobile.map((icon, index) => {
              return (
                <div key={index} className="p-[7px] rounded-[4px] bg-[#313131]">
                  <span className="">{icon.icon}</span>
                </div>
              );
            })}
          </div> */}
          </div>
          {/* <div className="flex w-full justify-center items-center gap-[10px]">
            <div className=" w-[165px] h-[45px] bg-slate-300">
              <div className="relative w-full h-full">
                <Image
                  src={playstoreImage}
                  alt=""
                  fill
                  className="object-cover"></Image>
              </div>
            </div>
            <div className=" w-[165px] h-[45px] bg-slate-300">
              <div className="relative w-full h-full">
                <Image
                  src={appstoreImage}
                  alt=""
                  fill
                  className="object-cover"></Image>
              </div>
            </div>
          </div> */}
          <div className="items-center text-center">
            <span className="text-[16px]">
              Copyright © 2025. All rights reserved.
            </span>
          </div>
        </div>
        <div className="hidden lg:block lg:gap-[32px] lg:text-[#D1D1D1] px-[20px] ">
          <div className="lg:flex lg:flex-col lg:gap-[48px]">
            <div className="lg:flex lg:flex-row lg:gap-[80px] items-center justify-center">
              <div className="lg:w-[322px] lg:items-center lg:flex lg:flex-col lg:gap-[18px]">
                <div className="relative h-[36px] w-[42px] lg:h-[64px] lg:w-[64px]">
                  <Image
                    src={footerLogo}
                    className="object-contain h-[36px] w-[42px]  lg:w-[62px] lg:h-[64px]"
                    alt=""
                  ></Image>
                </div>
                <div className="lg:text-[22px] text-center">
                  Your high quality valve for a secure connection
                </div>
                {/* <div className="flex items-center gap-[24px] ">
                {iconsDesktop.map((icon, index) => {
                  return (
                    <div
                      key={index}
                      className="p-[7px] rounded-[6px] bg-[#313131]">
                      <span className="">{icon.icon}</span>
                    </div>
                  );
                })}
              </div> */}
              </div>
              <div className="w-full lg:flex lg:flex-row lg:gap-[48px] pt-[82px] justify-center">
                <div className="flex flex-col gap-[20px] w-[246px]">
                  <span className="text-[24px] text-[#FFFFFF] font-semibold">
                    About Us
                  </span>
                  <div className="flex flex-col gap-[16px]">
                    {aboutUsButtons.map((item, index) => {
                      return (
                        <Link key={index} href={item.link}>
                          <span className="text-[22px]">{item.text}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-[20px]  w-[383px]">
                  <span className="text-[24px] text-[#FFFFFF] font-semibold">
                    Contacts
                  </span>
                  <div className="flex flex-col gap-[16px]">
                    {contactsInfo.map((item, index) => {
                      return (
                        <span key={index} className="text-[22px]">
                          {item.text}
                        </span>
                      );
                    })}
                  </div>
                </div>
                {/* <div className="flex flex-col gap-[20px]  w-[165px]">
                  <span className="text-[24px] text-[#FFFFFF] font-semibold">
                    Get Our App
                  </span>
                  <AnimatePresence>
                    <div className="flex flex-col gap-[16px]">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: {
                            delay: 0.5,
                            duration: 0.4,
                            ease: "easeInOut",
                          },
                        }}>
                        <div className=" w-[180px] h-[60px]">
                          <div className="relative w-full h-full">
                            <Image
                              src={playstoreImage}
                              alt=""
                              fill
                              className="object-cover"></Image>
                          </div>
                        </div>
                      </motion.div>{" "}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: 1,
                          transition: {
                            delay: 0.5,
                            duration: 0.4,
                            ease: "easeInOut",
                          },
                        }}>
                        <div className=" w-[180px] h-[60px]">
                          <div className="relative w-full h-full">
                            <Image
                              src={appstoreImage}
                              alt=""
                              fill
                              className="object-cover"></Image>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </AnimatePresence>
                </div> */}
              </div>
            </div>
            <div className="items-start text-left">
              <span className="text-[22px]">
                Copyright © 2025. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
