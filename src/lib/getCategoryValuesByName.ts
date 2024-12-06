/* eslint-disable @typescript-eslint/no-explicit-any */
import { categoryTypesRoutes } from "@/shared/routes";

const getCategoryValuesByName = async (category: string): Promise<any> => {
    const categoryEntry = categoryTypesRoutes.find(
        entry => entry.category.toLowerCase() === category.toLowerCase()
    );

    return categoryEntry ? categoryEntry.values : [];
}

export default getCategoryValuesByName