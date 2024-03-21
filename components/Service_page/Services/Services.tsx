"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import services from '@/app/(site)/data/allServices'

const Services = () => {

    const [service, setService] = useState(services)

    useEffect(() => {
        setService(services)
    }, [])

  return (
    <div className='mt-5 flex sm:items-center justify-center flex-col w-[100%]'>
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-1 xs:text-center'>Tous nos <span className='text-green-600'>services</span></h3>
        <div className='sm:grid gap-5 mt-6 w-[100%] block xs:grid-cols-2 nine:grid-cols-3'>
            {
                service.map((item: any) => (
                    <div className="" key={item.id}>
                        <div className="border border-input bg-secondary w-[100%] h-[13rem] rounded-lg  overflow-hidden">
                            <Link href='/UnService'>
                                <Image src={item.src} alt='Car' width={0} height={0} sizes='100vw' className='w-[100%] h-[100%] object-contain rounded-lg hover:scale-110 transition-all .4s ease-in-out'  />
                            </Link>
                        </div>
                        <div className='mt-2'>
                            <h5 className='font-semibold text-sm'>{item.name}</h5>
                        </div>
                    </div>
                ))
            }
        </div>  
    </div>
  )
}

export default Services
