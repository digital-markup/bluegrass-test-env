"use client";

import React from "react";
import { Package, ShieldCheck, Truck } from "lucide-react";

function ServicesContainer() {
  return (
    <section className="flex justify-center gap-12 items-center border-b border-slate-400/50 mx-12 py-6">
      {/* Services section */}
      <span className="flex flex-col gap-y-1">
        <Truck className="w-6 h-6 text-slate-500" strokeWidth={1} />
        <p>Free delivery</p>
        <small>little description</small>
      </span>
      <span className="flex flex-col gap-y-1">
        <Package className="w-6 h-6 text-slate-500" strokeWidth={1} />
        <p>Safe Packaging</p>
        <small>little description</small>
      </span>
      <span className="flex flex-col gap-y-1">
        <ShieldCheck className="w-6 h-6 text-slate-500" strokeWidth={1} />
        <p>Shop warranty</p>
        <small>little description</small>
      </span>
    </section>
  );
}

export default ServicesContainer;
