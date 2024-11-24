import { Button } from "@/components/ui/button";
import React from "react";

interface ProductColorPickerProps {
  colors: string[];
}

function ProductColorPicker({ colors }: ProductColorPickerProps) {
  const [selectedColor, setSelectedColor] =
    React.useState<string>("No color selected");

  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-base font-semibold capitalize">
        colors: {selectedColor}
      </h2>
      <div className="flex gap-x-4 justify-start items-center my-4">
        <Button
          type="button"
          variant={"outline"}
          className="w-8 h-8 p-1 bg-sky-500 hover:bg-blue-400"
          
        ></Button>
        <Button
          type="button"
          variant={"outline"}
          className="w-8 h-8 p-1 bg-pink-600 hover:bg-pink-400"
        ></Button>
        <Button
          type="button"
          variant={"outline"}
          className="w-8 h-8 p-1 bg-slate-600 hover:bg-slate-400"
        ></Button>
      </div>
    </div>
  );
}

export default ProductColorPicker;
