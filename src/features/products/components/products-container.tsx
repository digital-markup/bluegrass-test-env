"use client";

import React from "react";
import ItemCard from "@/features/public/components/item-card";
import PagesNavigator from "@/components/pages-navigator";

function ProductsContainer() {
  return (
    <div className="w-full flex flex-col gap-y-10 md:mt-14 px-10">
      <PagesNavigator />
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 px-6">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}

export default ProductsContainer;
