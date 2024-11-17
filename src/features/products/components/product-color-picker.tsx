import { Button } from "@/components/ui/button";
import React from "react";

function ProductColorPicker() {
  return (
    <div className="flex flex-col gap-y-2">
      <h2 className="text-base font-semibold capitalize">
        colors: selected color
      </h2>
      <div className="flex gap-x-4 justify-start items-center my-8">
        <Button
          type="button"
          variant={"outline"}
          className="w-10 h-10 p-1 bg-sky-500 hover:bg-blue-400"
        ></Button>
        <Button
          type="button"
          variant={"outline"}
          className="w-10 h-10 p-1 bg-pink-600 hover:bg-pink-400"
        ></Button>
        <Button
          type="button"
          variant={"outline"}
          className="w-10 h-10 p-1 bg-slate-600 hover:bg-slate-400"
        ></Button>
      </div>
    </div>
  );
}

export default ProductColorPicker;
