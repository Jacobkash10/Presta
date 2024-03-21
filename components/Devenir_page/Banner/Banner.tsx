import React from 'react'
import Inscription from '../Inscription/Inscription';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='bg-secondary p-4 nine:p-20 rounded-xl nine:flex items-center gap-4'>
        <div className='nine:w-[50%] flex justify-center flex-col items-center'>
            <div className='w-[100%] flex justify-center flex-col items-center'>
                <h1 className='text-xl sm:text-2xl nine:text-3xl max-w-lg nine:max-w-full font-bold leading-[1.4] text-center'>
                  Prestataires de services à domicile, inscrivez-vous et 
                  <span className='text-green-600'> trouvez des nouveaux clients</span>
                </h1>
            </div>
            <Inscription />
        </div>
        <div className='nine:w-[50%]'>
            <div className='w-[100%] h-[11rem] nine:h-[22rem] rounded-lg'>
                <Image src='/images/prest.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div>
        </div>
    </div>
  )
}

export default Banner
