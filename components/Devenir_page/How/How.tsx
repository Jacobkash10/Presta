import Image from 'next/image'
import React from 'react'

const How = () => {
  return (
    <div className='mt-20 flex flex-col sm:items-center justify-between'>
        <h2 className='sm:text-center max-w-xl text-xl sm:text-2xl nine:text-3xl font-semibold'>
            Vous pouvez enfin tout organiser depuis <span className='text-green-600'>une seule application</span>
        </h2>
        <div className='mt-8 md:flex items-center justify-center gap-2 w-[80%]'>
            <div className='w-[100%] bg-background h-[24rem] rounded-lg'>
                <Image src='/images/calendar.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div>
            <div className=''>
                <h5 className='text-xl font-bold mb-2 text-green-600'>Définissez vos conditions</h5>
                <p className='max-w-3xl text-[15px]'>
                    Choisissez votre taux horaire, votre zone d’intervention et 
                    vos disponibilités pour optimiser votre activité et vos revenus.
                </p>
            </div>
        </div>
        <div className='mt-8 md:flex items-center justify-center gap-2 w-[80%]'>
            <div className=''>
                <h5 className='text-xl font-bold mb-2 text-green-600'>Développez votre activité</h5>
                <p className='max-w-3xl text-[15px]'>
                    Choisissez parmi plus de 80 
                    missions ponctuelles ou récurrentes chaque mois. 
                    Recevez des alertes pour les nouvelles missions selon vos critères.
                </p>
            </div>
            <div className='w-[100%] bg-background h-[24rem] rounded-lg'>
                <Image src='/images/price.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div>
        </div>
        <div className='mt-8 md:flex items-center justify-center gap-2 w-[80%]'>
            <div className='w-[100%] bg-background h-[24rem] rounded-lg'>
                <Image src='/images/manage.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div>
            <div className=''>
                <h5 className='text-xl font-bold mb-2 text-green-600'>Travaillez sereinement</h5>
                <p className='max-w-3xl text-[15px]'>
                    Bénéficiez d’outils dédiés pour optimiser votre activité et la 
                    gestion de la relation client : messagerie, agenda, paiement en 
                    ligne, etc. Vous êtes assuré en cas de casse dès le premier euro.
                </p>
            </div>
        </div>
    </div>
  )
}

export default How
