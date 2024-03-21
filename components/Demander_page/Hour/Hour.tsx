import React from 'react'
import { Clock9 } from 'lucide-react';
import { Clock2 } from 'lucide-react';
import { Clock6 } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hour = () => {
  return (
    <div className="mt-8 rounded-lg border px-10 py-5 flex flex-col items-center justify-center">
        <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
        <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>De combien d’heures de service avez-vous besoin ?</h3>
        <div className="grid grid-cols-3 gap-2 w-[45%] mt-6">
            <div className="">
                <div className="border-[1px] border-slate-300 flex flex-col items-center justify-center p-12 rounded-md hover:border-green-300 cursor-pointer transition-all .3s">
                    <i><Clock2 /></i>
                    <h5>2h00</h5>
                </div>
                <div className="mt-2">
                    <h5 className='font-semibold text-sm'>Court</h5>
                    <p className='text-xs'>Exemple : 2 à 4 chaises, fauteuils...</p>
                </div>
            </div>
            <div className="">
                <div className="border-[1px] border-slate-300 flex flex-col items-center justify-center p-12 rounded-md hover:border-green-300 cursor-pointer transition-all .3s">
                    <i><Clock6 /></i>
                    <h5>4h00</h5>
                </div>
                <div className="mt-2">
                    <h5 className='font-semibold text-sm'>Classique</h5>
                    <p className='text-xs'>Exemple : Une commode et un lit...</p>
                </div>
            </div>
            <div className="">
                <div className="border-[1px] border-slate-300 flex flex-col items-center justify-center p-12 rounded-md hover:border-green-300 cursor-pointer transition-all .3s">
                    <i><Clock9 /></i>
                    <h5>6h00</h5>
                </div>
                <div className="mt-2">
                    <h5 className='font-semibold text-sm'>Long</h5>
                    <p className='text-xs'>Exemple : Une grande armoire ou plusieurs meubles...</p>
                </div>
            </div>
        </div>
        <div className="my-12">
            <h5>Ou</h5>
        </div>
        <div className="">
            <h5 className='font-semibold mb-2'>Ajuster le nombre d’heure manuellement</h5>
            <div className="flex items-center justify-center gap-4 mt-5 border-[1px] p-5 border-slate-200">
                <Button variant='default' className='py-6 px-3 rounded-full bg-green-600 text-white hover:bg-green-400'><i><Plus /></i></Button>
                <h5 className='font-bold'>4h00</h5>
                <Button variant='default' className='py-6 px-3 rounded-full bg-green-600 text-white hover:bg-green-400'><i><Minus /></i></Button>
            </div>
        </div>
      </div>
  )
}

export default Hour
