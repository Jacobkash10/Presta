import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export async function fetchPrestataires() {
      const res = await fetch('http://localhost:3000/api/prestataires', {
          next: {
              revalidate: 10
          }
      })
  
      const data = await res.json()
      return data
  }

const Others = async ({providers}: any) => {

      const allPrestataires = await fetchPrestataires()

      const res = allPrestataires.providers

  return (
    <div className='mt-28'>
      <h2 className='text-3xl text-center font-bold mb-1'>Quels sont les autres prestataires situés à ... ?</h2>
      <div className='grid grid-cols-4 gap-9'>
            {
                  res?.slice(0, 4)?.map((item: any) => (
                  <div key={item.id} className='mt-12 flex flex-col items-center justify-center border py-6 px-6 rounded-lg'>
                        <div className="w-[30%]">
                              <Image src='/images/profil.png' width={0} height={0} alt='profil' sizes='100vw' className='w-[100%]' />
                        </div>
                        <div className="mb-2 mt-2">
                              <h5 className='text-lg font-bold'>{item.name}</h5>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                              <i><Star size={20} className='text-green-600' /></i>
                              <p className='text-sm '>4 (54 avis)</p>
                        </div>
                        <div className='mt-4'>
                              <p>13 prestations réalisées</p>
                        </div>
                        <div className='w-full'>
                              <Button variant='outline' className='py-5 mt-4 w-[100%]'>
                                    <Link className='text-sm' href={`/Prestataire/${item.slug}`}>
                                          Voir le profil
                                    </Link>
                              </Button>
                        </div>
                  </div>
                  ))
            }
      </div>
    </div>
  )
}

export default Others