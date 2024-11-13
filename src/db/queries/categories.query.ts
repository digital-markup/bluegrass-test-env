import { eq } from "drizzle-orm";
import { db } from ".."
import { categoriesTable } from "../schema";

// get categories from the table
export const getCategories = async (isArchived: boolean): Promise<Array<{
    name: string,
    slug: string
}>> => {

    const data = db.select().from(categoriesTable).where(eq(categoriesTable.isArchived, isArchived));
    return data;
}