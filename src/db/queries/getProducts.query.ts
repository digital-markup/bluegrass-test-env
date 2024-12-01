/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { getSupabaseClient } from "..";

const getProductByQuery = async (tagNames: string[]) => {
    const client = getSupabaseClient();

    const { data, error } = await client.rpc('get_products_by_tags', { tag_names: tagNames });
    if (error) {
        throw new Error("Error fetching products" + error);
    }
    return data;
}

const getProductsByType = async (type: string): Promise<any> => {
    const client = getSupabaseClient();

    const { data, error } = await client.from("products").select("id, title, product_description, availability, feature_image, images, variations").eq("type", type);
    if (error) {
        throw new Error("Error fetching products" + error);
    }
    return data;
}

export { getProductsByType }

export default getProductByQuery