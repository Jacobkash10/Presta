import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { Clock7 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <div>
        <div className='mb-2'>
          <span className="flex items-center gap-2 text-sm font-semibold">
              <Link href='/Dashboard' className='text-green-500'>Mes demandes</Link> 
              <i><ChevronRight size={15} /></i> 
              <h6 className=''>Montage de meubles</h6>
          </span>
        </div>
        <div className='mt-4 border-2 p-5 rounded-lg'>
          <h3 className='mb-2 text-3xl font-bold'>Montage des meubles</h3>
          <div className='flex items-center gap-1 text-sm'>
            <i><MapPin size={18} /></i>
            <p>7500 Casablanca</p>
          </div>
          <div className='mt-4 flex items-center gap-3'>
            <i className='bg-slate-200 py-3 px-3 rounded-full text-green-600'><CalendarCheck size={22} /></i>
            <h5 className='text-sm font-bold'>Samedi 30 mars à 17:30</h5>
          </div>
          <div className='mt-4 flex items-center gap-3'>
            <i className='bg-slate-200 py-3 px-3 rounded-full text-green-600'><Clock7 size={22} /></i>
            <h5 className='text-sm font-bold'>4h de service</h5>
          </div>
          <h5 className='mt-6 text-sm'>Donnée personnelle</h5>
          <div className='mt-4 flex items-center gap-3'>
            <i className='text-green-600'><Phone size={22} /></i>
            <h5 className='text-sm font-bold'>06 13 95 64 76</h5>
          </div>
          <div className='mt-4 flex items-center gap-3'>
            <i className='text-green-600'><MapPin size={22} /></i>
            <h5 className='text-sm font-bold'>Casablanca Mers sultan 7</h5>
          </div>
          <div className='w-[50%] mt-5 flex items-center gap-2'>
            <Button variant='default' className='w-[100%] py-7 bg-green-600 text-white hover:bg-green-700'>
                  Voir plus
            </Button>
            <Button variant='default' className='w-[100%] py-7'>
                <Link className='text-base' href={"/"}>
                  Modifier
                </Link>
            </Button>
        </div>
        </div>
    </div>
  )
}

export default Banner
