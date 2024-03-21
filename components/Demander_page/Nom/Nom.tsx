"use client"

import { Input } from '@/components/ui/input'
import React from 'react'

const Nom = () => {
  return (
    <div>
      <div className="mt-8 rounded-lg border px-10 py-6 flex flex-col items-center justify-center">
            <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
            <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>Quel est votre nom ?</h3>
            <div className='mt-3 w-[100%] flex flex-col items-center justify-center'>
                <Input type='text' className='w-[40%] bg-white cursor-pointer hover:bg-slate-200 transition-all .3s' placeholder=''/>
            </div>
        </div>
    </div>
  )
}

export default Nom
