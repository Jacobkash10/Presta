import { db } from '@/lib/db';
import { NextResponse } from 'next/server'

export async function GET(req: Request, ) {
      try {
            const slug = req.url.split("/services/")[1]
            const service = await db.service.findFirst({ 
                  where: 
                  { slug }
            })
            if (!service) {
                  return NextResponse.json({ message: "Introuvable" }, { status: 404 })
              }
              return NextResponse.json({ message: "Succès", service }, { status: 200 })
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}