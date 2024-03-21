import React from 'react'
import { UserCheck } from 'lucide-react';
import { CreditCard } from 'lucide-react';
import { Phone } from 'lucide-react';

const BadgesPlus = () => {
  return (
    <div className='mt-28 flex flex-col items-center justify-center'>
        <h3 className='text-3xl font-semibold mb-1 text-center max-w-md'><span className='text-green-600'>Des interventions</span> dans vos bureaux en toute sérénité</h3>
        <div className='grid grid-cols-3 gap-6 mt-10'>
            <div className='w-[100%]'>
                <i className='text-green-600'><UserCheck size={25} /></i>
                <h5 className='mt-2 text-base font-semibold'>Prestataires qualifiés</h5>
                <p className='text-wrap mt-2 text-sm leading-loose'>
                    Tous les prestataires sont vérifiés, suivis et évalués pour chaque service rendu 
                    afin de vous garantir le meilleur niveau de satisfaction.
                </p>
            </div>
            <div className='w-[100%]'>
                <i className='text-green-600'><CreditCard size={25} /></i>
                <h5 className='mt-2 text-base font-semibold'>Budget respecté</h5>
                <p className='text-wrap mt-2 text-sm leading-loose'>
                    Tous les prix sont définis à l’avance, les prestataires s’engagent à les respecter. 
                    Toutes les rémunérations sont déclenchées en ligne après votre accord.
                </p>
            </div>
            <div className='w-[100%]'>
                <i className='text-green-600'><Phone size={25} /></i>
                <h5 className='mt-2 text-base font-semibold'>Service encadré</h5>
                <p className='text-wrap mt-2 text-sm leading-loose'>
                    Notre service client est à votre disposition 7j/7 pour vous assurer une expérience parfaite 
                    de la prise de commande jusqu'à la fin de la prestation.
                </p>
            </div>
        </div>
    </div>
  )
}

export default BadgesPlus
