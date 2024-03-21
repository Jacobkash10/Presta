import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Commencer = () => {
  return (
    <div className='mt-10'>
        <h3 className='text-3xl font-semibold text-center mb-10'>Commencez l'aventure Presta sans plus tarder</h3>
        <div className='flex items-center justify-center gap-2'>
            <Button variant='default' className='py-7 bg-green-600 text-white hover:bg-green-700'><Link className='text-base' href={"/Demander_un_service"}>Demander un service</Link></Button>
            <Button variant='default' className='py-7'><Link className='text-base' href={"/Devenir_prestataire"}>Devenir prestataire</Link></Button>
        </div>
        <div className='mt-10'>
            <h4 className='text-center text-2xl font-bold'>En savoir plus sur Presta</h4>
            <Link className='flex items-center justify-center text-green-500 text-md font-semibold mt-4' href={"/Services_aux_entreprise"}>Nos services pour les entreprises</Link>
        </div>
    </div>
  )
}

export default Commencer
