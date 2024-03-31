import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: Request) {
      try {
      const body = await req.json()
      const {slug, name, description, address, email, password, tel, note, image, status } = body

      const existingEmail = await db?.provider.findFirst({where: {email}})
      if (existingEmail) {
            return NextResponse.json({ service: null, message: "Un service avec ce nom existe déjà" }, { status: 409 })
        }

      const createProvider = await db?.provider.create({
            data: {
                  slug,
                  name,
                  description,
                  address,
                  email,
                  password,
                  tel,
                  note,
                  image,
                  status,
            }
      })

      return NextResponse.json({prestataire: createProvider, message: "Prstataire créer avec succès"}, {status: 201})
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}

export async function GET() {
      

      try {
            const providers = await db?.provider.findMany({include: {
                  category: true
            }})

            return NextResponse.json({providers, message: "Ok"}, {status: 200})
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}

function getAuthSession() {
      throw new Error('Function not implemented.');
}
