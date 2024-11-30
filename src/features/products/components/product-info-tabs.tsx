import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import ReviewsPanel from "./reviews-panel";

interface ProductInfoTabsProps {
  description: string;
}

function ProductInfoTabs({ description }: ProductInfoTabsProps) {
  return (
    <>
      <Tabs defaultValue="additionalInfo" className="w-full hidden md:block">
        <TabsList className="flex flex-row justify-evenly">
          <TabsTrigger value="additionalInfo">
            Additional Information
          </TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="compare">Compare</TabsTrigger>
          <TabsTrigger value="relatedProducts">Related Products</TabsTrigger>
        </TabsList>
        <TabsContent value="additionalInfo">
          <div className="flex flex-col gap-y-4 py-10">
            <section className="mb-8">
              <p className="font-light">{description}</p>
            </section>
            <div className="w-full h-full flex flex-col gap-6">
              <div className="flex gap-x-4 px-8 items-start">
                <h2 className="font-bold text-xl">Network</h2>
                <p className="text-slate-500">
                  for 2G GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2 (dual-SIM)
                </p>
                <p className="text-slate-500">
                  for 3G HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100
                </p>
                <p className="text-slate-500">
                  for 4G 1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26,
                  28, 30, 32, 34, 38, 39, 40, 41, 42, 48, 53, 66 - A3293
                </p>
              </div>
              <div className="flex gap-x-4 px-8">
                <h2 className="font-bold text-xl">Display</h2>
                <p className="text-slate-500">
                  LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000
                  nits (typ), 2000 nits (HBM)
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="flex flex-col gap-y-6 py-10">
            <ReviewsPanel />
            <ReviewsPanel />
            <ReviewsPanel />
          </div>
        </TabsContent>
        <TabsContent value="compare">
          <div className="w-full h-[300px] py-10">
            <p>Our servers are busy at the moment. Please try again later.</p>
          </div>
        </TabsContent>
        <TabsContent value="relatedProducts">
          <div className="w-full h-[300px] py-10">
            <p>Our servers are busy at the moment. Please try again later.</p>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
export default ProductInfoTabs;
