"use client"

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from "@/components/ui/textarea"
import React from 'react'

const Precision = () => {
  return (
    <div className="mt-8 rounded-lg border px-10 py-6 flex flex-col items-center justify-center">
        <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
        <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>Avez-vous des précisions à apporter ?</h3>
        <div className='mt-3 w-[100%] flex flex-col items-center justify-center'>
            <div className='w-[100%] flex flex-col justify-center items-center'>
                <div className='flex justify-between w-[40%] items-center mb-2'>
                    <Label>Titre de la demande</Label>
                    <h5 className='text-sm'>23/80</h5>
                </div>
                <Input className='w-[40%] bg-white transition-all .3s' placeholder='' value="Montage de meubles"/>
            </div>
            <div className='w-[100%] flex flex-col justify-center items-center mt-7'>
                <div className='flex justify-between w-[40%] items-center mb-2'>
                    <Label>Détails supplémentaires</Label>
                    <h5 className='text-sm'>(optionnel)</h5>
                </div>
                <Textarea placeholder="Type your message here." className='w-[40%] min-h-[140px]' />
            </div>
        </div>
    </div>
  )
}

export default Precision
