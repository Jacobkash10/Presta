"use client"

import React, { useEffect, useState } from 'react'
import Filtre from '../Filtre/Filtre'
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
    <div>
        <div className='flex flex-col justify-center xs:items-center mt-5'>
            <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-2 xs:text-center'>Choisissez votre <span className='text-green-600'>prestataire les yeux fermés</span></h3>
            <p className='max-w-lg mb-1 text-sm sm:text-base xs:text-center'>Evaluations, badges qualité, expérience et matériel: vous avez toutes les clés pour faire le bon choix</p>
            <Filtre />
            <div className='grid grid-cols-1 sm:grid-cols-2 nine:grid-cols-3 gap-6 md:gap-10 mt-10 border-b-[1px] pb-10'>
                {
                    prestataire.map((item: any) => (
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
                            <div className="bg-secondary text-sm  max-w-fit p-2 rounded-md">
                                <h5>{item.metier}</h5>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <i><Award size={22} /></i>
                                <p className='text-sm'>2 à 4 ans d'epérience</p>
                            </div>
                        </div>
                        <div className='pt-4 flex flex-col items-center justify-center'>
                            <Button variant='default' className='py-5 w-[100%] bg-green-600 text-white hover:bg-green-700'><Link className='text-sm' href={"/"}>Demander ce prestataire</Link></Button>
                            <Button variant='secondary' className='py-5 mt-4 w-[100%]'><Link className='text-sm' href={"/"}>Voir le profil</Link></Button>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
        <div className="mt-12 flex items-center gap-10">
            <div className="flex items-center gap-5">
                <Button variant='secondary' className='py-6 mt-4 w-[100%]'>1</Button>
                <Button variant='secondary' className='py-6 mt-4 w-[100%]'>2</Button>
                <Button variant='secondary' className='py-6 mt-4 w-[100%]'>3</Button>
            </div>
            <div className="">
                <Button variant='secondary' className='py-6 mt-4 w-[100%]'>Suivant</Button>
            </div>
        </div>
    </div>
  )
}

export default Prestataires
