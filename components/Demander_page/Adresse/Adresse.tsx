import { Input } from '@/components/ui/input'
import React from 'react'
import { ShieldCheck } from 'lucide-react';

const Adresse = () => {
  return (
    <div className="mt-8 rounded-lg border px-10 py-6 flex flex-col items-center justify-center">
        <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
        <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>Quelle est l'adresse de la prestation ?</h3>
        <div className='mt-3 w-[100%] flex flex-col items-center justify-center'>
            <Input className='w-[40%] bg-white cursor-pointer hover:bg-slate-200 transition-all .3s' placeholder='Saisissez votre adresse'/>
        </div>
        <div className='mt-2 border flex items-start gap-2 p-4 w-[40%] rounded-md'>
            <i><ShieldCheck /></i>
            <h5 className='max-w-md text-xs'>Ces informations seront transmises uniquement aux prestataires que vous réserverez.</h5>
        </div>
    </div>
  )
}

export default Adresse