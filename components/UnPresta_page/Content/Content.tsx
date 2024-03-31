import { Button } from '@/components/ui/button'
import { Award, Globe, GraduationCap, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Content = ({providers}: any) => {
  return (
    <div className='flex items-start gap-28 w-full'>
      <div className='flex flex-col items-center justify-center w-[30%] border rounded-lg p-4'>
            <div className="w-[50%]">
                  <Image src='/images/profil.png' width={0} height={0} alt='profil' sizes='100vw' className='w-[100%]' />
            </div>
            <div className='mt-3 flex items-center gap-2'>
                  <i><Star size={20} className='text-green-600' /></i>
                  <h5>4,7</h5>
                  <p className='text-slate-400'>(12 avis)</p>
            </div>
            <div className='mt-3'>
                  <h4 className='text-base font-semibold'>20 prestation(s) réalisée(s)</h4>
            </div>
            <div className='mt-6'>
                  <Button variant='default' className='py-5 w-[100%]'>
                        <Link className='text-lg' href={"/"}>
                              Demander un service
                        </Link>
                  </Button>
            </div>
      </div>
      <div className='w-[70%]'>
            <div>
                  <h2 className='text-3xl font-bold'>{providers?.provider.name}</h2>
                  <p className='text-sm mt-1'>Membre depuis 2 ans</p>
            </div>
            <div className='mt-6'>
                  <span className='bg-secondary p-2 max-w-fit'>{providers.provider?.category.name_cate}</span>
                  <p className='mt-2 max-w-xl text-[15px] text-secondary-foreground'>
                        Issu du bâtiment ,bon bricoleur, peinture, tapisserie, assemblage de meubles, pose de cuisines, 
                        électricité, plomberie(sans soudure)
                  </p>
            </div>
            <div className='mt-4 flex items-center gap-2'>
                  <i><Globe size={18} /></i>
                  <p>Parle Portugais, Allemand, Français</p>
            </div>
            <div className='border-t mt-6'>
                  <h5 className='mt-6 font-bold'>Diplômes et expériences</h5>
                  <span className='mt-2 flex items-center gap-2'>
                        <i><Award size={18} /></i>
                        <p className='text-sm'>2 à 4 ans d'epérience</p>
                  </span>
                  <span className='mt-2 flex items-center gap-2'>
                        <i><GraduationCap size={18} /></i>
                        <p className='text-sm'>Diplôme de premier secours</p>
                  </span>
            </div>
            <div className='border-t mt-6'>
                  <h5 className='mt-4 font-bold'>Mes engagements clients</h5>
                  <div className='flex items-center gap-2 mt-2'>
                        <span className='rounded-lg p-2 bg-secondary text-sm'>Résultat impeccable</span>
                        <span className='rounded-lg p-2 bg-secondary text-sm'>Organisé et méthodique</span>
                        <span className='rounded-lg p-2 bg-secondary text-sm'>Résultat garanti</span>
                  </div>
            </div>
            <div className='mt-6 border-t'>
                  <h5 className='mt-6 font-bold'>Avis et commentaires (1)</h5>
                  <div className='mt-2'>
                        <span className='flex items-center gap-2'>
                              <i><Star size={36} className='text-green-600' /></i>
                              <h5>4,7</h5>
                        </span>
                  </div>
                  <div className='mt-10 flex items-start gap-6'>
                        <div className='flex flex-col items-center justify-center'>
                              <div className='bg-primary w-16 h-16 rounded-full flex justify-center items-center'>
                                    <p className=' text-background font-bold'>P</p>
                              </div>
                              <h5 className='font-semibold'>Pierre</h5>
                              <p className='text-sm text-slate-400'>Il y'a 16h</p>
                        </div>
                        <div>
                              <h5 className='font-semibold bg-secondary p-1 max-w-fit'><Link href={'/'}>Peinture interieure</Link></h5>
                              <span></span>
                              <p className='mt-1'>Il est très efficace et fait de l’excellent travail. Je le recommande.</p>
                        </div>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Content
