"use client";

import React from "react";
import ItemCard from "@/features/public/components/item-card";

function ProductsContainer() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-6">
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}

export default ProductsContainer;
