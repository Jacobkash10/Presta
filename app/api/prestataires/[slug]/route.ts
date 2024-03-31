import { db } from '@/lib/db';
import { NextResponse } from 'next/server'

export async function GET(req: Request, ) {
      try {
            const slug = req.url.split("/prestataires/")[1]
            const provider = await db.provider.findFirst({ where: { slug }, include: { category: true} })
            if (!provider) {
                  return NextResponse.json({ message: "Introuvable" }, { status: 404 })
              }
              return NextResponse.json({ message: "Succès", provider }, { status: 200 })
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}