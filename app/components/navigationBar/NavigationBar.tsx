import React from "react";
import NavButton from "./NavButton";
import Image from "next/image";
import MobileNav from "./MobileNav";

export default function NavigationBar() {
  return (
    <header className="py-[16px] text-black">
      <div className="h-full mx-auto flex justify-between items-center px-[16px]">
        <div className="h-[36px] w-[42px] lg:h-[64px] lg:w-[64px]">
          <Image
            src={"/images/logo_black.svg"}
            className="object-contain h-[36px] w-[42px]  lg:w-[64px] lg:h-[64px]"
            alt=""
            width={36}
            height={42}></Image>
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
