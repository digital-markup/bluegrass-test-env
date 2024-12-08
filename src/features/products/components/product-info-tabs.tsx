import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import ReviewsPanel from "./reviews-panel";
import NotFound from "@/components/404-busy";

interface ProductInfoTabsProps {
  description: string;
  additionalInfo: Array<{ title: string; description: string[] }>;
}

function ProductInfoTabs({
  description,
  additionalInfo,
}: ProductInfoTabsProps) {
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
          <div className="flex flex-col gap-y-4 py-10 mb-8">
            <section className="mb-8">
              <p className="font-light">{description}</p>
            </section>
            <div className="w-full h-full flex flex-col gap-6 pt-8">
              {additionalInfo.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[1fr_4fr] w-full gap-x-0 px-8 items-start"
                >
                  <h2 className="font-bold text-xl">{item.title}</h2>
                  <ul className="flex flex-col gap-y-2">
                    {item.description.map((item, index) => (
                      <li key={index}>
                        <p className="text-slate-500">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
          <div className="w-full h-[500px] py-10">
            <NotFound />
          </div>
        </TabsContent>
        <TabsContent value="relatedProducts">
          <div className="w-full h-[500px] py-10">
            <NotFound />
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
export default ProductInfoTabs;
