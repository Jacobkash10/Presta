import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt'
import { NextAuthOptions, getServerSession } from "next-auth";
import { db } from "./db";
import { UserRole } from "@prisma/client"
import { getUserById } from "@/data/user"

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                username: { label: "Username", type: "text", placeholder: "John Smith" },
            },
            async authorize(credentials) {
              
                // check to see if email and password is there
                if(!credentials?.email || !credentials?.password) {
                    throw new Error('Please enter an email and password')
                }

                // check to see if user exists
                const user = await db.user.findUnique({
                    where: {
                        email: credentials?.email
                    }
                });

                // if no user was found 
                if (!user || !user?.password) {
                    throw new Error('No user found')
                }

                // check to see if password matches
                const passwordMatch = await bcrypt.compare(credentials.password, user.password)

                // if password does not match
                if (!passwordMatch) {
                    throw new Error('Incorrect password')
                }

                return user;
            },
        }),  
    ],
      callbacks: {
            async session({token, session}) {
                  if (token.sub && session.user) {
                        session.user.id = token.sub
                  }

                  if (token.role && session.user) {
                        session.user.role = token.role as UserRole
                  }
                  return session
            },
            async jwt({token}) {
                  if (!token.sub) return token

                  const existingUser = await getUserById(token.sub)

                  if (!existingUser) return token

                  token.role = existingUser.role

                  return token
            }
      },
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST}

export const getAuthSession = () => getServerSession(authOptions);
