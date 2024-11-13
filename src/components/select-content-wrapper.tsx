/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { EntityType } from "@/features/products/utils/enum";
import handleEntityOperation from "@/features/products/actions/entityOperation.action";

interface SelectContentWrapperProps {
  placeholder: string;
  id: EntityType;
}

function SelectContentWrapper({ placeholder, id }: SelectContentWrapperProps) {
  const [data, setData] = React.useState<
    Array<{ id: string; name: string; slug: string }>
  >([]);

  React.useEffect(() => {
    const values = handleEntityOperation(id);
    values.then((data) => setData(data));
  }, [setData, id]);

  return (
    <>
      <SelectTrigger className="w-full" name={String(id).toLowerCase()}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data.map((item: (typeof data)[0]) => (
          <SelectItem key={item.id} value={item.slug}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </>
  );
}

export default SelectContentWrapper;
