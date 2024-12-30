import React from "react";
import NavButton from "./NavButton";
import { Button } from "@/components/ui/button";

export default function NavigationBar() {
  return (
    <header className="py-[16px] text-black">
      <div className="h-full mx-auto flex justify-between items-center px-[16px]">
        <div
          className="h-[64px] w-[64px]"
          style={{
            background: `url(/images/navbar_logo.png)`,
            backgroundSize: "fill",
            backgroundRepeat: "false",
          }}></div>
        <div className="hidden lg:flex lg:flex-col items-center gap-[12px]">
          <NavButton></NavButton>
          <div className="flex-grow border-t border-primary w-full"></div>
        </div>
        <div className="w-[64px]"></div>
      </div>
    </header>
  );
}
