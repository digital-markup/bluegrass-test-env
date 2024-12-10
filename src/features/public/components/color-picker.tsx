/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import colorCodeFinder from "@/lib/colorsFinder";

interface ColorPickerProps {
  colors: string[];
}

function ColorPicker({ colors }: ColorPickerProps) {
  const [colorCode, setColorCode] = React.useState<string[]>([]);

  React.useEffect(() => {
    const updatedColors = colors.map((color) => {
      return colorCodeFinder(color);
    });
    setColorCode(updatedColors);

  }, [colors]);

  return (
    <div className="flex gap-2 flex-wrap justify-center">
      {colorCode.map((color, index) => (
        <Badge
          key={index}
          variant={"outline"}
          style={{ backgroundColor: color }}
          className="w-2 h-2 p-0 hover:border-slate-600 border"
        >
        </Badge>
      ))}
    </div>
  );
}

export default ColorPicker;
