"use client";

import React from "react";

function ServicesContainer() {
  return (
    <div className="border-y border-slate-400 mt-10">
      <section className="py-8 w-full flex flex-col gap-y-4">
        <div>
          <h2 className="font-semibold text-lg">Our services</h2>
          <p className="text-sm text-slate-500">Customer always comes first for us.</p>
        </div>
        <div className="flex gap-x-3 justify-start items-center">
          <p>Free Shipping</p>
          <p>Pickup from the Store</p>
          <p>1 Year Warranty</p>
        </div>
      </section>
    </div>
  );
}

export default ServicesContainer;
