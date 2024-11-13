import { db } from "..";
import { InsertProduct, productsTable } from "../schema";

export const createProduct = async (values: InsertProduct) => {
    const data = await db.insert(productsTable).values(values).returning();

    if (!data) {
        return null;
    }
    return data;
}