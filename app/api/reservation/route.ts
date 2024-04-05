import { getAuthSession } from '@/lib/auth';
import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: Request) {
      const session = await getAuthSession();

      if (!session) {
      return  NextResponse.json({ message: "Not Authenticated!" }, { status: 401 });
      }
  
      try {
      const body = await req.json()
      const { serviceName, date_reservation, hour, address, tel, description } = body

      const reservation = await db?.reservation.create({
            data: {
                  serviceName,
                  date_reservation,
                  hour,
                  address,
                  tel,
                  description,
                  userEmail: session.user?.email
            }
      })

      return NextResponse.json({reservation: reservation, message: "Réservation faite"}, {status: 201})
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}

export async function GET() {
      try {
            const reserves = await db.reservation.findMany({ include: { user: true, prestataire: true, service: true} })
            
            return NextResponse.json({ message: "Succès", reserves }, { status: 200 })
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}