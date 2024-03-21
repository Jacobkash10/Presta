import { Button } from '@/components/ui/button'
import { Award, Star } from 'lucide-react'
import { ChevronRight } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Prestataires = () => {
  return (
    <div className='mt-5'>
      <h2 className='text-2xl font-bold'>Offres (10)</h2>
      <div className='mt-5 flex items-start gap-4 w-[100%]'>
            <div className='flex items-start gap-2 bg-secondary p-7 rounded-xl w-[60%]'>
                <div className="w-[20%]">
                    <Image src='/images/profil.png' width={0} height={0} alt='profil' sizes='100vw' className='w-[90%]' />
                </div>
                <div className='w-[80%]'>
                    <div className='flex items-center justify-between '>
                        <h5 className='text-xl font-bold'>Job</h5>
                        <h4 className='text-xl font-bold'>15 $</h4>
                    </div>
                    <div className="mt-1">
                        <i><Star size={20} color='orange' /></i>
                        <p className='text-sm mb-2'>4.5 (54 avis)</p>
                        <span className='py-1 px-3 rounded-2xl bg-green-700 text-xs font-[500]'>Excellente offre</span>
                    </div>
                    <div className='mt-5 bg-background p-5 rounded-xl'>
                        <div className="rounded-md">
                            <div className='border-b-2 pb-4 flex items-center gap-2'>
                                <span className='bg-secondary py-1 px-3'>12</span>
                                <p className='text-base font-bold'>Prestations de bricolage réalisées</p>
                            </div>
                            <div className='border-b-2 pb-4 pt-4'>
                                <div className="flex items-center gap-2">
                                    <i><Award size={22} /></i>
                                    <p className='text-sm'>2 à 4 ans d'epérience</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 pt-4'>
                                <span className='bg-secondary py-1 px-3 rounded-full text-sm'>Respect des lieux</span>
                                <span className='bg-secondary py-1 px-3 rounded-full text-sm'>Résultat impecable</span>
                                <span className='bg-secondary py-1 px-3 rounded-full text-sm'>Travail soigneux</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 bg-background p-5 rounded-xl'>
                        <p className='text-sm'>"Prestataire très efficace qui a effectué un travail soigné. Je recommande"</p>
                        <div className='flex items-center gap-2 mt-2'>
                            <div className='flex items-center gap-1'>
                                <i><Star size={14} className='text-green-600' /></i>
                                <i><Star size={14} className='text-green-600' /></i>
                                <i><Star size={14} className='text-green-600' /></i>
                                <i><Star size={14} className='text-green-600' /></i>
                                <i><Star size={14} className='text-green-600' /></i>
                            </div>
                            <p className='text-sm'>Jean</p>
                            <p className='text-sm'>Il y'a 1 semaine</p>
                        </div>
                    </div>
                    <div className='pt-4 flex flex-col items-center justify-center'>
                            <Button variant='default' className='py-5 w-[100%] bg-green-600 text-white hover:bg-green-700'><Link className='text-base' href={"/"}>Continuez avec Job</Link></Button>
                            <Button variant='default' className='py-5 mt-4 w-[100%]'><Link className='text-base' href={"/"}>Voir le profil</Link></Button>
                        </div>
                </div>
            </div>
            <div className='bg-secondary p-5 rounded-xl w-[40%]'>
                <h3 className='font-bold mb-5'>Besoin d'aide ?</h3>
                <div className='flex items-center justify-between border-b-2 pb-4 px-4'>
                    <h5 className='text-[15px]'>Questions fréquentes</h5>
                    <Link className='text-green-500' href={"/"}>Voir plus</Link>
                </div>
                <div className='border-b-2 py-4 hover:bg-background transition-all .3s px-4'>
                    <Link className='flex items-center justify-between' href={"/"}>
                        <span className='text-[14px]'>Comment choisir et reserver un prestataire ?</span>
                        <i><ChevronRight /></i>
                    </Link>
                </div>
                <div className='border-b-2 py-4 hover:bg-background transition-all .3s px-4'>
                    <Link className='flex items-center justify-between' href={"/"}>
                        <span className='text-[14px]'>Comment modifier la date ou l'heure de ma demande ?</span>
                        <i><ChevronRight /></i>
                    </Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Prestataires
