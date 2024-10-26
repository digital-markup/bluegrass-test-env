import { Search, User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function Navbar() {
  return (
    <div className="w-full h-12 backdrop-blur-md bg-white/10 justify-center xl:px-36 hidden md:flex fixed z-50">
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
            <p className="nav-item-text">All Products</p>
          </Link>
          <Link href="/products?products=true&apple=true">
            <p className="nav-item-text">Apple</p>
          </Link>
          <Link href="/products?products=true&android=true">
            <p className="nav-item-text">Android</p>
          </Link>
          <Link href="/products?products=true&watches=true">
            <p className="nav-item-text">Watches</p>
          </Link>
          <Link href="/products?products=true&headphones=true">
            <p className="nav-item-text">Headsets</p>
          </Link>
          <Link href="/products?products=true&bluetooth=true">
            <p className="nav-item-text">Bluetooth</p>
          </Link>
          <Link href="/products?products=true&accessories=true">
            <p className="nav-item-text">Accessories</p>
          </Link>
          <Link href="/products?products=true&contact=true">
            <p className="nav-item-text">Contact</p>
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
