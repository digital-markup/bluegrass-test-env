/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import Header from "./header";
import { ItemContainer } from "@/features/products/components/item-container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductSlider from "@/features/products/components/products-slider";
import { productRoutes } from "@/shared/routes";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AccessoriesContainerProps {
  routes: string;
}

function AccessoriesContainer({ routes }: AccessoriesContainerProps) {
  const [tabs, setTabs] = React.useState<any[]>([]);

  const mount = React.useMemo(() => {
    const routerList = productRoutes.find((item) => item.key === routes);
    if (routerList) {
      setTabs(routerList.values);
    }
  }, [routes]);

  return (
    <div className="w-full h-full hidden md:block">
      <div className="container mx-auto p-4 md:p-8">
        <Header classNames="mb-6 2xl:pr-5 pt-10 flex-col gap-y-2 justify-start items-start">
          <h2 className="lg:text-4xl font-semibold">Accessories.</h2>
          <p>Other accessories are listed here</p>
        </Header>
        {/* Accessories go here */}
        <ItemContainer>
          <div className="my-10 hidden md:block">
            {tabs.length > 0 && (
              <Tabs
                key={tabs[0].key}
                defaultValue={tabs[0].key}
                className="w-full"
              >
                <TabsList className="w-full gap-x-4">
                  {tabs.map((item: any) => (
                    <TabsTrigger
                      key={item.key}
                      value={item.key}
                      className="data-[state=active]:bg-white text-black"
                    >
                      {item.value}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {tabs.map((item: any) => (
                  <TabsContent key={item.key} value={item.key}>
                    {/* <ProductSlider productType={item.key} /> */}
                  </TabsContent>
                ))}
              </Tabs>
            )}
          </div>
        </ItemContainer>
      </div>
    </div>
  );
}

function AccessoriesMobile({ routes }: AccessoriesContainerProps) {
  return (
    <div className="w-full h-full block md:hidden">
      <div className="container mx-auto p-4 md:p-8">
        <Header classNames="mb-6 2xl:pr-5 pt-10 flex-col gap-y-2 justify-start md:items-start items-center">
          <h2 className="lg:text-4xl font-semibold text-center md:text-start">
            Accessories.
          </h2>
          <p>Other accessories are listed here</p>
        </Header>
        {/* Accessories go here */}
        <ItemContainer>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="flex w-full justify-center items-center h-14">
                  <Button
                    variant={"secondary"}
                    className="rounded-sm bg-slate-100/45"
                  >
                    <Image
                      src={"/icons/subwooferx48.png"}
                      alt="subwoofer"
                      width={48}
                      height={48}
                      className="w-8 h-8"
                    />
                    Speakers
                  </Button>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex w-full justify-center items-center">
                  <Button
                    variant={"secondary"}
                    className="rounded-sm bg-slate-100/45 gap-x-2"
                  >
                    <Image
                      src={"/icons/earbudsx50.png"}
                      alt="keyboard"
                      width={48}
                      height={48}
                      className="w-8 h-8"
                    />
                    Earbuds
                  </Button>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex w-full justify-center items-center">
                  <Button
                    variant={"secondary"}
                    className="rounded-sm bg-slate-100/45"
                  >
                    Earphones
                  </Button>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex w-full justify-center items-center">
                  <Button
                    variant={"secondary"}
                    className="rounded-sm bg-slate-100/45"
                  >
                    <Image
                      src={"/icons/keyboardx50.png"}
                      alt="keyboard"
                      width={48}
                      height={48}
                      className="w-8 h-8"
                    />
                    Mouse & Keyboard
                  </Button>
                </div>
              </CarouselItem>
              <CarouselItem>
                <p>Megsafe</p>
              </CarouselItem>
              <CarouselItem>
                <p>Homepods</p>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ItemContainer>
      </div>
    </div>
  );
}
export { AccessoriesMobile };
export default AccessoriesContainer;
