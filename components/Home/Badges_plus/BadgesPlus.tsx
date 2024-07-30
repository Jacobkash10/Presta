import React from 'react'
import { UserCheck } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { Phone } from 'lucide-react';

const BadgesPlus = () => {
  return (
    <div className='flex flex-col justify-center sm:items-center py-[100px]'>
        <h3 className='text-xl sm:text-2xl lg:text-3xl max-w-lg font-bold mb-1 xs:text-center'><span className='text-green-600'>
            Le service</span> à domicile en toute sérénité
        </h3>
        <div className='grid grid-cols-1 sm:grid-cols-2 nine:grid-cols-3 gap-6 mt-20'>
            <div className='w-[100%]'>
                <i className='text-green-700'><UserCheck size={25} /></i>
                <h5 className='mt-2 text-base font-bold'>Prestataires qualifiés</h5>
                <p className='text-wrap mt-2 text-base font-normal leading-loose'>
                    Tous les prestataires sont vérifiés, suivis et évalués pour chaque service rendu 
                    afin de vous garantir le meilleur niveau de satisfaction.
                </p>
            </div>
            <div className='w-[100%]'>
                <i className='text-green-700'><CreditCard size={25} /></i>
                <h5 className='mt-2 text-base font-bold'>Budget respecté</h5>
                <p className='text-wrap mt-2 text-base font-normal leading-loose'>
                    Tous les prix sont définis à l’avance, les prestataires s’engagent à les respecter. 
                    Toutes les rémunérations sont déclenchées en ligne après votre accord.
                </p>
            </div>
            <div className='w-[100%]'>
                <i className='text-green-700'><Phone size={25} /></i>
                <h5 className='mt-2 text-base font-bold'>Service encadré</h5>
                <p className='text-wrap mt-2 text-base font-normal leading-loose'>
                    Notre service client est à votre disposition 7j/7 pour vous assurer une expérience parfaite 
                    de la prise de commande jusqu'à la fin de la prestation.
                </p>
            </div>
        </div>
    </div>
  )
}

export default BadgesPlus
