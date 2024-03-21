"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Clock7 } from 'lucide-react';
import avis from '@/app/(site)/data/avis'


const Avis = () => {

    const [aviss, setAvis] = useState(avis)

    useEffect(() => {
        setAvis(avis)
    }, [])

  return (
    <div className='mt-16 flex flex-col items-center justify-center relative min-h-[60vh] pb-[5rem]'>
        <h3 className='text-3xl font-semibold mb-2 text-center'>Les utilisateurs <br /> <span className='text-green-600'>nous font confiance</span></h3>
        <div className='grid grid-cols-3 gap-5 mt-10'>
            {
                aviss.map((item: any) => (
                    <div className='w-[100%] p-[1rem] rounded-md border bg-secondary' key={item.id}>
                        <div className='flex justify-between items-center pb-3'>
                            <Image src={item.src} alt='avis image' className='w-[10%] object-contain' width={0} height={0} sizes='100vw' />
                            <h5>{item.name}</h5>
                        </div>
                        <div className='py-4'>
                            <p className='text-sm'>{item.content}</p>
                        </div>
                        <div className='flex items-center gap-4 pt-4'>
                            <i><Clock7 size={20} /></i>
                            <h6 className='text-sm'>Il y'a 3 jours</h6>
                        </div>
                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

export default Avis
