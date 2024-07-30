import Link from 'next/link'
import React from 'react'
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className='mt-20 bg-background'>
      <div className="block sm:grid grid-cols-2 md:grid-cols-4 gap-12 z-50 bg-default py-10">
        <div className="">
          <h1 className='text-md font-semibold mb-3 border rounded-md p-1 max-w-fit'><span className='border-r-2 border-green-600 mr-1'></span>
            <span className='border-r-2 border-green-600 mr-1'></span>Presta
          </h1>
        </div>
        <div className='my-7 sm:my-0'>
          <h5 className='mb-5 font-semibold'>Découvrir</h5>
            <p className='mb-2 text-sm font-normal hover:underline transition-all ease-in-out .3s max-w-fit'><Link href='/Demander_un_service'>
                Demander un service</Link>
            </p>
            <p className='mb-2 text-sm font-normal hover:underline transition-all ease-in-out .3s max-w-fit'><Link href='/Devenir_prestataire'>
                Devenir prestataire</Link>
            </p>
            <p className='mb-2 text-sm font-normal hover:underline transition-all ease-in-out .3s max-w-fit'><Link href='/Qui_sommes_nous'>
                Qui sommes-nous ?</Link>
            </p>
            <p className='mb-2 text-sm font-normal hover:underline transition-all ease-in-out .3s max-w-fit'><Link href='/Avis'>
                Avis client</Link>
            </p>
        </div>
        <div className='my-7 sm:my-0'>
          <h5 className='mb-5 font-semibold'>Informations utiles</h5>
            <p className='mb-2 text-sm font-normal hover:underline transition-all ease-in-out .3s max-w-fit'><Link href='/'>
                Centre d'aide</Link>
            </p>
            <p className='mb-2 text-sm font-normal hover:underline transition-all ease-in-out .3s max-w-fit'><Link href='/Services_aux_entreprises'>
                Services aux entreprises</Link>
            </p>
            <p className='mb-2 text-sm font-normal hover:underline transition-all ease-in-out .3s max-w-fit'><Link href='/'>
                FAQ</Link>
            </p>
            <p className='mb-2 text-sm font-normal hover:underline transition-all ease-in-out .3s max-w-fit'><Link href='/'>
                Conditions générales client</Link>
            </p>
            <p className='mb-2 text-sm font-normal hover:underline transition-all ease-in-out .3s max-w-fit'><Link href='/'>
                Conditions générales prestataire</Link>
            </p>
            <p className='mb-2 text-sm font-normal hover:underline transition-all ease-in-out .3s max-w-fit'><Link href='/'>
                Politique de confidentialité</Link>
            </p>
        </div>
        <div className='my-7 sm:my-0'>
          <h5 className='font-semibold'>Réseaux sociaux</h5>
          <div className='flex items-center gap-2 mt-4'>
            <Link href='/'><i className='text-green-400 hover:text-green-500'><Instagram size={30} /></i></Link>
            <Link href='/'><i className='text-green-400 hover:text-green-500'><Facebook size={30} /></i></Link>
            <Link href='/'><i className='text-green-400 hover:text-green-500'><Linkedin size={30} /></i></Link>
          </div>
        </div>
      </div>
      <p className='text-center mt-5 pb-2 text-sm font-medium'>© presta. Tous droits reservés</p>
    </footer>
  )
}

export default Footer
