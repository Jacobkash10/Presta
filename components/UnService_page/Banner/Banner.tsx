import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CornerUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Banner = ({ services }: any) => {
  return (
    <div className='min-h-screen'>
        <div className='mb-2'>
            <span className="flex items-center gap-2 text-sm font-semibold">
                <Link href='/' className='text-green-500'>Accueil</Link> 
                <i><ChevronRight size={15} /></i> 
                <Link href='/Services' className='text-green-500'>Services</Link>
                <i><ChevronRight size={15} /></i> 
                <h6 className=''>{services.category.name_cate}</h6>
            </span>
        </div>
        <div className='flex flex-col justify-center items-center py-[2rem] bg-secondary rounded-xl'>
            <div className='w-[100%] h-[13rem] rounded-lg'>
                <Image src='/images/bricolage.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold text-center mb-4 max-w-xl'>Voir les différents <span className='text-green-600'>services de {services.category.name_cate}</span></h1>
                <p className='text-base font-normal mb-4 max-w-xl text-center'>Montage, démontage, entretien ou réparation des vos meubles... trouvez un prestataire qualifié pour tous vos besoins !</p>
                <Button variant='default' className='bg-green-600 hover:bg-green-700 text-white py-7'><Link href='/' className='flex items-center gap-2'>
                    Demander un service <i><CornerUpRight /></i>
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Banner
