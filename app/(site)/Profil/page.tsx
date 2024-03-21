"use client" 

import { useSession } from 'next-auth/react';
import React from 'react'

const page = () => {

  const { data: session, status } = useSession();
      
      if (session?.user) {
            return <h2 className='mt-20 text-2xl'>Page d'admin - Bienvenue {session?.user.name}</h2>
        }
      

  return (
    <div className='mt-20'>
      <h2 className='text-2xl'>Veuillez vous connecter pour voir la page d'administration</h2>
    </div>
  )
}

export default page
