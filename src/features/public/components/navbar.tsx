import { cn } from "@/lib/utils";
import { User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { publicRoutes } from "../routes";
import SidebarMobile from "@/features/products/components/sidebar-mobile";
import SearchBox from "@/components/search-box";

interface NavbarProps {
  className?: string;
  slug: "home" | "products" | "cart" | "checkout";
}

async function Navbar({ className, slug }: NavbarProps) {
  return (
    <>
      <div
        className={cn(
          slug === "home"
            ? "backdrop-blur-md bg-gray-800/60"
            : "bg-white text-slate-800",
          "w-full h-12 justify-center xl:px-36 px-6 hidden md:flex fixed z-50 shadow"
        )}
      >
        {/* Mobile Navbar */}
        <nav className="flex items-center gap-x-14">
          <div className="flex space-x-10 items-center">
            {slug === "home" ? (
              <Link href={"/"}>
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Link>
            ) : (
              <Link href={"/"}>
                <Image
                  src="/logob.svg"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Link>
            )}
            {publicRoutes.map((route) => (
              <Link key={route.key} href={route.path}>
                <p className={cn("nav-item-text", className)}>{route.label}</p>
              </Link>
            ))}
          </div>
          <div className="flex space-x-5">
            <SearchBox />
            <Link href="/sign-in">
              <User2 className="w-5 h-5 text-white" strokeWidth={1} />
            </Link>
          </div>
        </nav>
      </div>
      <div className="md:hidden">
        <MobileNavbar slug={slug} />
      </div>
    </>
  );
}

async function MobileNavbar({ slug }: NavbarProps) {
  return (
    <nav
      className={cn(
        slug === "home"
          ? "bg-gray-800/60 backdrop-blur-md text-white"
          : "bg-white",
        "w-full h-10 py-6 px-6 flex justify-between items-center shadow-md fixed top-0 z-50"
      )}
    >
      {slug === "home" ? (
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={20}
            height={20}
            className="object-contain"
          />
        </Link>
      ) : (
        <Link href={"/"}>
          <Image
            src="/logob.svg"
            alt="Logo"
            width={20}
            height={20}
            className="object-contain"
          />
        </Link>
      )}
      <ul className="flex gap-x-3">
        <li>
          <SearchBox />
        </li>
        <li>
          <Link href="/user">
            <User2 className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <SidebarMobile color="bg-white" />
        </li>
      </ul>
    </nav>
  );
}

export { MobileNavbar };
export default Navbar;
