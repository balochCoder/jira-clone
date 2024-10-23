import {z} from "zod";

export const loginSchema = z.object({
    email: z.string().min(1, "Email Address is required").email(),
    password: z.string().min(1, "Password is required")
})

export const registerSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email Address is required").email(),
    password: z.string().min(8, "Password should be minimum of 8 characters")
})