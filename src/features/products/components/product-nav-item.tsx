"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useQueryState } from "nuqs";
import React from "react";

interface ProductNavItemProps {
  items: Array<{ path: string; label: string }>;
}

function ProductNavItem({ items }: ProductNavItemProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [queryParam, setQueryParam] = useQueryState("brand");

  const handleOnNavigate = (path: string) => {
    setQueryParam(path);
  };
  return (
    <div className="pl-8 pr-4 py-2 flex flex-start">
      <ToggleGroup type="single" className="flex flex-col" value={queryParam!}>
        {items.map(({ path, label }) => (
          <ToggleGroupItem
            key={path}
            value={path}
            className="w-full flex justify-start hover:bg-transparent hover:text-slate-600"
            onClick={() => handleOnNavigate(path)}
          >
            {label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}

export default ProductNavItem;
