import Image from "next/image";
import React from "react";

function FooterLogo() {
  return (
    <>
      <Image src="/logos/Footer-logo.svg" alt="logo" width={50} height={50} className="object-contain"/>
    </>
  );
}

export default FooterLogo;
