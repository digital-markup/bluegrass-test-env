/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { getProductByIdAsync } from "@/db/queries/products.query";
import { getProductImages } from "./getMultipleImages.action";

const getProductById = async (id: string):Promise<any> => {
    const response = await getProductByIdAsync(id);

    if (!response.success) {
        throw new Error("Error fetching product" + response.message);
    }

    // get images by url
    const [data] = response.data;
    const product = await getProductImages(data);
    return product;
}

export default getProductById