/* eslint-disable @typescript-eslint/no-explicit-any */
// 1. create an async function that accepts (key = file name, body = file.buffer, contentType = file.mimetype)
// 2. change the key name into a random name to avoid object overriding
// 3. resize the image before uploading using sharp library and get the buffer from there
// 4. upload the file to s3 bucket
// 5. return the file key name

import randomGenerator from "@/actions/randomNameGen";
import { awsClient } from "@/utils/aws/client";
import { PutObjectCommand } from "@aws-sdk/client-s3";

const s3BucketService = async (body: Buffer, contentType: string) => {

    const fileObject = {
        Bucket: process.env.BUCKET_NAME!,
        Key: randomGenerator(),
        Body: body,
        ContentType: contentType
    };

    const command = new PutObjectCommand({
        Bucket: fileObject.Bucket,
        Key: `images/${fileObject.Key}`,
        Body: fileObject.Body,
        ContentType: fileObject.ContentType
    });

    const response = await awsClient.send(command);
    if (response) {
        return {
            status: response.$metadata.httpStatusCode,
            key: fileObject.Key,
            message: "File uploaded successfully"
        };
    }

    throw new Error("File upload failed");
};


export default s3BucketService;