import React from 'react'
import { Clock7 } from 'lucide-react';
import { MapPin } from 'lucide-react';

const Annonce = () => {
  return (
    <div className='mt-32 flex flex-col sm:items-center justify-center relative min-h-[60vh]'>
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-1 xs:text-center'>Nos dernières <span className='text-green-600'>annonces</span></h3>
        <div className='sm:grid gap-5 mt-6 block xs:grid-cols-2 nine:grid-cols-3'>
            <div className='w-[100%] p-[1rem] rounded-md border mb-5 sm:mb-0'>
                <div className='flex justify-between items-center border-b-2 pb-3'>
                    <h5>Florence</h5>
                    <h5>72.00 $</h5>
                </div>
                <div className='py-4 border-b-2 '>
                    <h5 className='text-base font-semibold mb-7'>Installer une prise</h5>
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
            <div className='w-[100%] p-[1rem] rounded-md border mb-5 sm:mb-0'>
                <div className='flex justify-between items-center border-b-2 pb-3'>
                    <h5>Florence</h5>
                    <h5>72.00 $</h5>
                </div>
                <div className='py-4 border-b-2 '>
                    <h5 className='text-base font-semibold mb-7'>Déboucher un évier</h5>
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
        </div>
    </div>
  )
}

export default Annonce
