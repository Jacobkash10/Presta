import React from 'react'
import { TimerReset } from 'lucide-react';
import { CalendarCheck2 } from 'lucide-react';
import { Star } from 'lucide-react';

const Avantage = () => {
  return (
    <div className="mt-28 flex flex-col xs:items-center justify-center">
        <h3 className='text-xl nine:text-2xl lg:text-3xl font-bold mb-2 text-center'><span className='text-green-600'>Les avantages</span><br /> de travailler avec Presta</h3>
            <div className="w-[100%] block sm:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
                <div className="w-[100%] p-[2rem] bg-secondary">
                    <i className='mb-4'><TimerReset size={30} /></i>
                    <h5 className='mb-4 mt-4 text-base font-semibold text-green-600'>Gagnez du temps</h5>
                    <p className='text-sm leading-relaxed font-medium'>
                        Plus besoin de jongler entre différentes applications. 
                        Gagnez du temps en organisant toutes vos prestations 
                        de services à domicile depuis une seule plateforme !
                    </p>
                </div>
                <div className="w-[100%] p-[2rem] my-6 sm:my-0 bg-secondary">
                    <i><CalendarCheck2 size={30} /></i>
                    <h5 className='mb-4 mt-4 text-base font-semibold text-green-600'>Aucun abonnement, ni frais de départ.</h5>
                    <p className='text-sm leading-relaxed font-medium'>
                        5 % de frais de service sont prélevés sur vos revenus 
                        pour vous assurer, vous trouver des clients et vous 
                        accompagner. Vous ne percevez rien, nous ne percevons rien.
                    </p>
                </div>
                <div className="w-[100%] p-[2rem] bg-secondary">
                    <i><Star size={30} /></i>
                    <h5 className='mb-4 mt-4 text-base font-semibold text-green-600'>Votre profil est mis en avant</h5>
                    <p className='text-sm leading-relaxed font-medium'>
                        satisfaction est élevé, plus il sera facile pour 
                        vous de remporter des missions.
                    </p>
                </div>
            </div>
      </div>
  )
}

export default Avantage
