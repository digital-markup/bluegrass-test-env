/* eslint-disable @typescript-eslint/no-explicit-any */
import { STATUS_CODES } from "http";
import { db, getSupabaseClient } from "..";
import { InsertProduct, productsTable } from "../schema";

export const createProduct = async (values: InsertProduct) => {
    const data = await db.insert(productsTable).values(values).returning();

    if (!data) {
        return null;
    }
    return data;
}

export const getAllProducts = async () => {

}

export const getProductsByParams = async (filters: string): Promise<InsertProduct[]> => {
    const client = getSupabaseClient();

    const { data, error } = await client.rpc('fetch_products_by_params', { filters });

    if (error) {
        throw new Error("Error fetching products" + error);
    }

    return data;
}

export const getProductByIdAsync = async (id: string): Promise<any> => {
    const client = getSupabaseClient();

    const { data, error } = await client.from("products").select("*").eq("id", id);

    if (error) {
        return {
            success: false,
            data: error,
            status: STATUS_CODES.INTERNAL_SERVER_ERROR
        }
    }

    return {
        success: true,
        data,
        status: STATUS_CODES.OK
    };
}