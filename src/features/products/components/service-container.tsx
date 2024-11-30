"use client";

import React from "react";
import { Package, ShieldCheck, Truck } from "lucide-react";

function ServicesContainer() {
  return (
    <section className="flex justify-center md:gap-12 gap-x-6 items-center border-b border-slate-400/50 md:mx-12 mx-4 py-6">
      {/* Services section */}
      <span className="flex flex-col gap-y-2">
        <Truck className="w-6 h-6 text-slate-500" strokeWidth={1} />
        <p className="font-medium">Free delivery</p>
        <small className="text-slate-500 text-xs">Free shipping on all orders</small>
      </span>
      <span className="flex flex-col gap-y-2">
        <Package className="w-6 h-6 text-slate-500" strokeWidth={1} />
        <p className="font-medium">Safe Packaging</p>
        <small className="text-slate-500 text-xs">Package safety is the first priority for us</small>
      </span>
      <span className="flex flex-col gap-y-2">
        <ShieldCheck className="w-6 h-6 text-slate-500" strokeWidth={1} />
        <p className="font-medium">Shop warranty</p>
        <small className="text-slate-500 text-xs">Shop or order company warranties</small>
      </span>
    </section>
  );
}

export default ServicesContainer;
