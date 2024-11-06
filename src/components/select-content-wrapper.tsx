"use server";
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

async function SelectContentWrapper({
  placeholder,
  id,
}: SelectContentWrapperProps) {
  const data = await handleEntityOperation(id);

  return (
    <>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data.map((item) => (
          <SelectItem key={item.id} value={item.slug}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </>
  );
}

export default SelectContentWrapper;
