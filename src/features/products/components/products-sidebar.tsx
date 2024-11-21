"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { cn } from "@/lib/utils";
import ProductNavItem from "./product-nav-item";
import { useQueryState } from "nuqs";
import { ProductRoute, useRouterStore } from "../zustand/useRouterStore";
import { useRouter, useSearchParams } from "next/navigation";

function ProductsSidebar() {
  const { routes, setActiveRoute } = useRouterStore();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [queryParam, setQueryParam] = useQueryState("category");
  const router = useRouter();
  const searchParams = useSearchParams();

  // get the URL route and set the active route
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const memo = React.useMemo(() => {
    // if the search params size is less than 1 then set the active route to the first route
    if (searchParams.size < 1) {
      setActiveRoute("/all");
      setQueryParam("all");
    }
  }, [setActiveRoute, setQueryParam, searchParams.size]);

  const handleRouteOnClick = (route: ProductRoute) => {
    console.log(route);
    setActiveRoute(route.path);

    const getCategoryFromPath = route.path.split("/")[1];
    setQueryParam(getCategoryFromPath);
    router.push(route.path);
  };
  return (
    <div className="mt-12 p-6 w-full h-full">
      {routes.map((route) => (
        <Accordion
          key={route.key}
          type="single"
          value={route.isActive ? route.key : route.path}
          collapsible
        >
          <AccordionItem value={route.key} className={"border-none"}>
            <AccordionTrigger
              className={cn(
                route.isActive &&
                  "bg-blue-200 px-4 rounded-lg outline-none text-blue-600",
                "my-2"
              )}
              onClick={() => handleRouteOnClick(route)}
            >
              {route.label}
            </AccordionTrigger>
            {route.multiple && (
              <AccordionContent>
                <ProductNavItem items={route.children!} />
              </AccordionContent>
            )}
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
}

export default ProductsSidebar;
