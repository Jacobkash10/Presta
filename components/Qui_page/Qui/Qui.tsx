"use client"

import React, { useEffect, useState } from 'react'
import services from '@/app/data/allServices'
import Image from 'next/image'
import Lorem from '@/app/data/Lorem'

const Qui = () => {

    const [service, setService] = useState(services)

    useEffect(() => {
        setService(services)
    }, [])

  return (
    <div className='mt-10'>
        <div className='flex items-center gap-10 w-[100%]'>
            <div className='w-[50%] grid grid-cols-2 gap-4'>
            {
                service?.slice(0, 6)?.map((item: any) => (
                    <div className="w-[100%]" key={item.id}>
                        <div className="border border-input bg-secondary w-[100%] h-[12rem] rounded-lg  overflow-hidden">
                            <Image src={item.src} alt='Car' width={0} height={0} sizes='100vw' className='w-[100%] h-[100%] object-contain rounded-lg'  />
                        </div>
                    </div>
                ))
            }
            </div>
            <div className='w-[50%]'>
                <h3 className='text-3xl font-bold text-green-600'>Qui sommes nous ?</h3>
                <Lorem />
                <Lorem />
                <Lorem />
            </div>
        </div>
        <div className='mt-12 flex flex-col items-center justify-center'>
            <h3 className='text-3xl font-semibold'>Simple, Rapide, Pas cher</h3>
            <p className='text-center text-base mt-3 max-w-md'><span className='text-green-600'>Libérez-vous de toutes</span> les démarches administratives, <span className='text-green-600'>choisissez et payez</span> votre prestataire en ligne et au prix que <span className='text-green-600'>vous</span> souhaitez.</p>
        </div>
    </div>
  )
}

export default Qui
