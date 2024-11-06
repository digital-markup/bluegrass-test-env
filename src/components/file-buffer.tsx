"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Trash } from "lucide-react";
import { useImageStore } from "@/features/products/zustand/useMediaStore";
import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FileBufferProps {
  title: string;
  size: number;
}

function FileBuffer({ size, title }: FileBufferProps) {
  const { imgUrl } = useImageStore();
  // size in bytes
  const sizeInBytes = (size / 1000).toFixed(2);
  return (
    <div className="px-4 py-2 w-full rounded-lg border border-blue-200 flex items-center justify-between bg-blue-50">
      <section className="flex gap-x-3 items-center">
        <Image src="/img/icon.png" alt="File" width={45} height={45} />
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-slate-600">{sizeInBytes} KB</p>
        </div>
      </section>
      <span>
        {imgUrl ? (
          <CheckCircledIcon className="w-6 h-6 text-green-500" />
        ) : (
          <Button type="button" size={"icon"} variant={"ghost"}>
            <Trash size={20} color="#ef4444" />
          </Button>
        )}
      </span>
    </div>
  );
}

export default FileBuffer;
