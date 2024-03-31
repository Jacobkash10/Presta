"use client"

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const Pass = () => {
  return (
    <div>
      <div className="mt-8 rounded-lg border px-10 py-6 flex flex-col items-center justify-center">
            <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
            <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>Et pour finir, choisissez un mot de passe</h3>
            <div className='mt-3 w-[100%] flex flex-col items-center justify-center'>
                <Input type='password' className='w-[40%] py-7 bg-white transition-all .3s' placeholder=''/>
            </div>
            <div className='mt-4 w-[50%] flex items-center justify-between'>
                <div className='p-[.3rem] bg-green-600 w-[20%] rounded-xl'>
                </div>
                <h5 className='text-sm'>Securisé</h5>
            </div>
            <div className='mt-5 w-[50%] flex flex-col items-start justify-center border-t-2 border-primary'>
                <div className='flex items-center gap-2 mt-4'>
                    <Checkbox />
                    <h5 className=' text-sm'>Je souhaite être informé des nouveautés, cadeaux et bons plans</h5>
                </div>
                <div className='flex items-center gap-2 mt-4'>
                    <Checkbox />
                    <h5 className=' text-sm'>Je souhaite recevoir les bons plans des partenaires</h5>
                </div>
                <div className='mt-4'>
                    <div className='text-xs'>
                        <span>
                            En vous inscrivant vous acceptez les <Link className='text-blue-600' href={"/"}>conditions générales</Link> et la 
                            <Link className='text-blue-600' href={"/"}> politique de confidentialité</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pass
