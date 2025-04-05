import React from "react";
import NavButton from "./NavButton";
import Image from "next/image";
import MobileNav from "./MobileNav";
import logoBlack from "@/public/images/logo_black.svg";

export default function NavigationBar() {
  return (
    <header className="py-[16px] text-black">
      <div className="h-max mx-auto flex justify-between items-center px-[16px]">
        <div className=" h-[48px] w-[56px] lg:h-[72px] lg:w-[120px] lg:flex-none">
          <div className="relative h-full w-full object-cover items-center">
            <Image
              src={logoBlack}
              className="object-containt"
              alt=""
              fill
              sizes="100vw"
              quality={100}></Image>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col items-center gap-[12px]">
          <NavButton></NavButton>
          <div className="flex-grow border-t border-primary w-full"></div>
        </div>
        <div className=" lg:w-[64px]"></div>

        {/* Mobile Nav Bar */}
        <div className="lg:hidden">
          <MobileNav></MobileNav>
        </div>
      </div>
    </header>
  );
}
