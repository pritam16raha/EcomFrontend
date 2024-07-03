import * as z from 'zod';

export const UserUpdateSchema = z.object({  
    name: z.string({ required_error: "name is required for login" }).min(5, {message: "minimum 5 words are required"}),
    username: z.string({ required_error: "must be string" }).min(5, {message:"minimum 5 words are required"}).max(20, {message: "must be under 20 digits"}),
    email: z.string().email({ message: "must be a valid email" }),
    role: z.enum([ "user" , "admin" , "seller" , "buyer" ]),
    password: z.string({required_error: "password is mandatory"}).min(6, {message: "at least 6 digit long"})
})