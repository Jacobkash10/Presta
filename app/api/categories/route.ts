import { db } from '@/lib/db';
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
      try {
      const body = await req.json()
      const {slug, name_cate, image } = body

      const existingName = await db?.category.findFirst({where: {name_cate}})
      if (existingName) {
            return NextResponse.json({ category: null, message: "Une catégorie avec ce nom existe déjà" }, { status: 409 })
        }

      const createCate = await db?.category.create({
            data: {
                  slug,
                  name_cate,
                  image
            }
      })

      return NextResponse.json({category: createCate, message: "Catégorie créer avec succès"}, {status: 201})
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}

export async function GET() {
      try {
      const categories = await db?.category.findMany()

      return NextResponse.json({categories, message: "Ok"}, {status: 200})
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}