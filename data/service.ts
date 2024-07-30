import { db } from "@/lib/db";

export const getServiceBySlug = async (slug: string) => {
      try {
            const service = await db.service.findFirstOrThrow({ where: {slug} })

            return service

      } catch (error) {
            return null
      }
}