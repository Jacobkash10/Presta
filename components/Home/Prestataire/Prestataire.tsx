import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Prestataire = () => {
  return (
    <div className="py-32 border border-input p-2 sm:p-[2rem] rounded-xl flex flex-col justify-center xs:items-center">
        <div className="p-10 flex flex-col justify-center xs:items-center">
          <h3 className='text-xl nine:text-2xl lg:text-3xl font-bold mb-5'>Vous avez le sens du <span className='text-green-600'>service ?</span></h3>
          <p className='text-lg mb-5 font-medium xs:text-center sm:max-w-lg'><span className='text-green-600'>Rejoignez la communauté</span> de prestataires, 
            développez votre activité et <span className='text-green-600'>augmentez vos 
            revenus</span> en rendant service près de chez vous.
            </p>
            <Button variant='default' className='py-6 bg-green-600 text-white hover:bg-green-700'><Link className='text-base' href='/Devenir_prestataire'>Devenir prestataire</Link></Button>
        </div>
      </div>
  )
}

export default Prestataire
