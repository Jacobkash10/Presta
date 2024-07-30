import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { SearchHome } from '@/components/Search_home';
import Image from 'next/image';
import Demander from '@/components/Demander/Demander';
import { Quote } from 'lucide-react';

const Banner = () => {
  return (
    <div className='flex items-center justify-center flex-col py-6 md:py-8 lg:py-20 2xl:px-[10rem] relative'>
      <Quote size={"36"} className='absolute top-0 left-0' />
      <Quote size={"36"} className='absolute bottom-0 right-0' />
        <div className='w-[100%] h-[7rem] xs:h-[12rem] rounded-lg'>
              <Image src='/images/home.png' priority width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
          </div>
        <h1 className='text-2xl sm:text-[2rem] lg:text-5xl max-w-sm md:max-w-xl nine:max-w-lg lg:max-w-3xl text-center mb-7 font-bold'>
          Trouvez le prestataire idéal pour <span className='text-green-600'>les services du quotidien</span>
        </h1>
        <SearchHome />
        <div className='flex items-center justify-center gap-4'>
            <Demander>
              <Button variant='default' className='py-4 lg:py-3 text-xs xs:text-base bg-green-600 text-white hover:bg-green-700'>
                Demander un service
              </Button>
            </Demander>
            <Button variant='default' className='py-4 lg:py-3'><Link className='text-xs xs:text-base' href={"/Devenir_prestataire"}>
              Devenir prestataire</Link>
            </Button>
        </div>
    </div>
  )
}

export default Banner
