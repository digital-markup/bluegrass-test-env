import { cn } from "@/lib/utils";
import { Search, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  className?: string;
}

async function Navbar({ className }: NavbarProps) {
  return (
    <div className="w-full h-12 backdrop-blur-md bg-white/10 justify-center xl:px-36 hidden md:flex fixed z-50 shadow">
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
          <Link href="/products?all=true">
            <p className={cn("nav-item-text", className)}>All Products</p>
          </Link>
          <Link href="/products?products=true&apple=true">
            <p className={cn("nav-item-text", className)}>Apple</p>
          </Link>
          <Link href="/products?products=true&android=true">
            <p className={cn("nav-item-text", className)}>Android</p>
          </Link>
          <Link href="/products?products=true&watches=true">
            <p className={cn("nav-item-text", className)}>Watches</p>
          </Link>
          <Link href="/products?products=true&headphones=true">
            <p className={cn("nav-item-text", className)}>Headsets</p>
          </Link>
          <Link href="/products?products=true&bluetooth=true">
            <p className={cn("nav-item-text", className)}>Bluetooth</p>
          </Link>
          <Link href="/products?products=true&accessories=true">
            <p className={cn("nav-item-text", className)}>Accessories</p>
          </Link>
          <Link href="/products?products=true&contact=true">
            <p className={cn("nav-item-text", className)}>Contact</p>
          </Link>
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
