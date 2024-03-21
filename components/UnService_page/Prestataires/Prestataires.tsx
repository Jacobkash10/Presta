"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react';
import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import prestataires from '@/app/(site)/data/prestataires'
import Link from 'next/link';

const Prestataires = () => {

    const [prestataire, setPrestataire] = useState(prestataires)

    useEffect(() => {
        setPrestataire(prestataires)
    }, [])

  return (
    <div className='mt-32'>
        <div className='flex flex-col items-center justify-center'>
            <h3 className='text-3xl text-center font-bold mb-1'>Trouvez <span className='text-green-600'>un bricoleur</span> proche de chez vous</h3>
            <p className='text-center max-w-md'>Evaluations, badges qualité, expérience et matériel: vous avez toutes les clés pour faire le bon choix</p>
        </div>
        <div className='grid grid-cols-3 gap-20 mt-10 pb-6'>
                {
                    prestataire?.slice(0, 3)?.map((item: any) => (
                        <div className='border-[1px] py-5 px-5 rounded-lg' key={item.id}>
                            <div className='flex flex-col items-center justify-center border-b-[1px] pb-3'>
                                <div className="w-[20%]">
                                    <Image src='/images/profil.png' width={0} height={0} alt='profil' sizes='100vw' className='w-[100%]' />
                                </div>
                                <div className="mb-2">
                                    <h5 className='text-sm font-bold'>{item.firstname} {item.name}</h5>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <i><Star size={20} className='text-green-600' /></i>
                                    <p className='text-sm '>4.5 (54 avis)</p>
                                </div>
                            </div>
                            <div className='py-3 border-b-[1px]'>
                                <div className="bg-secondary max-w-fit text-sm p-2 rounded-md">
                                    <h5>{item.metier}</h5>
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <i><Award size={22} /></i>
                                    <p className='text-sm'>2 à 4 ans d'epérience</p>
                                </div>
                            </div>
                            <div className='pt-4 flex flex-col items-center justify-center'>
                                <Button variant='default' className='py-5 w-[100%] bg-green-600 text-white hover:bg-green-700'><Link className='text-sm' href={"/"}>Demander ce prestataire</Link></Button>
                                <Button variant='default' className='py-5 mt-4 w-[100%]'><Link className='text-sm' href={"/"}>Voir le profil</Link></Button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Link className='text-green-500 hover:text-green-700 text-xl' href={"/Nos_prestataires"}>Voir d'aurtres</Link>
    </div>
  )
}

export default Prestataires