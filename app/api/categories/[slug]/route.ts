import { db } from '@/lib/db';
import { NextResponse } from 'next/server'

export async function GET(req: Request, ) {
      try {
            const slug = req.url.split("/categories/")[1]
            const category = await db.category.findFirst({ where: { slug } })
            if (!category) {
                  return NextResponse.json({ message: "Introuvable" }, { status: 404 })
              }
              return NextResponse.json({ message: "Succès", category }, { status: 200 })
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}