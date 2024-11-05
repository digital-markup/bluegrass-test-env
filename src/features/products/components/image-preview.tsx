"use client";

import Image from "next/image";
import React from "react";

interface ImagePreviewProps {
  url: string;
}

function ImagePreview({ url }: ImagePreviewProps) {
  return (
    <div className="w-full h-full">
      <Image
        src={url}
        alt="Macbook mockup from Aceternity UI"
        height={1920}
        width={1080}
        className="w-[300px] h-[300px] object-contain"
      />
    </div>
  );
}

export default ImagePreview;
