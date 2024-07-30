import {z} from 'zod'

export const reservationSchema = z.object({
      serviceSlug: z.string().min(3),
      slug: z.string().min(3),
      date_reservation: z.date(),
      hour: z.string().min(3, {
            message: "Veuillez renseigner ce champ"
      }).max(255),
      address: z.string().min(3, {
            message: "Veuillez renseigner ce champ"
      }).max(255),
      tel: z.string().min(10, {
            message: "Veuillez bien renseigner ce champ"
      }).max(10)
      .refine((val => !isNaN(val as unknown as number)), {
            message: "Ce champs doit avoir un numéro de téléphone",
      }),
      description: z.string().min(0)
})