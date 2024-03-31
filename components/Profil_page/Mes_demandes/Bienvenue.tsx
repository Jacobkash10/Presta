"use client" 

import { useSession } from 'next-auth/react';
import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const Bienvenue = ({res}: any) => {

  const { data: session, status } = useSession();

  return (
    <div className='m-4 h-[100%]'>
      {
        session?.user ? (
          <></>
        ) : (
          <h2 className='text-2xl'>Veuillez vous connecter pour voir la page d'administration</h2>  
        )
      }
      
    </div>
  )
}

export default Bienvenue
