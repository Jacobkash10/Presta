import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
      try {
            const users = await db.user.findMany({include: { accounts: true}})
            
            return NextResponse.json({ message: "Succès", users }, { status: 200 })
      }

      catch (error) {
            return NextResponse.json({ message: "Quelque chose s'est mal passé!" }, { status: 500 })
      }
}