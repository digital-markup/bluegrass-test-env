"use client";

import React from "react";
import FileUpload from "@/components/file-upload";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import uploadFile from "../services/uploadProcess";

function ProductMediaUpload() {
  // image upload state
  const [imageBuffer, setImageBuffer] = React.useState<string | null>(null);

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    // foreach the accepted files
    acceptedFiles.forEach((file) => {
      // create a reader
      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;
        // Remove the data URL prefix to get just the base64 data
        const base64Data = result.split(",")[1];
        setImageBuffer(base64Data);
      };

      // read the file as base64
      reader.readAsDataURL(file);
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

  const onUploadFileHandler = () => {
    if (imageBuffer) {
      const upload = uploadFile(imageBuffer);
      upload.then((result) => {
        console.log(result);
      });
    }
  };

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
        <Button
          type="button"
          variant={"secondary"}
          disabled={!imageBuffer}
          onClick={onUploadFileHandler}
        >
          Upload
        </Button>
      </div>
    </div>
  );
}

export default ProductMediaUpload;
