import { eq } from "drizzle-orm";
import { tagsTable } from "../schema";
import { db } from "..";

export const getTags = async (isArchived: boolean): Promise<Array<{
    id: string,
    name: string,
    slug: string
}>> => {

    const data = db.select().from(tagsTable).where(eq(tagsTable.isArchived, isArchived));
    return data;
}