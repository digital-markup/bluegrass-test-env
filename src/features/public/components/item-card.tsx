"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function ItemCard() {
  return (
    <div className="flex flex-col gap-y-3 border rounded-lg hover:shadow-lg transition-all px-6 py-9">
      <div className="flex flex-col gap-y-2">
        <figure className="text-center mb-3">
          <Image
            src={"/img/iphone-16.jpeg"}
            alt="apple"
            height={200}
            width={200}
            className="object-center w-[320px]"
          />
        </figure>
        <h3 className="text-lg font-medium">Product Name</h3>
        <p className="text-slate-400 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          molestias sint nostrum quas quasi, delectus tenetur a beatae, minima
          non!
        </p>
        <span className="flex gap-x-2 items-center mt-3">
          <Button>Quick View</Button>
          <Button variant={"secondary"}>Browse</Button>
        </span>
      </div>
    </div>
  );
}

export default ItemCard;
