import React, { useEffect, useState } from 'react'
import Filtre from '../Filtre/Filtre'
import Image from 'next/image'
import { Star } from 'lucide-react';
import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Pagination from './Pagination';
import { db } from '@/lib/db';


const Prestataires = async () => {
    const prestataires = await db.provider.findMany({
        include: {
            category: true
        }
    })

    const res = prestataires
    

  return (
    <div>
        <div className='flex flex-col justify-center xs:items-center mt-5'>
            <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-2 xs:text-center'>Choisissez votre <span className='text-green-600'>prestataire les yeux fermés</span></h3>
            <p className='max-w-lg mb-1 text-sm sm:text-base xs:text-center'>Evaluations, badges qualité, expérience et matériel: vous avez toutes les clés pour faire le bon choix</p>
            <Filtre />
            <div className='grid grid-cols-1 sm:grid-cols-2 nine:grid-cols-3 gap-6 md:gap-10 mt-10 border-b-[1px] pb-10'>
                { res.length > 0 ?
                    res?.map((item: any) => (
                    <div className='border-[1px] py-5 px-5 rounded-lg' key={item.id}>
                        <div className='flex flex-col items-center justify-center border-b-[1px] pb-3'>
                            <div className="w-[20%]">
                                <Image src='/images/profil.png' width={0} height={0} alt='profil' sizes='100vw' className='w-[100%]' />
                            </div>
                            <div className="mb-2 mt-2">
                                <h5 className='text-base font-bold'>{item.name}</h5>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <i><Star size={20} className='text-green-600' /></i>
                                <p className='text-sm '>{item.note} (54 avis)</p>
                            </div>
                        </div>
                        <div className='py-3 border-b-[1px]'>
                            <div className="bg-secondary text-sm  max-w-fit p-2 rounded-md">
                                <h5>{item.category.name_cate}</h5>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                                <i><Award size={22} /></i>
                                <p className='text-sm'>2 à 4 ans d'expériences</p>
                            </div>
                        </div>
                        <div className='pt-4 flex flex-col items-center justify-center'>
                            <Button variant='default' className='py-5 w-[100%] bg-green-600 text-white hover:bg-green-700'>
                                <Link className='text-sm' href={"/"}>
                                    Demander ce prestataire
                                </Link>
                            </Button>
                            <Button variant='outline' className='py-5 mt-4 w-[100%]'>
                                <Link className='text-sm' href={`/Prestataire/${item.slug}`}>
                                    Voir le profil
                                </Link>
                            </Button>
                        </div>
                    </div>
                    ))
                    :

                    [1,2,3,4,5,6].map((item, index) => (
                    <div key={index} className='h-[17rem] w-full bg-slate-200 animate-pulse rounded-lg'></div>
                    ))
                }
            </div>
        </div>
        <Pagination />
    </div>
  )
}

export default Prestataires
