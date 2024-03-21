import React from 'react'
import { TimerReset } from 'lucide-react';
import { Star } from 'lucide-react';
import { Umbrella } from 'lucide-react';

const Badges = () => {
  return (
    <div className='mt-16 flex flex-col sm:items-center justify-center'>
        <h3 className='text-xl sm:text-2xl max-w-xl font-semibold mb-1 sm:text-center'><span className='text-green-600'>Utilisez Presta</span> pour lancer ou développer votre activité de <span className='text-green-600'>service à domicile.</span></h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 nine:grid-cols-3 gap-6 mt-10'>
            <div className='w-[100%]'>
                <i className='text-green-600'><TimerReset size={25} /></i>
                <h5 className='mt-2 text-base font-semibold'>Les clients viennent à vous</h5>
                <p className='text-wrap mt-2 text-sm leading-loose'>
                    Ne dépensez plus en budget marketing pour vous faire connaitre et trouver des clients. 
                    Nous le faisons gratuitement pour vous.
                </p>
            </div>
            <div className='w-[100%]'>
                <i className='text-green-600'><Star size={25} /></i>
                <h5 className='mt-2 text-base font-semibold'>Obtenez rapidement des réservations</h5>
                <p className='text-wrap mt-2 text-sm leading-loose'>
                    Nous vous accompagnons gratuitement dans l'optimisation de votre 
                    profil pour obtenir rapidement vos premières réservations.
                </p>
            </div>
            <div className='w-[100%]'>
                <i className='text-green-600'><Umbrella size={25} /></i>
                <h5 className='mt-2 text-base font-semibold'>Nous encadrons et assurons vos prestations</h5>
                <p className='text-wrap mt-2 text-sm leading-loose'>
                    En cas de difficulté avec vos clients, nous prenons le relais pour 
                    résoudre la situations et prendre en charge les frais éventuels.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Badges
