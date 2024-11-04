"use server";

import s3BucketService from "@/services/s3BucketService";
import setIntoSharp from "./setIntoSharp";

const uploadFile = async (fileStr: string, type: string = "image/png") => {
    // convert the base64 string into buffer
    const buffer = Buffer.from(fileStr, "base64");
    // pass it into the sharp
    const response = await setIntoSharp(buffer);
    // get the response and pass it into the s3 bucket service
    if (response) {
        const result = await s3BucketService(response, type);
        return result;
    }
};

export default uploadFile;