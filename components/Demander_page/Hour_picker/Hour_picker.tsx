import { Button } from '@/components/ui/button'
import React from 'react'

const Hour_picker = () => {
  return (
    <div className="mt-8 rounded-lg border px-10 py-6 flex flex-col items-center justify-center">
        <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
        <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>Quelle heure vous convient le mieux ?</h3>
        <div className='mt-4 grid grid-cols-6 grid-rows-3 gap-2'>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            09:00
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            09:30
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            10:00
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            10:30
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            11:00
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            11:30
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            12:00
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            12:30
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            13:00
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            13:30
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            14:00
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            14:30
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            15:00
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            15:30
          </Button>
          <Button variant='default' className='py-3 px-5 rounded-full bg-green-600 text-white hover:bg-orange-400'>
            16:00
          </Button>
        </div>
    </div>
  )
}

export default Hour_picker
