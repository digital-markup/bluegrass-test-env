"use client";
import React from "react";
import { DropzoneInputProps, DropzoneRootProps } from "react-dropzone";

interface FileUploadProps {
  rootProps: () => DropzoneRootProps;
  inputProps: () => DropzoneInputProps;
}

function FileUpload({ inputProps, rootProps }: FileUploadProps) {
  return (
    <div {...rootProps()} className="w-full h-[300px]">
      <input {...inputProps()}/>
      <p>Drop your files here, or click to select</p>
    </div>
  );
}

export default FileUpload;
