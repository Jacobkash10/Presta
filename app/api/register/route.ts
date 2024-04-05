import { db } from '@/lib/db';
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'
import * as z from 'zod';

const userSchema = z
  .object({
    name: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  });

export async function POST(req: Request){
    const body = await req.json();
    const { name, email, password } = userSchema.parse(body);

    if(!name || !email || !password) {
        return new NextResponse('Champs manquants', { status: 400 })
    }

    const exist = await db.user.findUnique({
        where: {
            email
        }
    });

    if(exist) {
        throw new Error("L'email existe déjà")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    });

    return NextResponse.json(user)
}