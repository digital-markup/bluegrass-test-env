import { z } from "zod";

const productSchema = z.object({
    variantTitle: z
        .string()
        .min(1, {
            message: "Please enter variant title",
        }),
});

export default productSchema;