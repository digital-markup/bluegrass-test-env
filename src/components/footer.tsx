import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="bg-black px-6 lg:px-20">
      <div className="container mx-auto md:px-20 lg:px-64 flex flex-col gap-6 w-full">
        <div className="text-white flex gap-x-8 items-center">
          <div className="flex flex-col gap-y-4 md:min-w-[300px] py-6">
            <h1 className="text-2xl font-semibold">Bluegrass Cellular</h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              quibusdam eligendi, amet corporis suscipit repudiandae doloribus
              eum! Voluptatum, magnam repellendus blanditiis, repellat velit
              eaque debitis voluptas odit laboriosam aliquam quidem.
            </p>
          </div>
          <div className="w-full pl-10 flex gap-x-8">
            {/* Quick Access */}
            <div>
              <ul>
                <li>Home</li>
                <li>All Products</li>
                <li>Apple</li>
                <li>Android</li>
                <li>Watches</li>
              </ul>
            </div>
            {/* Shop now */}
          </div>
        </div>
        <div className="flex flex-1 text-white gap-x-2 justify-start items-center w-full h-12">
          <p className="text-xs">
            Copyright © 2024 Digital Markup. All rights reserved.
          </p>
          <div className="text-xs">
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms & Conditions</Link>
            <Link href={"#"}>Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
