import { z } from "zod";

const formSchema = z.object({
    emailAddress: z
        .string()
        .email({
            message: "Please enter a valid email address",
        })
        .min(1, {
            message: "Please enter your email address",
        }),
    password: z
        .string({
            required_error: "Please enter your password",
        })
        .min(1, {
            message: "Please enter your password",
        }),
});

export default formSchema;