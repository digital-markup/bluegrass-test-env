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
import { MultiSelect } from "./ui/multi-select";
import { useTagsStore } from "@/features/products/zustand/useMultiInfoStore";

interface SelectContentWrapperProps {
  placeholder: string;
  id: EntityType;
}

function SelectContentWrapper({ placeholder, id }: SelectContentWrapperProps) {
  const [data, setData] = React.useState<Array<{ name: string; slug: string }>>(
    []
  );

  React.useEffect(() => {
    const values = handleEntityOperation(id);
    values.then((data) => setData(data));
  }, [setData, id]);

  return (
    <>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {data.map((item: (typeof data)[0], idx) => (
          <SelectItem key={idx} value={item.slug}>
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
      {/* <div className="max-w-xl">
        <MultiSelect
          options={data}
          onValueChange={setSelectedColors}
          defaultValue={selectedColors}
          placeholder="Select Colors"
          variant="secondary"
          maxCount={3}
        />
      </div> */}
    </>
  );
}

SelectContentWrapper.Child = function SelectContentWrapperChild({
  placeholder,
  id,
}: SelectContentWrapperProps) {
  const [data, setData] = React.useState<Array<{ name: string; slug: string }>>(
    []
  );

  // store
  const { selectedTags, setSelectedTags } = useTagsStore();

  React.useEffect(() => {
    const values = handleEntityOperation(id);
    values.then((data) => setData(data));
  }, [setData, id]);

  return (
    <MultiSelect
      options={data}
      onValueChange={setSelectedTags}
      defaultValue={selectedTags}
      placeholder="Select Tags"
      variant="secondary"
      maxCount={3}
    />
  );
};

export default SelectContentWrapper;
