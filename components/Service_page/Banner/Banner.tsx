import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CornerUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <div className='min-h-screen'>
        <div className='mb-2'>
            <span className="flex items-center gap-2 text-sm font-semibold">
                <Link href='/' className='text-green-500'>Accueil</Link> 
                <i><ChevronRight size={15} /></i> 
                <h6 className=''>Services</h6>
            </span>
        </div>
        <div className='flex flex-col justify-center items-center py-[2rem] bg-secondary rounded-xl'>
            <div className='w-[100%] h-[7rem] xs:h-[10rem] nine:h-[13rem] rounded-lg'>
                <Image src='/images/service.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-2xl sm:text-[2rem] lg:text-5xl max-w-sm md:max-w-3xl nine:max-w-lg lg:max-w-md text-center mb-4 font-bold'>Réservez tous <span className='text-green-600'>vos services</span></h1>
                <p className='text-sm sm:text-base font-normal mb-4 max-w-xl text-center'>Aménager, Démenager, fixer, bricoler, rénover, réparer... trouvez un prestataire qualifié pour tous vos besoins !</p>
                
            </div>
        </div>
    </div>
  )
}

export default Banner
