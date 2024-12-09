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

const getProducts = async (): Promise<any> => {
    const client = getSupabaseClient();

    const { data, error } = await client.from("products").select("id, title, product_description, availability, feature_image, images, variations");

    if (error) {
        throw new Error("Error fetching products" + error);
    }
    return data;
}

const getProductsByCategory = async (category: string, brand?: string): Promise<any> => {
    const client = getSupabaseClient();

    const { data, error } = await client.from("products")
        .select("id, title, product_description, availability, feature_image, images, variations").eq("category", category);

    if (brand) {
        const { data, error } = await client.from("products")
            .select("id, title, product_description, availability, feature_image, images, variations").eq("category", category).ilike("brand", `%${brand}%`);

        if (error) {
            throw new Error("Error fetching products" + error);
        }
        return data;
    }
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

const getProductsByBrand = async (brand: string): Promise<any> => {
    const client = getSupabaseClient();

    const { data, error } = await client.from("products").select("id, title, product_description, availability, feature_image, images, variations")
        .ilike("brand", `%${brand}%`);
    if (error) {
        throw new Error("Error fetching products" + error);
    }
    return data;
}

export { getProductsByType, getProductsByCategory, getProductsByBrand, getProducts };

export default getProductByQuery