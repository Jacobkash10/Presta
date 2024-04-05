import {z} from 'zod'

export const registerSchema = z.object({
      email: z.string().email(),
      name: z.string().min(3, {
            message: "Votre nom est trop court"
      }).max(255),
      studentId: 
      z.string()
      .min(7)
      .max(7)
      .refine((val => !isNaN(val as unknown as number)), {
            message: "Student ID should be a number",
      }),
      year: z.string().min(2).max(18),
      password: z.string().min(6).max(100),
      confirmPassword: z.string().min(6).max(100)
})