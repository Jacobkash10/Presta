"use client" 

import { useSession } from 'next-auth/react';
import React from 'react'

const Profil = () => {

  const { data: session, status } = useSession();

  return (
    <div className='m-4 h-[100%]'>
      {
        session?.user ? (
          <h2 className='text-2xl'>Page d'admin - Bienvenue {session?.user.name} {session.user.email}</h2>
        ) : (
          <h2 className='text-2xl'>Veuillez vous connecter pour voir la page d'administration</h2>  
        )
      }
      
    </div>
  )
}

export default Profil
