import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className=' bg-secondary p-20 rounded-xl flex items-center gap-4'>
        <div className='w-[50%]'>
            <div className='w-[100%]'>
                <h1 className='text-3xl font-bold leading-[1.4] text-pretty'>
                    Trouvez les meilleurs prestataires pour <span className='text-green-600'>l’entretien de vos bureaux.</span>
                </h1>
                <p className='max-w-xl mt-4'>Nettoyage, entretien d'espaces verts, réparations ou rénovations dans vos locaux, en quelques clics.</p>
            </div>
            <div className='mt-10 w-[80%]'>
            <Button variant='default' className='w-[100%] text-xl py-6'><Link href={"/"}>Commencez</Link></Button>
            </div>
        </div>
        <div className='w-[50%]'>
            <div className='w-[100%]  h-[22rem] rounded-lg'>
                <Image src='/images/office.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div>
        </div>
    </div>
  )
}

export default Banner
