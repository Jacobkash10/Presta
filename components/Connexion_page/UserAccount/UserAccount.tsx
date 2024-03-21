"use client"

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'

const UserAccount = () => {

  const { data: session, status } = useSession();

  return (
      <div>
        {
          session?.user ? (
              <div className='flex items-center justify-center gap-3'>
                <div className='flex items-center gap-1'>
                  <p className='bg-green-600 text-white hover:bg-green-700 rounded-full px-[1rem] py-[.5rem] font-bold'>J</p>
                  <Link href='/Profil'><h5 className='text-base font-semibold'>{session?.user.name}</h5></Link>
                </div>
                <Button onClick={() => signOut({
                  redirect: true,
                  callbackUrl: `${window.location.origin}/Connexion`
                  })}
                  className='mb-3 nine:mb-0 max-w-[35%] xs:max-w-[30%] nine:max-w-full mx-2 nine:mx-0' variant="destructive">
                  Se deconnecter
                </Button>
              </div>
              ) : (
              <Button 
                className='mb-3 nine:mb-0 bg-green-600 hover:bg-green-700 
                text-white max-w-[35%] xs:max-w-[30%] nine:max-w-full mx-2 nine:mx-0' variant="default">
                  <Link href={"/Connexion"}>
                    Connexion
                  </Link>
              </Button>
              )
            }
      
    </div>
  )
}

export default UserAccount
