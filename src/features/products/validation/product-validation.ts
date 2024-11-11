import { z } from "zod";

const productSchema = z.object({
    variantTitle: z
        .string()
        .min(1, {
            message: "Please enter variant title",
        }),
});

// const otherInfoSchema = z.object({
//     infoTitle: z.string().min(1, {
//         message: "Please enter info title",
//     }),
//     infoDescription: z.string().min(1, {
//         message: "Please enter info description",
//     }),
// });

export default productSchema;