import React from 'react'
import { User } from 'lucide-react';
import { GripVertical } from 'lucide-react';

const Type = () => {
  return (
    <div className='mt-10 flex flex-col sm:items-center justify-center'>
      <h2 className='sm:text-center max-w-xl text-xl sm:text-2xl nine:text-3xl font-semibold'>Quel type de prestataire êtes-vous ?</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 nine:grid-cols-3 gap-7 mt-10 w-[100%]'>
        <div className='mt-4'>
            <div className='bg-secondary py-3 px-[5px] rounded-full max-w-fit'>
                <h5 className='bg-green-500 text-white text-xs text-center font-semibold rounded-sm py-[1px] px-1'>PRO</h5>
            </div>
            <h5 className='mt-3 font-semibold text-xl'>Auto-entrepreneur</h5>
            <ul className='mt-3 list-outside ml-10 list-disc text-[15px]'>
                <li>Boostez votre activité</li>
                <li>Réalisez des missions avec nos entreprises</li>
                <li>Automatisez vos factures et votre administratif</li>
            </ul>
        </div>
        <div className='mt-4'>
            <i><User className='bg-secondary p-2 rounded-full text-green-600' size={42} /></i>
            <h5 className='mt-3 font-semibold text-xl'>Particulier</h5>
            <ul className='mt-3 list-outside ml-10 list-disc text-[15px]'>
                <li>Travaillez en fonction de votre propre calendrier</li>
                <li>Construisez votre clientèle sans</li>
                <li>Recevez une rémunération juste tout en étant assuré</li>
            </ul>
        </div>
        <div className='mt-4'>
            <i ><GripVertical className='bg-secondary p-2 rounded-full text-green-600' size={42} /></i>
            <h5 className='mt-3 font-semibold text-xl'>Agence ou professionnel du service à la personne</h5>
            <ul className='mt-3 list-outside ml-10 list-disc text-[15px]'>
                <li>Optimisez vos agendas</li>
                <li>Trouvez de nouveaux clients</li>
                <li>Développez de nouveaux services.</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Type
