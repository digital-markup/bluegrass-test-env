import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function UnCategorizedSection() {
  return (
    <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      <section className="w-full relative">
        <Image
          src={"/img/playstation-5.png"}
          alt="hero"
          width={1200}
          height={900}
          className="object-cover h-[650px] rounded-lg"
        />
        <div className="flex flex-col gap-y-4 absolute top-12 left-8">
          <h2 className="lg:text-2xl text-xl font-semibold">
            Playstation 5 Pro
          </h2>
          <p className="font-light w-[300px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            similique iusto a quos illo esse.
          </p>
          <div className="mt-4">
            <Button variant={"secondary"} className="bg-white text-black">
              Quick Look
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-y-4">
        <div className="w-full relative">
          <Image
            src={"/img/vr-quest.png"}
            alt="hero"
            width={1550}
            height={620}
            className="object-cover h-[350px] rounded-lg"
          />
        </div>
        <div className="flex flex-row gap-x-5 w-full h-full">
          <div className="w-full h-full relative">
            <Image
              src={"/img/meta-quest.png"}
              alt="hero"
              width={1000}
              height={720}
              className="object-cover h-full rounded-lg"
            />
          </div>
          <div className="w-full h-full relative">
          <Image
              src={"/img/jbl-3.png"}
              alt="hero"
              width={1000}
              height={720}
              className="object-cover h-full rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default UnCategorizedSection;
