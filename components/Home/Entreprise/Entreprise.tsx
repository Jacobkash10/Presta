import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

const Entreprise = () => {
  return (
    <div className="mt-20 py-5 xs:p-[3rem] rounded-xl flex flex-col xs:items-center justify-center"> 
        <div className="pt-[1rem] flex flex-col items-center justify-center">
            <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-4'><span className='text-green-600'>Services</span> aux entreprises</h3>
            <p className='text-md xs:text-center max-w-xl mb-4 font-medium'>
                Trouvez les meilleurs prestataires<br/> pour l’entretien de vos bureaux.
            </p>
            <Button variant='default' className='w-[60%] xs:w-full py-6 bg-green-600 text-white hover:bg-green-700'><Link className='text-base' href='/Services_aux_entreprises'>En savoir plus</Link></Button>
        </div>
      </div>
  )
}

export default Entreprise
