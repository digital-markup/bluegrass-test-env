"use server";
import { getProducts, getProductsByCategory } from "@/db/queries/getProducts.query";

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

const getAllProductsAction = async () => {
    const response = await getProducts();
    if (!response) {
        throw new Error("Error fetching products");
    }
    return response;
}

export { getAllProductsAction }
export default getProductsAction