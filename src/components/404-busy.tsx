"use client";

import React from "react";
import Image from "next/image";

function NotFound() {
  return (
    <section className="flex flex-col items-center h-full gap-y-4">
      <Image src="/report.svg" alt="report" width={200} height={200} />
      <p className="text-xl text-red-500 bg-red-50 p-2 rounded-full">
        Our servers are busy at the moment. Please try again later.
      </p>
    </section>
  );
}

export default NotFound;
