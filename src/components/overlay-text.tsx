"use client";
import React from "react";
import { Button } from "./ui/button";

function OverlayText() {
  return (
    <div className="w-full h-[300px] flex justify-center items-center relative">
      <div className="flex flex-col items-center w-full absolute z-10 md:top-40 top-60">
        <h2 className="md:text-6xl text-5xl font-semibold text-white md:text-start text-center">iPhone 16 Pro</h2>
        <p className="text-lg font-normal text-white">Now available at our store</p>
        <section className="mt-10">
            <Button variant="default" className="mt-4">Shop Now</Button>
            <Button variant="link" className="mt-4">Contact Us</Button>
        </section>
      </div>
    </div>
  );
}

export default OverlayText;
