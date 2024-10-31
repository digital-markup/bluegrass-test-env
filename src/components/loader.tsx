"use client";

import React from "react";
import { RotatingLines } from "react-loader-spinner";

interface LoaderProps {
  text: string;
}

function Loader({ text }: LoaderProps) {
  return (
    <>
      <RotatingLines
        visible={true}
        width="20"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        strokeColor="white"
        strokeWidth="5"
      />
      {text}
    </>
  );
}

export default Loader;
