"use client";
import React from "react";
import { Button } from "./ui/button";

function OverlayText() {
  return (
    <div className="w-full h-[300px] flex justify-center items-center relative">
      <div className="flex flex-col items-center w-full absolute z-10 md:top-40 top-60">
        <h2 className="md:text-6xl text-5xl font-semibold text-white md:text-start text-center">iPhone 16 Pro</h2>
        <p className="text-lg font-normal text-white">Now available at our store</p>
        <section className="md:mt-10 mt-4">
            <Button className="md:mt-4 h-10 md:h-12 text-xs md:text-sm">Shop Now</Button>
            <Button variant="link" className="mt-4 md:text-sm text-xs">Contact Us</Button>
        </section>
      </div>
    </div>
  );
}

export default OverlayText;
