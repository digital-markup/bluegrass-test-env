/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import React from "react";
import { ProductImage } from "../utils/interfaces/Iproduct";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface NewProductCardProps {
  feature_image: ProductImage[];
  title: string;
  colors: string[];
}

function NewProductCard({ feature_image, title, colors }: NewProductCardProps) {
  const [images] = feature_image;
  
  return (
    <div className="my-6 rounded-lg border hover:shadow-md transition-all">
      <div className="flex flex-col items-center gap-y-4 p-6">
        <figure className="text-center mb-3 md:w-[220px] p-3">
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={images.large}
              className="md:w-[180px]"
            />
            <source media="(min-width: 360px)" srcSet={images.small} />
            <Image
              src={images.large}
              alt="apple"
              height={200}
              width={200}
              className="object-center md:w-[225px]"
              placeholder="blur"
              blurDataURL={images.small}
              decoding="async"
            />
          </picture>
        </figure>
        <h3 className="md:text-lg text-sm font-medium text-center">
          {title}
        </h3>
        <div className="flex gap-2 flex-wrap justify-center">
          <Badge className="w-2 h-2 p-0 bg-black" variant={"secondary"}></Badge>
          <Badge className="w-2 h-2 p-0 bg-black" variant={"secondary"}></Badge>
          <Badge className="w-2 h-2 p-0 bg-black" variant={"secondary"}></Badge>
          <Badge className="w-2 h-2 p-0 bg-black" variant={"secondary"}></Badge>
        </div>
        <div className="flex justify-start">
          <Button variant={"secondary"}>Browse</Button>
        </div>
      </div>
    </div>
  );
}

export default NewProductCard;
