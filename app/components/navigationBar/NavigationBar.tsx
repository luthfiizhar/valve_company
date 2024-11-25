import React from "react";
import NavButton from "./NavButton";
import { Button } from "@/components/ui/button";

export default function NavigationBar() {
  return (
    <header className="py-8 xl:py-12 text-black">
      <div className="container mx-auto flex justify-between items-center">
        <div>Logo</div>
        <div className="hidden xl:flex items-center gap-8">
          <NavButton></NavButton>
        </div>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
}
