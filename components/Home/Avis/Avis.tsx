"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Img from '../../../public/images/profil.png'
import { Clock7 } from 'lucide-react';
import Link from 'next/link';

import { ChevronRight } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import avis from '@/app/(site)/data/avis';

const Avis = () => {

    const [aviss, setAvis] = useState(avis)

    useEffect(() => {
        setAvis(avis)
    }, [])

  return (
    <div className='mt-32 py-10 rounded-xl flex flex-col items-center justify-center'>
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-2'>Les <span className='text-green-600'>avis</span> des clients</h3>
        <p className='text-sm sm:text-base max-w-xl mb-2 text-center font-medium'>La satisfaction de nos utilisateurs est notre priorité. 
            Vous souhaitez être convaincu que Presta est la bonne plateforme ? <br /> 
            Découvrez les avis !
        </p>
        <div className='border-input w-[80%] rounded-lg flex flex-col items-center justify-center py-5'>
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-[100%] mt-10 px-6"
                >
                <CarouselContent>
                    {aviss?.slice(0, 5)?.map((item: any) => (
                    <CarouselItem key={item.id} className="w-[100%] lg:basis-1/3">
                        <div className="p-1">
                            <div className='w-[100%] bg-secondary rounded-md border' key={item.id}>
                                    <div className='flex justify-between items-center px-4 py-3'>
                                        <Image src={item.src} alt='avis image' className='w-[10%] object-contain' width={0} height={0} sizes='100vw' />
                                        <h5 className='text-sm'>{item.name}</h5>
                                    </div>
                                    <div className='py-4 p-4'>
                                        <p className='text-sm'>{item.content}</p>
                                    </div>
                                    <div className='flex items-center gap-4 p-4'>
                                        <i><Clock7 size={16} /></i>
                                        <h6 className='text-xs'>Il y'a 3 jours</h6>
                                    </div>
                                </div>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            
            <Link className='mt-8 underline text-lg flex items-center gap-2 hover:text-green-600 transition-all .3s' href={"/Avis"}>
                <h6>Voir d'autres avis</h6><i><ChevronRight size={20} /></i>
            </Link>
        </div>
    </div>
  )
}

export default Avis
