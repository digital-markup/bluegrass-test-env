import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <span className="flex space-x-2 items-center">
      <Image
        alt="Logo"
        src="/logo.svg"
        width={32}
        height={32}
        className="h-6 w-6"
      />
      <p className="text-black font-bold">Bluegrass Cellular</p>
    </span>
  );
}

export default Logo;
