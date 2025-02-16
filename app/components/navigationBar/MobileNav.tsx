"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

const links = [
  { name: "home", path: "/" },
  { name: "products", path: "/products" },
  { name: "about us", path: "/about" },
  { name: "resources", path: "/resources" },
  { name: "contact", path: "/contact" },
];
const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <MdMenu className="text-[24px] text-[black]"></MdMenu>
      </SheetTrigger>
      <VisuallyHidden.Root>
        <SheetTitle>Menu</SheetTitle>
      </VisuallyHidden.Root>
      <SheetContent className="flex flex-col">
        {/* <div className="mt-32 mb-40 text-center text-2xl">
          <h1 className="text-4xl font-semibold">
            Izhrmn<span className="text-accent">.</span>
          </h1>
        </div> */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathName &&
                  "text-accent border-b-2 border-accent"
                }text-xl capitalize hover:text-accent tranisition-all`}>
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
