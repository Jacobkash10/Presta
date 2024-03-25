"use client" 

import { GitPullRequest, MessageSquareMore, TimerReset, Trash2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import React from 'react'

const Home = () => {

  const { data: session, status } = useSession();

  return (
    <div className='m-4 h-[100%] border-t pt-5'>
      {
        session?.user ? (
          <div className='flex items-center gap-2'>
            <h2 className='text-2xl'>Bienvenue</h2>
            <div className='bg-primary w-14 h-14 rounded-full flex justify-center items-center'>
              <p className='text-lg text-background font-bold'>
                {session?.user.name?.substr(0, 1)?.toUpperCase()}
              </p>
            </div>
            <h2 className='text-2xl'>{session?.user.name?.toUpperCase()}</h2>
          </div>
        ) : (
          <h2 className='text-2xl'>Veuillez vous connecter pour voir la page d'administration</h2>  
        )
      }
      <div>
      <div className='mt-6 grid grid-cols-4 gap-4 border-t'>
        <div className=' bg-secondary border rounded-lg px-10 py-8 mt-6'>
            <h5 className='text-xl'>12</h5>
            <p className=''>Demande(s)</p>
        </div>
        <div className=' bg-secondary border rounded-lg px-10 py-8 mt-6'>
            <h5 className='text-xl'>2</h5>
            <p className=''>Réservation(s) en attente</p>
        </div>
        <div className=' bg-secondary border rounded-lg px-10 py-8 mt-6'>
            <h5 className='text-xl'>6</h5>
            <p className=''>Réservation(s) annulée(s)</p>
        </div>
        <div className=' bg-secondary border rounded-lg px-10 py-8 mt-6'>
            <h5 className='text-xl'>8</h5>
            <p className=''>Commentaire(s)</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
