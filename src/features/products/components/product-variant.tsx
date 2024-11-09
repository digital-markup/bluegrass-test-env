"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

function ProductVariant() {
  return (
    <div className="w-full h-20 bg-slate-300 rounded-md">
      <div className="flex justify-between items-center px-6 py-3">
        <span className="flex flex-row gap-x-6 items-center justify-start">
          <Image
            src="/logo.svg"
            alt="logo"
            width={32}
            height={32}
            className="h-6 w-6"
          />
          <Input
            type="text"
            id="title"
            name="variant-title"
            placeholder="Product Variant"
          />
        </span>
        <Button variant={"ghost"} className="text-red-500" size={"icon"}>
          <X className="text-red-500" size={20} />
        </Button>
      </div>
    </div>
  );
}

export default ProductVariant;
