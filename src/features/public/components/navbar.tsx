import { cn } from "@/lib/utils";
import { Search, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { publicRoutes } from "../routes";
import Logo from "@/features/admin/components/logo";
import SidebarMobile from "@/features/products/components/sidebar-mobile";

interface NavbarProps {
  className?: string;
}

async function Navbar({ className }: NavbarProps) {
  return (
    <>
      <div className="w-full h-12 backdrop-blur-md bg-gray-800/60 justify-center xl:px-36 hidden md:flex fixed z-50 shadow">
        {/* Mobile Navbar */}
        <nav className="flex items-center gap-x-14">
          <div className="flex space-x-10 items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={32}
              height={32}
              className="h-6 w-6"
            />
            {publicRoutes.map((route) => (
              <Link key={route.key} href={route.path}>
                <p className={cn("nav-item-text", className)}>{route.label}</p>
              </Link>
            ))}
          </div>
          <div className="flex space-x-5">
            <Link href="#">
              <Search className="w-5 h-5 text-white" strokeWidth={1} />
            </Link>
            <Link href="/sign-in">
              <User2 className="w-5 h-5 text-white" strokeWidth={1} />
            </Link>
          </div>
        </nav>
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}

async function MobileNavbar() {
  return (
    <nav className="w-full h-12 py-8 px-4 flex justify-between items-center shadow-md fixed z-50 bg-white">
      <Logo />
      <ul className="flex gap-x-3">
        <li>
          <Link href="/search">
            <Search className="w-5 h-5" />
          </Link>
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
