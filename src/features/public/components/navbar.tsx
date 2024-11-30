import { cn } from "@/lib/utils";
import { Search, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { publicRoutes } from "../routes";

interface NavbarProps {
  className?: string;
}

async function Navbar({ className }: NavbarProps) {
  return (
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
  );
}

export default Navbar;
