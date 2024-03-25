import { db } from '@/lib/db';
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
      try {
      const body = await req.json()
      const {name_service, description, price } = body

      const existingName_service = await db?.service.findFirst({where: {name_service}})
      if (existingName_service) {
            return NextResponse.json({ service: null, message: "Un service avec ce nom existe déjà" }, { status: 409 })
        }

      const createService = await db?.service.create({
            data: {
                  name_service,
                  description,
                  price
            }
      })

      return NextResponse.json({servcie: createService, message: "Service créer avec succès"}, {status: 201})
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}