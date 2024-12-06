"use server";
import { getProductsByCategory } from "@/db/queries/getProducts.query";

interface ProductProps {
    category: string,
    brand: string | null
}

const getProductsAction = async ({ category, brand }: ProductProps) => {
    const response = await getProductsByCategory(category, brand!);
    if (!response) {
        throw new Error("Error fetching products");
    }
    return response;
}

export default getProductsAction