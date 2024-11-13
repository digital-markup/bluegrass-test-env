"use client";

import React from "react";
import { MultiSelect } from "@/components/ui/multi-select";

const frameworksList = [
  { value: "red", label: "Red" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" },
  { value: "blue", label: "Blue" },
  { value: "indigo", label: "Indigo" },
  { value: "purple", label: "Purple" },
  { value: "pink", label: "Pink" },
];

function SelectMultipleColors() {
  const [selectedFrameworks, setSelectedFrameworks] = React.useState<string[]>([
    "red",
    "yellow",
  ]);
  return (
    <div className="max-w-xl">
      <MultiSelect
        options={frameworksList}
        onValueChange={setSelectedFrameworks}
        defaultValue={selectedFrameworks}
        placeholder="Select Colors"
        variant="secondary"
        maxCount={3}
        name="colors"
      />
      {/* <div className="mt-4">
        <h2 className="text-xl font-semibold">Selected Frameworks:</h2>
        <ul className="list-disc list-inside">
          {selectedFrameworks.map((framework) => (
            <li key={framework}>{framework}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default SelectMultipleColors;
