import React from 'react'
import { Clock7 } from 'lucide-react';
import { MapPin } from 'lucide-react';

const Annonce = () => {
  return (
    <div className='mt-32 flex flex-col items-center justify-center relative min-h-[60vh]'>
        <h3 className='text-3xl font-bold mb-2'>Nos dernières <span className='text-green-600'>annonces de bricolage</span></h3>
        <div className='grid grid-cols-3 gap-4 mt-10'>
            <div className='w-[100%] p-[1rem] rounded-md border'>
                <div className='flex justify-between items-center border-b-2 pb-3'>
                    <h5>Florence</h5>
                    <h5>72.00 $</h5>
                </div>
                <div className='py-4 border-b-2 '>
                    <h5 className='text-base font-semibold mb-7'>Montage des meubles</h5>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eaque? Tempora esse voluptatibus laboriosam quod!</p>
                </div>
                <div className='mt-5 flex items-center gap-3'>
                    <div className='flex items-center gap-2 pt-4'>
                        <i><Clock7 size={20} /></i>
                        <h6 className='text-sm'>Il y'a 3 jours</h6>
                    </div>
                    <div className='flex items-center gap-2 pt-4'>
                        <i><MapPin size={20} /></i>
                        <h6 className='text-sm'>Casablanca</h6>
                    </div>
                </div>
            </div>
            <div className='w-[100%] p-[1rem] rounded-md border'>
                <div className='flex justify-between items-center border-b-2 pb-3'>
                    <h5>Florence</h5>
                    <h5>72.00 $</h5>
                </div>
                <div className='py-4 border-b-2 '>
                    <h5 className='text-base font-semibold mb-7'>Réparation d'un meuble</h5>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eaque? Tempora esse voluptatibus laboriosam quod!</p>
                </div>
                <div className='mt-5 flex items-center gap-3'>
                    <div className='flex items-center gap-2 pt-4'>
                        <i><Clock7 size={20} /></i>
                        <h6 className='text-sm'>Il y'a 3 jours</h6>
                    </div>
                    <div className='flex items-center gap-2 pt-4'>
                        <i><MapPin size={20} /></i>
                        <h6 className='text-sm'>Casablanca</h6>
                    </div>
                </div>
            </div>
            <div className='w-[100%] p-[1rem] rounded-md border'>
                <div className='flex justify-between items-center border-b-2 pb-3'>
                    <h5>Florence</h5>
                    <h5>72.00 $</h5>
                </div>
                <div className='py-4 border-b-2 '>
                    <h5 className='text-base font-semibold mb-7'>Démonter un meuble</h5>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eaque? Tempora esse voluptatibus laboriosam quod!</p>
                </div>
                <div className='mt-5 flex items-center gap-3'>
                    <div className='flex items-center gap-2 pt-4'>
                        <i><Clock7 size={20} /></i>
                        <h6 className='text-sm'>Il y'a 3 jours</h6>
                    </div>
                    <div className='flex items-center gap-2 pt-4'>
                        <i><MapPin size={20} /></i>
                        <h6 className='text-sm'>Casablanca</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Annonce
