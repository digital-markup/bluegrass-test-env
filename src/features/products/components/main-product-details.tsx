"use client";

import Image from "next/image";
import React from "react";
import ProductColorPicker from "./product-color-picker";

interface MainProductDetailsProps {
  displayInfo: string;
  storage: string;
  camera: string;
  battery: string;
  colors: string[];
  ramInformation: string;
}

function MainProductDetails({
  displayInfo,
  storage,
  camera,
  battery,
  colors,
  ramInformation,
}: MainProductDetailsProps) {
  return (
    <div className="flex flex-col gap-y-12 w-full pl-3">
      <section className="flex flex-col gap-y-4">
        <p className="text-lg font-semibold">Display</p>
        <span className="flex w-full items-center gap-x-6">
          <Image
            src={"/img/display-icon.jpeg"}
            alt="ioc-images"
            width={70}
            height={70}
            className="object-cover w-[35px]"
          />
          <p className="text-slate-400">{displayInfo}</p>
        </span>
      </section>
      <section className="flex flex-col gap-y-4">
        <ProductColorPicker colors={colors} />
      </section>
      <section className="flex flex-col gap-y-4">
        <p className="text-lg font-medium">Battery</p>
        <span className="flex w-full items-center gap-x-6">
          <Image
            src={"/img/battery-icon.jpeg"}
            alt="ioc-images"
            width={70}
            height={70}
            className="object-cover w-[35px]"
          />
          <p className="text-slate-400">{battery}</p>
        </span>
      </section>
      <section className="flex flex-col gap-y-4">
        <p className="text-lg font-semibold">Memory</p>
        <span className="flex w-full items-center gap-x-6">
          <h2 className="font-semibold text-2xl">{storage}</h2>
          <p className="text-slate-400">
            You can choose between 128GB and 256GB in storage
          </p>
        </span>
      </section>
      <section className="flex flex-col gap-y-4">
        <p className="text-lg font-semibold">Camera</p>
        <span className="flex w-full items-center gap-x-4">
          <Image
            src={"/img/camera-icon.jpeg"}
            alt="ioc-images"
            width={70}
            height={70}
            className="object-cover w-[35px]"
          />
          <p className="text-slate-400">{camera}</p>
        </span>
      </section>
      <section className="flex flex-col gap-y-4">
        <p className="text-lg font-semibold">Hardware</p>
        <span className="flex w-full items-center gap-x-4">
          <Image
            src={"/img/ram-icon.png"}
            alt="ioc-images"
            width={70}
            height={70}
            className="object-cover w-[35px]"
          />
          <p className="text-slate-400">
            upto {ramInformation} of speed in RAM
          </p>
        </span>
      </section>
    </div>
  );
}

export default MainProductDetails;
