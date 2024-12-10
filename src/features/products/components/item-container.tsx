/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import ProductSlider from "./products-slider";
import { BrandType } from "../utils/enum";
import { productRoutes } from "@/shared/routes";
import MobileProductSlider from "./mobile-product-slider";
import OtherBrandCarousel from "./other-brands-carousel";

interface BaseContainerProps {
  children: React.ReactNode | React.ReactNode[];
}

interface ContainerNavbarProps {
  routes: any;
}

function ItemContainer({ children }: BaseContainerProps) {
  return (
    <div className="py-6 px-0 w-full h-full flex flex-col">{children}</div>
  );
}

function ContainerHeader({ children }: BaseContainerProps) {
  return (
    <div className="w-full h-full flex flex-col gap-y-2 items-center">
      {children}
    </div>
  );
}

function ContainerContent({ children }: BaseContainerProps) {
  return <div className="w-full h-full">{children}</div>;
}

function ProductContainer({ routes }: ContainerNavbarProps) {
  const [tabs, setTabs] = React.useState<any[]>([]);

  const mount = React.useMemo(() => {
    switch (routes) {
      case BrandType.APPLE:
        setTabs(productRoutes[0].values);
        break;
      case BrandType.SAMSUNG:
        setTabs(productRoutes[1].values);
        break;
    }
  }, [routes]);
  return (
    <div className="my-10 flex flex-col">
      <div className="hidden md:block">
        {tabs.length > 0 && (
          <Tabs key={tabs[0].key} defaultValue={tabs[0].key} className="w-full">
            <TabsList className="w-full">
              {tabs.map((item: any) => (
                <TabsTrigger key={item.key} value={item.key}>
                  {item.value}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((item: any) => (
              <TabsContent key={item.key} value={item.key}>
                <ProductSlider productType={item.key} />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </div>
      <div className="md:hidden">
        <MobileProductSlider props={tabs} />
      </div>
    </div>
  );
}

// Other Brands Container

function OtherBrandsContainer() {
  const [tabs, setTabs] = React.useState<any[]>([]);
  const [key, setKey] = React.useState<any>("huawei");

  React.useEffect(() => {
    // get the other bands from publicRoutes
    setTabs(productRoutes[3].values);
  }, []);

  const onTabChange = (key: any) => {
    setKey(key);
  };
  return (
    <div className="my-10 flex flex-col">
      <div className="hidden md:block">
        <Tabs
          defaultValue="huawei"
          className="w-full"
          onValueChange={onTabChange}
        >
          <TabsList className="w-full">
            <TabsTrigger value="huawei">Huawei</TabsTrigger>
            <TabsTrigger value="xiaomi">Xiaomi</TabsTrigger>
            <TabsTrigger value="zte">ZTE</TabsTrigger>
            <TabsTrigger value="oppo">Oppo</TabsTrigger>
            <TabsTrigger value="nokia">Nokia</TabsTrigger>
            <TabsTrigger value="tcl">TCL</TabsTrigger>
          </TabsList>
          <TabsContent value="huawei">
            <OtherBrandCarousel props={key} />
          </TabsContent>
          <TabsContent value="xiaomi">
            <OtherBrandCarousel props={key} />
          </TabsContent>
          <TabsContent value="zte">
            <OtherBrandCarousel props={key} />
          </TabsContent>
          <TabsContent value="oppo">
            <OtherBrandCarousel props={key} />
          </TabsContent>
          <TabsContent value="nokia">
            <OtherBrandCarousel props={key} />
          </TabsContent>
          <TabsContent value="tcl">
            <OtherBrandCarousel props={key} />
          </TabsContent>
        </Tabs>
      </div>
      <div className="md:hidden">
        <MobileProductSlider.Child props={tabs} />
      </div>
    </div>
  );
}

export {
  ItemContainer,
  ContainerHeader,
  ContainerContent,
  ProductContainer,
  OtherBrandsContainer,
};
