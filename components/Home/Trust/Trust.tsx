import React from 'react'
import { Briefcase } from 'lucide-react';
import { User } from 'lucide-react';
import { Star } from 'lucide-react';

const Trust = () => {
  return (
    <div className="border mt-32 p-8 rounded-2xl">
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold'>Spécialiste du <span className='text-green-600'>service</span></h3>
        <p className='text-sm xs:text-md sm:text-base mt-1 max-w-xl'>Tentez l’expérience et faites nous confiance comme plus de 35 clients qui aujourd’hui profitent de leur temps libre.</p>
        <div className='grid sm:grid-cols-1 nine:grid-cols-3 gap-4 mt-6'>
            <div className='w-[w-100%] flex items-center gap-4'>
                <div className="bg-primary p-3 sm:p-5 rounded-full">
                    <i className='text-background'><Briefcase size={30} /></i>
                </div>
                <div className=''>
                    <h5 className='text-2xl font-bold'>100</h5>
                    <p className='text-base'>Services réalisés</p>
                </div>
            </div>
            <div className='w-[w-100%] flex items-center gap-4'>
                <div className="bg-primary p-3 sm:p-5 rounded-full">
                    <i className='text-background'><User size={30} /></i>
                </div>
                <div className=''>
                    <h5 className='text-2xl font-bold'>40</h5>
                    <p className='text-base'>Prestataires actifs</p>
                </div>
            </div>
            <div className='w-[w-100%] flex items-center gap-4'>
                <div className="bg-primary p-3 sm:p-5 rounded-full">
                    <i className='text-background'><Star size={30} /></i>
                </div>
                <div className=''>
                    <h5 className='text-2xl font-bold'>4/5</h5>
                    <p className='text-base'>Note moyenne des prestataires</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trust
