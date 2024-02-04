"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {ShoppingBag} from "lucide-react"
import React from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Small", href: "/Category-1" },
  { name: "Medium", href: "/Category-2" },
  { name: "Large", href: "/Category-3" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <div className="flex items-center ">
          <Link href={"/"}>
            <h1 className="text-2xl md:text-4xl font-bold">
              Elvira&#39;s <span className="text-[#f2c460]">Kilishi</span>
            </h1>
          </Link>
        </div>
        <nav className="hidden lg:flex gap-12 items-center">
          {links.map((link, id) => (
            <div key={id}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-[#f2c460]"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-primary transition duration-100 hover:text-[#f2c460]"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex divide-x border-r sm:border-l ">
          <Button className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24" variant={"outline"}>
            <ShoppingBag/>
            <span className="text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;