import { db } from '@/lib/db';
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
      try {
            const slug = req.url.split("/reservation/")[1]
            const reserve = await db.reservation.findFirst({ where: { slug }, include: { user: true, service: true} })
            if (!reserve) {
                  return NextResponse.json({ message: "Introuvable" }, { status: 404 })
              }
              return NextResponse.json({ message: "Succès", reserve }, { status: 200 })
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}

