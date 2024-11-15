"use client";

import Image from "next/image";
import React from "react";

function MainProductDetails() {
  return (
    <div className="flex flex-col gap-y-12 w-full pl-3">
      <section className="flex flex-col gap-y-4">
        <p className="text-lg font-semibold">Title</p>
        <span className="flex w-full items-center gap-x-6">
          <Image src={"/img/display-icon.jpeg"} alt="ioc-images" width={70} height={70} className="object-cover w-[35px]" />
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            officia
          </p>
        </span>
      </section>
      <section className="flex flex-col gap-y-4">
        <p className="text-lg font-semibold">Title</p>
        <span className="flex w-full items-center gap-x-6">
          <Image src={"/img/display-icon.jpeg"} alt="ioc-images" width={70} height={70} className="object-cover w-[35px]" />
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            officia
          </p>
        </span>
      </section>
      <section className="flex flex-col gap-y-4">
        <p className="text-lg font-medium">Title</p>
        <span className="flex w-full items-center gap-x-6">
          <Image src={"/img/battery-icon.jpeg"} alt="ioc-images" width={70} height={70} className="object-cover w-[35px]" />
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            officia
          </p>
        </span>
      </section>
      <section className="flex flex-col gap-y-4">
        <p className="text-lg font-semibold">Title</p>
        <span className="flex w-full items-center gap-x-6">
          <h2 className="font-semibold text-2xl">128GB</h2>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            officia
          </p>
        </span>
      </section>
      <section className="flex flex-col gap-y-4">
        <p className="text-lg font-semibold">Title</p>
        <span className="flex w-full items-center gap-x-4">
          <Image src={"/img/camera-icon.jpeg"} alt="ioc-images" width={70} height={70} className="object-cover w-[35px]" />
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            officia
          </p>
        </span>
      </section>
      <section className="flex flex-col gap-y-4">
        <p className="text-lg font-semibold">Title</p>
        <span className="flex w-full items-center gap-x-4">
          <Image src={"/img/ram-icon.png"} alt="ioc-images" width={70} height={70} className="object-cover w-[35px]" />
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            officia
          </p>
        </span>
      </section>
    </div>
  );
}

export default MainProductDetails;
