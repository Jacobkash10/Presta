import { ArrowLeftRight, Clock8, TrendingUp, UserCheck, Zap } from 'lucide-react'
import Image from 'next/image'
import Img from '../../../public/images/menages.png'
import React from 'react'

const Simplifier = () => {
  return (
    <div className='mt-28'>
      <h3 className='text-3xl font-bold mb-1'><span className='text-green-600'>Simplifier votre quotidien</span> est notre vocation</h3>
      <div className='flex items-center gap-10 w-[100%]'>
        <div className='grid grid-cols-2 grid-rows-2 gap-10 mt-20 w-[70%] h-[30rem]'>
            <div className='w-[100%]'>
                <i className='text-green-600'><TrendingUp className='bg-secondary p-4 rounded-full' size={60} /></i>
                <h5 className='mt-2 text-base font-semibold'>Algorithme de mise en avant des meilleurs prestataires</h5>
                <p className='text-wrap mt-2 text-sm leading-normal'>
                    Recevez des offres de la part des meilleures prestataires pour votre demande de service.
                </p>
            </div>
            <div className='w-[100%]'>
                <i className='text-green-600'><ArrowLeftRight className='bg-secondary p-4 rounded-full' size={60} /></i>
                <h5 className='mt-2 text-base font-semibold'>Matching du bon prestataire pour votre besoin</h5>
                <p className='text-wrap mt-2 text-sm leading-normal'>
                    Choississez uniquement les prestataires qui correspondent entièrement à votre besoin.
                </p>
            </div>
            <div className='w-[100%]'>
                <i className='text-green-600'><Zap className='bg-secondary p-4 rounded-full' size={60} /></i>
                <h5 className='mt-2 text-base font-semibold'>Formulaires automatisés</h5>
                <p className='text-wrap mt-2 text-sm leading-normal'>
                    Gagnez du temps grâce à la proposition automatique d'un tarif et d'une durée pour la prestation demandée.
                </p>
            </div>
            <div className='w-[100%]'>
                <i className='text-green-600'><Clock8 className='bg-secondary p-4 rounded-full' size={60} /></i>
                <h5 className='mt-2 text-base font-semibold'>Réservez un prestataire en quelques minutes</h5>
                <p className='text-wrap mt-2 text-sm leading-normal'>
                    Demandez votre service et réservez le prestataire de votre choix en 3 clics dans les minutes qui suivent.
                </p>
            </div>
        </div>
        <div className='w-[30%]'>
            <div className="border border-input bg-secondary w-[100%] h-[30rem] rounded-lg  overflow-hidden">
                <Image src={Img} alt='Car' width={0} height={0} sizes='100vw' className='w-[100%] h-[100%] object-contain rounded-lg'  />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Simplifier
