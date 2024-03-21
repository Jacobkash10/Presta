"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import services from '@/app/(site)/data/bricolage'
import { Button } from '@/components/ui/button'

const Services = () => {

    const [service, setService] = useState(services)

    useEffect(() => {
        setService(services)
    }, [])

  return (
    <div className='mt-5 flex items-center justify-center flex-col w-[100%]'>
        <h3 className='text-3xl font-bold mb-1'>Tous <span className='text-green-600'>nos services</span> de bricolage</h3>
        <div className='grid grid-cols-3 grid-rows-2 gap-6 mt-6 w-[100%]'>
            {
                service.map((item: any) => (
                    <div className="border p-8 rounded-lg" key={item.id}>
                        <div className='border-b-2 pb-4'>
                            <p className='text-base font-bold text-green-600'>{item.name}</p>
                        </div>
                        <div className='border-b-2 pb-4 pt-4'>
                            <p className='text-sm'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Officiis architecto voluptates quod vel tenetur quisquam.
                            </p>
                        </div>
                        <div className=''>
                        <Button variant='default' className='py-5 mt-4 w-[100%]'><Link className='text-base' href={"/"}>Demander ce service</Link></Button>
                        </div>
                    </div>
                ))
            }
        </div>  
    </div>
  )
}

export default Services
