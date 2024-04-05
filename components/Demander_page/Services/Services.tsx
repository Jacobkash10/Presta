"use client"

import React, { useEffect, useState } from 'react'
import { Search } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Services = ({reservation, setReservation}: any ) => {

    const [allServices, setAllServices] = useState([])
    const res = allServices
    

    useEffect(() => {
        async function fetchServices() {
            const res = await fetch('http://localhost:3000/api/services', {
                next: {
                    revalidate: 10
                }
            })
          
            const data = await res.json()
            return setAllServices(data.services)
          }
          fetchServices()
    }, [])
    
  return (
    <div className="mt-[4rem] rounded-lg border px-10 py-5 flex flex-col items-center justify-center">
        <h3 className='mb-3 font-bold text-center text-2xl'>Sélectionner un service</h3>
        {/* <div className="flex items-center rounded-xl gap-2  bg-secondary p-2 w-[50%]">
            <i className='text-primary'><Search /></i>
            <Input type="text" className='bg-transparent w-[100%] border-none text-primary transition-all .3s' placeholder='Rechercher un service' />
        </div> */}
        <div className='mt-5 w-full flex flex-col items-center justify-center'>
            {/* <select required className='border bg-background rounded-lg py-4 w-[40%]' onChange={e => setReservation({ ...reservation, serviceSlug: e.target.value })}>
                <option value={reservation.serviceSlug}>Service</option>
                {
                    res?.map((item: any) => (
                        <option key={item.id} value={item.slug}>{item?.name_service}</option>
                    ))
                }
            </select> */}
            <Input
          name="slug"
          required
          value={reservation.slug}
          onChange={e => setReservation({ ...reservation, slug: e.target.value })}
          type='text' className='w-[40%] py-7' />
        </div>
        {/* <div className="grid grid-cols-3 grid-rows-2 w-[50%] gap-2 mt-5">
            <Button variant='secondary' className='py-3 px-5 rounded-ful hover:bg-green-500 transition-all .4s'>
                Ménage
            </Button>
            <Button variant='secondary' className='py-3 px-5 rounded-ful hover:bg-green-500 transition-all .4s'>
                Réparation d'une télé
            </Button>
            <Button variant='secondary' className='py-3 px-5 rounded-ful hover:bg-green-500 transition-all .4s'>
                Tondre le gazon
            </Button>
            <Button variant='secondary' className='py-3 px-5 rounded-ful hover:bg-green-500 transition-all .4s'>
                Fixer une lampe
            </Button>
            <Button variant='secondary' className='py-3 px-5 rounded-ful hover:bg-green-500 transition-all .4s'>
                Montage d'un meuble
            </Button>
        </div> */}
        {/* <div className="flex items-center mt-5 rounded-xl bg-secondary p-2 gap-2 w-[50%]">
            <i className='text-primary'><Plus /></i>
            <Input type="text" className='bg-transparent w-[100%] border-none text-primary transition-all .3s' placeholder='Demande spécial' />
        </div> */}
      </div>
  )
}

export default Services
