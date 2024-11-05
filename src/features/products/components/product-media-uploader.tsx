/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import FileUpload from "@/components/file-upload";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import uploadFile from "../services/uploadProcess";
import { getS3ObjectService } from "@/services/s3BucketService";
import Loader from "@/components/loader";
import FileBuffer from "@/components/file-buffer";
function ProductMediaUpload() {
  // image upload state
  const [imageBuffer, setImageBuffer] = React.useState<string | null>(null);
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

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
    setIsLoading(true);
    if (imageBuffer) {
      const upload = uploadFile(imageBuffer);
      upload.then((result) => {
        if (result?.status === 200) {
          // if result is fine then pass it into folloing function
          const url = getS3ObjectService(result.key);
          url.then((res) => {
            if (res) {
              setImageUrl(res.url);
              setIsLoading(false);
            }
          });
        }
      });
    }
  };

  return (
    <div className="w-full border rounded-lg flex flex-col gap-y-3 py-6 px-4">
      <div className="bg-white border border-slate-400/50 border-dashed rounded-lg p-6">
        <FileUpload inputProps={getInputProps} rootProps={getRootProps} />
      </div>
      <div className="flex flex-col gap-y-3 my-4">
        <FileBuffer />
      </div>
      <div className="flex items-center justify-between">
        <p className="text-slate-500 text-sm">Add one or upto 4 images</p>
        <Button
          className="w-[200px]"
          type="button"
          size={"default"}
          variant={"secondary"}
          disabled={!imageBuffer || isLoading}
          onClick={onUploadFileHandler}
        >
          {isLoading ? <Loader text="Uploading" color="#1e293b" /> : "Upload"}
        </Button>
      </div>
    </div>
  );
}

export default ProductMediaUpload;
