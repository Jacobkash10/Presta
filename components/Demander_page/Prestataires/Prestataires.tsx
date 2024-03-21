import { Button } from '@/components/ui/button'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

const Prestataires = () => {
  return (
    <div className="mt-8 rounded-lg border px-10 py-5 flex flex-col items-center justify-center">
        <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
        <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>Combien de prestataires vous faut-il ?</h3>
        <div className="flex items-center justify-center gap-4 mt-5 p-4">
            <Button variant='default' className='py-6 px-3 rounded-full bg-green-600 text-white hover:bg-green-400'><i><Plus /></i></Button>
            <h5 className='font-bold'>1</h5>
            <Button variant='default' className='py-6 px-3 rounded-full bg-green-600 text-white hover:bg-green-400'><i><Minus /></i></Button>
        </div>
    </div>
  )
}

export default Prestataires
