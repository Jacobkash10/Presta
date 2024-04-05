import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { SearchHome } from '@/components/Search_home';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='flex items-center justify-center flex-col lg:h-[85vh] px-4 py-6 sm:px-0 md:py-8 lg:py-0 border-x'>
        <div className='w-[100%] h-[7rem] xs:h-[10rem] rounded-lg'>
              <Image src='/images/home.png' priority width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
          </div>
        <h1 className='text-2xl sm:text-[2rem] lg:text-5xl max-w-sm md:max-w-3xl nine:max-w-lg lg:max-w-3xl text-center mb-7 font-bold'>
          Trouvez le prestataire idéal pour <span className='text-green-600'>les services du quotidien</span>
        </h1>
        <SearchHome />
        <div className='flex items-center justify-center gap-4'>
            <Button variant='default' className='py-4 lg:py-3 bg-green-600 text-white hover:bg-green-700'><Link className='text-xs xs:text-base' href={"/Demander_un_service"}>Demander un service</Link></Button>
            <Button variant='default' className='py-4 lg:py-3'><Link className='text-xs xs:text-base' href={"/Devenir_prestataire"}>Devenir prestataire</Link></Button>
        </div>
    </div>
  )
}

export default Banner
