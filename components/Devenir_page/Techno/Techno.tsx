import Image from 'next/image'
import React from 'react'

const Techno = () => {
  return (
    <div className='mt-20 flex flex-col sm:items-center justify-between'>
        <h2 className='sm:text-center max-w-xl text-xl sm:text-2xl nine:text-3xl font-semibold'>Une technologie au <span className='text-green-600'>service des prestataires</span></h2>
        <p className='sm:text-center max-w-xl text-md mt-4'>Des fonctionnalités qui répondent aux besoins des prestataires des services à domicile et qui optimisent vos revenus.</p>
        <div className='mt-10 md:flex items-center justify-center gap-2 w-[80%]'>
            <div>
                <h5 className='text-xl font-bold mb-2 text-green-600'>Vous choisissez votre rémunération</h5>
                <p className='max-w-3xl text-[15px]'>
                    Lorsque vous postulez, vous proposez au client le taux horaire 
                    de votre choix… c’est vous qui décidez !
                </p>
            </div>
            <div className='w-[100%] bg-background h-[24rem] rounded-lg'>
                <Image src='/images/prix.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div> 
        </div>
        <div className='mt-8 md:flex items-center justify-center gap-2 w-[80%]'>
            <div className='w-[100%] bg-background h-[24rem] rounded-lg'>
                <Image src='/images/score.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div>
            <div>
                <h5 className='text-xl font-bold mb-2 text-green-600'>Augmentez votre notoriété grâce au score de visibilité</h5>
                <p className='max-w-3xl text-[15px]'>
                    Chaque mission réalisée avec succès vous met un peu plus en valeur auprès des clients. 
                    Plus vous êtes fiable, plus vous serez susceptible d’être réservé.
                </p>
            </div>
        </div>
        <div className='mt-8 md:flex items-center justify-center gap-2 w-[80%]'>
            <div>
                <h5 className='text-xl font-bold mb-2 text-green-600'>Gestion en ligne simplifiée avec l’agenda intelligent</h5>
                <p className='max-w-3xl text-[15px]'>
                    Vous pouvez postuler à plusieurs jobs ayant lieu au même moment pour maximiser vos chances. 
                    Notre agenda s’adapte pour que vous ne soyez jamais réservé deux fois sur le même créneau. 
                    Il vous rappelle également les informations principales sur vos jobs à venir
                </p>
            </div>
            <div className='w-[100%] bg-background h-[24rem] rounded-lg'>
                <Image src='/images/agenda.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div>
        </div>
        <div className='mt-8 md:flex items-center justify-center gap-2 w-[80%]'>
            <div className='w-[100%] bg-background h-[24rem] rounded-lg'>
                <Image src='/images/assist.png' width={0} height={0} sizes='100vw' alt='image service' className='w-[100%] h-[100%] object-contain' />
            </div>
            <div>
                <h5 className='text-xl font-bold mb-2 text-green-600'>Gestion et communication tout-en-un grâce à l’assistant de mission</h5>
                <p className='max-w-3xl text-[15px]'>
                    Retrouvez toutes les informations sur chaque job, planifiez les détails de votre intervention en discutant 
                    avec vos clients depuis l’app, ou demandez de l’aide pour n’importe quel changement de situation.
                    L’assistant de mission prévient vos clients en cas de retard. Vous pouvez même calculer votre temps 
                    de trajet pour être certain d’arriver à l’heure !
                </p>
            </div>
        </div>
    </div>
  )
}

export default Techno
