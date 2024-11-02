"use client";

import React from "react";
import FileUpload from "@/components/file-upload";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";

function ProductMediaUpload() {
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log({
          file: file,
          readerResult: binaryStr,
        });
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    multiple: false,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "video/mp4": [],
    },
  });

  return (
    <div className="flex w-full gap-x-2 items-end justify-start">
      <section className="flex flex-col space-y-2 flex-grow">
        <label
          htmlFor="mainImage"
          className="text-sm text-slate-500 font-medium"
        >
          Primary Image
        </label>
        <div className="bg-blue-100 rounded-lg p-6">
          <FileUpload inputProps={getInputProps} rootProps={getRootProps} />
        </div>
      </section>
      <div className="w-[150px] justify-center flex">
        <Button variant={"secondary"}>Upload</Button>
      </div>
    </div>
  );
}

export default ProductMediaUpload;
