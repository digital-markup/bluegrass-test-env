"use client";

import Image from "next/image";
import React from "react";

interface ImagePreviewProps {
  url: string;
}

function ImagePreview({ url }: ImagePreviewProps) {
  return (
    <div className="w-full h-full p-4">
      <header className="border-b border-slate-300 pb-3">
        <h3 className="text-sm font-medium">Preview</h3>
      </header>
      <div className="flex gap-3 pt-6 w-full">
        <span className="rounded-lg">
          <Image
            src={url}
            alt="Macbook mockup from Aceternity UI"
            height={1920}
            width={1080}
            className="w-[200px] h-[200px] object-cover"
          />
        </span>
      </div>
    </div>
  );
}

export default ImagePreview;
