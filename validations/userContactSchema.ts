import { z } from 'zod';

export const userContactSchema = z.object({
    firstName: z
        .string()
        .min(3, { message: "First Name must be at least 3 characters long"})
        .max(120, { message: "First Name must be less than 120 characters long"}),
    lastName: z
        .string()
        .min(3, { message: "Last Name must be at least 3 characters long"})
        .max(120, { message: "Last Name must be less than 120 characters long"}),
    email: z.string().email({message: "Please enter a valid email"}),
    phone: z.string().refine(phone => !isNaN(parseInt(phone)), {
        message: 'Phone mut be a number'
    }),
    message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters long"})
    .max(120, { message: "Message Name must be less than 280 characters long"}),
}).refine(data => data.phone.length === 10, {
    message: "Phone must be 10 characters long",
    path: ["phone"]
});





