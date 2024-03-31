import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export async function fetchServices() {
    const res = await fetch('http://localhost:3000/api/services', {
        next: {
            revalidate: 10
        }
    })

    const data = await res.json()
    return data
}

const Services = async ({ services }: any) => {

    const allServices = await fetchServices()

    const res = allServices.services

  return (
    <div className='mt-5 flex items-center justify-center flex-col w-[100%]'>
        <h3 className='text-3xl font-bold mb-1'>Tous <span className='text-green-600'>nos services</span> "{services.category?.name_cate}(s)</h3>
        <div className='grid grid-cols-3 gap-6 mt-6 w-[100%]'>
            {
                res?.filter((curDate: any) => {
                    return curDate?.categorySlug === services?.category?.slug
                })?.map((item: any) => (
                    <div className="border p-8 rounded-lg" key={item.id}>
                        <div className='py-2 px-2 rounded-md bg-secondary'>
                            <p className='text-base font-bold'>{item.name_service}</p>
                        </div>
                        <div className='border-b-2 pb-4 pt-4 border-t-2 mt-4'>
                            <p className='text-sm'>
                                {item.description}
                            </p>
                        </div>
                        <div className=''>
                        <Button variant='default' className='py-5 mt-4 w-[100%]'>
                            <Link className='text-base w-full' href={`Demander_un_service/${item.slug}`}>
                                Demander ce service
                            </Link>
                        </Button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services
