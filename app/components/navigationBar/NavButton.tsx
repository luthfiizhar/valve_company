"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "products", path: "/products" },
  { name: "about us", path: "/about" },
  { name: "resources", path: "/resources" },
  { name: "contact", path: "/contact" },
];

const NavigationBar = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className="flex gap-8">
      {links.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={`${
              (item.path === pathName ||
                pathName.split("/")[1] === item.path.replace("/", "")) &&
              "text-primary font-semibold"
            } capitalize text-primary font-light hover:text-primary hover:font-bold transition-all text-[22px]`}>
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavigationBar;
