/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ItemCardProps {
  id: string | undefined;
  images: any;
  title: string;
  description?: string;
}

function ItemCard({ id, images, title, description }: ItemCardProps) {
  console.log({
    id,
    images,
    title,
    description,
  });

  return (
    <div className="flex flex-col gap-y-3 border rounded-lg hover:shadow-lg transition-all px-6 py-9">
      <div className="flex flex-col gap-y-2">
        <figure className="text-center mb-3">
          <Image
            src={
              images[0]
                ? images[0].url
                : "https://i.ibb.co/TLWCC4P/iphone-card-40-iphone16hero-202409.jpg"
            }
            alt="apple"
            height={200}
            width={200}
            className="object-center w-[320px]"
            placeholder="blur"
            blurDataURL={
              "https://i.ibb.co/TLWCC4P/iphone-card-40-iphone16hero-202409.jpg"
            }
            decoding="async"
          />
        </figure>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-slate-400 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          molestias sint nostrum quas quasi, delectus tenetur a beatae, minima
          non!
        </p>
        <span className="flex gap-x-2 items-center mt-3">
          <Button>Quick View</Button>
          <Link href={`/single/${id}`}>
            <Button variant={"secondary"}>Browse</Button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default ItemCard;
