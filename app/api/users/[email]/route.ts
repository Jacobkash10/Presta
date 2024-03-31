import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: Request) {
      try {
            const email = req.url.split("/users/")[1]
            const user = await db.user.findMany({where: { email }, include: { accounts: true}})
            if (!user) {
                  return NextResponse.json({ message: "Introuvable" }, { status: 404 })
              }
            
            return NextResponse.json({ message: "Succès", user }, { status: 200 })
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}