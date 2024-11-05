"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";

function FileBuffer() {
  return (
    <div className="px-4 py-2 w-full rounded-lg border border-blue-200 flex items-center justify-between bg-blue-50">
      <section className="flex gap-x-3 items-center">
        <Image src="/img/icon.png" alt="File" width={45} height={45} />
        <div>
          <p className="text-sm font-medium">Image title</p>
          <p className="text-xs text-slate-600">size in bytes</p>
        </div>
      </section>
      <span>
        <Button type="button" size={"icon"} variant={"ghost"}>
          <Trash size={20} color="#ef4444" />
        </Button>
      </span>
    </div>
  );
}

export default FileBuffer;
