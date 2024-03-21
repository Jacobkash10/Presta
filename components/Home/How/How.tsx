import React from 'react'
import { Quote, SquareStack } from 'lucide-react';
import { Users } from 'lucide-react';
import { CalendarCheck2 } from 'lucide-react';

const How = () => {
  return (
    <div className="mt-32 w-[100%]">
        <h3 className='text-xl sm:text-2xl lg:text-3xl text-center font-bold'>Comment ça <span className='text-green-600'>marche ?</span></h3>
        <div className='mt-10 block sm:grid md:grid-cols-2 lg:grid-cols-3 gap-2'>
            <div className="w-[100%] mt-6 md:mt-0 flex items-center justify-center flex-col rounded-lg">
                <i className=' mb-5 bg-green-600 text-white rounded-full p-4 xs:p-5'><SquareStack size={50} /></i>
                <h5 className='text-lg font-semibold mb-5'>Demandez un service</h5>
                <p className='text-base text-center border rounded-lg p-4'>
                    <Quote />
                    Remplissez le formulaire et obtenez une estimation du prix et de la durée
                </p>
            </div>
            <div className="w-[100%] mt-6 md:mt-0 flex items-center justify-center flex-col rounded-lg">
                <i className=' mb-5 bg-green-600 text-white rounded-full p-4 xs:p-5'><Users size={50} /></i>
                <h5 className='text-lg font-semibold mb-5'>Réservez votre prestataire</h5>
                <p className='text-base text-center border rounded-lg p-4'>
                    <Quote />
                    Des prestataires compétents et proches de chez vous vous proposent leurs services
                </p>
            </div>
            <div className="w-[100%] mt-6 lg:mt-0 flex items-center justify-center flex-col rounded-lg">
                <i className=' mb-5 bg-green-600 text-white rounded-full p-4 xs:p-5'><CalendarCheck2 size={50} /></i>
                <h5 className='text-lg font-semibold mb-5'>Souriez, c'est fait !</h5>
                <p className='text-base text-center border rounded-lg p-4'>
                <Quote />
                    Votre prestataire vous rend service au prix et à la date convenus
                </p>
            </div>
        </div>
      </div>
  )
}

export default How
