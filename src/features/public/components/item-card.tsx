/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ItemCardProps {
  id: string | undefined;
  feature_image: any;
  images: any;
  title: string;
  colors: string[];
}

function ItemCard({ id, images, feature_image, title, colors }: ItemCardProps) {
  const [imgList, setImgList] = React.useState({ small: "", large: "" });

  React.useEffect(() => {
    if (Array.isArray(feature_image)) {
      setImgList({
        small: feature_image[0].small,
        large: feature_image[0].large,
      });
    }
  }, [feature_image]);

  return (
    <div className="flex flex-col gap-y-3 border rounded-lg hover:shadow-lg transition-all md:px-3 md:py-0 mt-10">
      <div className="flex flex-col items-center gap-y-2">
        <figure className="text-center mb-3 md:w-[220px] p-3">
          <picture>
            <source media="(min-width: 768px)" srcSet={imgList.large} className="md:w-[180px]"/>
            <source media="(min-width: 360px)" srcSet={imgList.small} />
            <Image
              src={
                "https://i.ibb.co/TLWCC4P/iphone-card-40-iphone16hero-202409.jpg"
              }
              alt="apple"
              height={200}
              width={200}
              className="object-center md:w-[225px]"
              placeholder="blur"
              blurDataURL={
                "https://i.ibb.co/TLWCC4P/iphone-card-40-iphone16hero-202409.jpg"
              }
              decoding="async"
            />
          </picture>
        </figure>
        <h3 className="md:text-lg text-sm font-medium text-center">{title}</h3>
        <div className="flex gap-2 flex-wrap justify-center">
          <Badge className="w-4 h-4 p-0 bg-black" variant={"secondary"}></Badge>
          <Badge className="w-4 h-4 p-0 bg-black" variant={"secondary"}></Badge>
          <Badge className="w-4 h-4 p-0 bg-black" variant={"secondary"}></Badge>
          <Badge className="w-4 h-4 p-0 bg-black" variant={"secondary"}></Badge>
        </div>
        <div className="flex md:flex-row flex-col gap-x-2 items-center justify-center md:mt-6 md:pb-4">
          <Button className="hidden md:inline-flex">Quick View</Button>
          <Link href={`/single/${id}`} className="hidden md:inline-flex">
            <Button variant={"secondary"}>Browse</Button>
          </Link>
          <Link href={`/single/${id}`} className="md:hidden inline-flex py-2">
            <Button variant={"link"} size={"sm"}>Browse</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
