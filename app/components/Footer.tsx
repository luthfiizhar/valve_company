import React from "react";
import Image from "next/image";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";

const iconsMobile = [
  {
    icon: <CiInstagram size={24}></CiInstagram>,
  },
  {
    icon: <CiLinkedin size={24}></CiLinkedin>,
  },
  {
    icon: <CiTwitter size={24}></CiTwitter>,
  },
];

const iconsDesktop = [
  {
    icon: <CiInstagram size={36}></CiInstagram>,
  },
  {
    icon: <CiLinkedin size={36}></CiLinkedin>,
  },
  {
    icon: <CiTwitter size={36}></CiTwitter>,
  },
];

const aboutUsButtons = [
  { text: "Profile" },
  { text: "Products" },
  { text: "Resource" },
];
const contactsInfo = [
  { text: "stockofvalve@stockofvalf.com" },
  { text: "+90 224 482 46 97" },
  { text: "Çalı Mah. Çınarlık Cad. No: 8 16275Bursa/Turkiye" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] px-[10px] py-[20px] mt-[32px]">
      <div className="flex flex-col gap-[32px] text-[#D1D1D1] lg:hidden">
        <div className="w-full items-center flex flex-col gap-[12px]">
          <div className="h-[36px] w-[42px] lg:h-[64px] lg:w-[64px]">
            <Image
              src={"/images/footer_logo.png"}
              className="object-cover h-[36px] w-[42px]  lg:w-[62px] lg:h-[64px]"
              alt=""
              width={36}
              height={42}></Image>
          </div>
          <div className="text-[16px] text-center">
            Your high quality valve for a secure connection
          </div>
          <div className="flex items-center gap-[24px] ">
            {iconsMobile.map((icon, index) => {
              return (
                <div className="p-[7px] rounded-[4px] bg-[#313131]">
                  <span key={index} className="">
                    {icon.icon}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex w-full justify-center items-center gap-[10px]">
          <div className=" w-[165px] h-[45px] bg-slate-300"></div>
          <div className=" w-[165px] h-[45px] bg-slate-300"></div>
        </div>
        <div className="items-center text-center">
          <span className="text-[16px]">
            Copyright © 2024. All rights reserved.
          </span>
        </div>
      </div>
      <div className="hidden lg:block lg:gap-[32px] lg:text-[#D1D1D1] px-[20px] ">
        <div className="lg:flex lg:flex-col lg:gap-[48px]">
          <div className="lg:flex lg:flex-row lg:gap-[80px] items-center justify-center">
            <div className="lg:w-[322px] lg:items-center lg:flex lg:flex-col lg:gap-[18px]">
              <div className="h-[36px] w-[42px] lg:h-[64px] lg:w-[64px]">
                <Image
                  src={"/images/footer_logo.png"}
                  className="object-cover h-[36px] w-[42px]  lg:w-[62px] lg:h-[64px]"
                  alt=""
                  width={36}
                  height={42}></Image>
              </div>
              <div className="lg:text-[22px] text-center">
                Your high quality valve for a secure connection
              </div>
              <div className="flex items-center gap-[24px] ">
                {iconsDesktop.map((icon, index) => {
                  return (
                    <div className="p-[7px] rounded-[6px] bg-[#313131]">
                      <span key={index} className="">
                        {icon.icon}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full lg:flex lg:flex-row lg:gap-[48px] pt-[82px] justify-center">
              <div className="flex flex-col gap-[20px] w-[246px]">
                <span className="text-[24px] text-[#FFFFFF] font-semibold">
                  About Us
                </span>
                <div className="flex flex-col gap-[16px]">
                  {aboutUsButtons.map((item, index) => {
                    return (
                      <span key={index} className="text-[22px]">
                        {item.text}
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-[20px]  w-[383px]">
                <span className="text-[24px] text-[#FFFFFF] font-semibold">
                  Conntacts
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
              <div className="flex flex-col gap-[20px]  w-[165px]">
                <span className="text-[24px] text-[#FFFFFF] font-semibold">
                  Get Our App
                </span>
                <div className="flex flex-col gap-[16px]"></div>
              </div>
            </div>
          </div>
          <div className="items-start text-left">
            <span className="text-[22px]">
              Copyright © 2024. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
