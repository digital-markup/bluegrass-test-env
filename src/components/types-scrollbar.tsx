/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import getCategoryValuesByName from "@/lib/getCategoryValuesByName";
import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
interface TypeScrollBarProps {
  params: string;
}

function TypeScrollBar({ params }: TypeScrollBarProps) {
  const [routes, setRoutes] = React.useState<any>([]);
  const [brand, setBrand] = useQueryState("brand");

  React.useEffect(() => {
    if (typeof params !== "undefined") {
      getCategoryValuesByName(params).then((values) => setRoutes(values));
    }
  }, [params]);

  const onFetch = (slug: string) => {
    setBrand(slug);
  };

  return (
    <>
      {routes.length > 0 && (
        <div className="w-full min-h-32 bg-slate-100/60 md:px-8 lg:px-40 py-0 flex justify-center md:justify-center items-center">
          <Carousel className="w-full">
            <CarouselContent className={cn(routes.length < 3 ? "justify-center" : "-ml-2")}>
              {routes.map(
                (route: {
                  id: React.Key | null | undefined;
                  slug: string;
                  logo: string;
                  name: string;
                }) => (
                  <CarouselItem
                    key={route.id}
                    className="basis-1/2 md:basis-1/5 md:pl-1"
                  >
                    <figure
                      className="flex flex-col gap-y-2 justify-center items-center cursor-pointer"
                      onClick={() => onFetch(route.slug)}
                    >
                      <Image
                        src={route.logo}
                        alt={route.slug}
                        width={40}
                        height={40}
                        className="object-cover h-[40px] w-[40px] rounded-full"
                      />
                      <figcaption className="text-xs">{route.name}</figcaption>
                    </figure>
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </>
  );
}

export default TypeScrollBar;
