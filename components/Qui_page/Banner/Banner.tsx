import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <div className=''>
        <div className='mb-2'>
            <span className="flex items-center gap-2 text-sm font-semibold">
                <Link href='/' className='text-green-500'>Accueil</Link> 
                <i><ChevronRight size={15} /></i> 
                <h6 className=''>Qui sommes nous ?</h6>
            </span>
        </div>
        <div className='flex flex-col justify-center items-center py-[2rem] bg-secondary rounded-xl'>
            <div className='w-[100%] h-[13rem] rounded-lg'>
                <Image src='/images/about.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold text-center mb-4 max-w-md'>
                    Le spécialiste <span className='text-green-600'>des services à domicile</span> en ligne.
                </h1>
                <p className='max-w-md text-center mt-2'>Réservez un prestataire pour tous les services du quotidien pour votre maison et votre famille.</p>
            </div>
        </div>
    </div>
  )
}

export default Banner
