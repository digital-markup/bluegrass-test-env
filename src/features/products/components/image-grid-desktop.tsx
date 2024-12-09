"use client";
import Image from "next/image";
import React from "react";

const images = [
  {
    src: "/img/customers/customers.png",
    width: 697,
    height: 870,
    className: "col-span-1 row-span-2",
  },
  {
    src: "/img/customers/customers_2.png",
    width: 500,
    height: 300,
    className: "col-span-1 row-span-2",
  },
  {
    src: "/img/customers/customers_3.png",
    width: 300,
    height: 400,
    className: "col-span-2 row-span-2",
  },
  {
    src: "/img/customers/customers_4.png",
    width: 600,
    height: 400,
    className: "col-span-2 row-span-2",
  },
  {
    src: "/img/customers/customers_5.png",
    width: 400,
    height: 300,
    className: "col-span-1 row-span-2",
  },
  {
    src: "/img/customers/customers_6.jpg",
    width: 400,
    height: 300,
    className: "col-span-1 row-span-2",
  },
];

function ImageGridDesktop() {
  return (
    <section className="container mx-auto px-4 py-16 hidden md:block">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg ${image.className}`}
          >
            <Image
              src={image.src}
              alt={`Story image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImageGridDesktop;
