import React from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center py-[2rem] bg-secondary rounded-xl'>
            <div className='w-[100%] h-[13rem] rounded-lg'>
                <Image src='/images/avis.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-semibold text-center mb-4 max-w-xl'><span className='text-green-600'>Avis</span> clients</h1>
                <p>Découvrez les avis des clients Presta</p>
            </div>
        </div>
    </div>
  )
}

export default Banner
