"use client" 

import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import Info from './Info';
import Edit from './Edit';

const Profil = ({user}: any) => {

  const { data: session, status } = useSession();

  return (
    <div className='m-4 h-[100%] border-t'>
      {
        session?.user ? (
          <div>
              <div className='mt-5 flex items-center gap-4 border-b pb-4'>
                <div className="w-[15%]">
                      <Image src='/images/profil.png' width={0} height={0} alt='profil' sizes='100vw' className='w-[100%]' />
                </div>
                <div>
                    <h2 className='text-2xl'>{session.user.email}</h2>
                </div>
              </div>
              <div className='mt-16 flex items-center gap-4'>
                <Info session={session} user={user} />
                <Edit session={session} user={user} />
              </div>  
          </div>
        ) : (
          <h2 className='text-2xl'>Veuillez vous connecter pour voir la page d'administration</h2>  
        )
      }
    </div>
  )
}

export default Profil
