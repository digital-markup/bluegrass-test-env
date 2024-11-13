"use client";

import React from "react";
import { MultiSelect } from "@/components/ui/multi-select";
import { useColorStore } from "../zustand/useMultiInfoStore";

const colors = [
  { name: "red", slug: "Red" },
  { name: "green", slug: "Green" },
  { name: "blue", slug: "Blue" },
  { name: "yellow", slug: "Yellow" },
  { name: "black", slug: "Black" },
  { name: "white", slug: "White" },
];

function SelectMultipleColors() {
  const { selectedColors, setSelectedColors } = useColorStore();
  return (
    <div className="max-w-xl">
      <MultiSelect
        options={colors}
        onValueChange={setSelectedColors}
        defaultValue={selectedColors}
        placeholder="Select Colors"
        variant="secondary"
        maxCount={3}
      />
    </div>
  );
}

export default SelectMultipleColors;
