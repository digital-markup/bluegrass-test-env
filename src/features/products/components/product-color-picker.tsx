/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button";
import colorCodeFinder from "@/lib/colorsFinder";
import React from "react";
import { set } from "zod";

interface ProductColorPickerProps {
  colors: string[];
}

function ProductColorPicker({ colors }: ProductColorPickerProps) {
  const [selectedColor, setSelectedColor] =
    React.useState<string>("No color selected");
  const [colorCode, setColorCode] = React.useState<string[]>([]);

  React.useEffect(() => {
    const updatedColors = colors.map((color) => {
      return colorCodeFinder(color);
    });
    setColorCode(updatedColors);
  }, [colors]);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-lg font-semibold capitalize">
        colors: {selectedColor}
      </h2>
      <div className="flex gap-x-4 justify-start items-center my-2">
        {colorCode.map((color, index) => (
          <Button
            key={index}
            type="button"
            variant={"outline"}
            style={{ backgroundColor: color }}
            className="`w-8 h-8 p-4 hover:border-slate-600 border-2"
            onClick={() => handleColorSelect(colors[index])}
          ></Button>
        ))}
      </div>
    </div>
  );
}

export default ProductColorPicker;
