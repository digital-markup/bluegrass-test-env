"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { otherBrands } from "@/shared/routes";
import React from "react";

interface ProductTypeSliderProps {
  setBrand: (brand: string) => void;
}

function ProductTypeSlider({ setBrand }: ProductTypeSliderProps) {
  return (
    <div className="relative">
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-6 p-4">
          {otherBrands.map((brands) => (
            <Button
              key={brands.id}
              className="flex items-center space-x-2 p-6 font-medium text-blue-500 bg-blue-100 hover:text-white"
              onClick={() => setBrand(brands.slug)}
            >
              <span>{brands.name}</span>
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default ProductTypeSlider;
