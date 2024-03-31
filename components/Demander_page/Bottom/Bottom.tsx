import { Button } from '@/components/ui/button'
import React from 'react'

const Bottom = () => {
  return (
    <div className="fixed bottom-0 right-0 left-0 bg-secondary p-3">
        <div className='flex items-center justify-center gap-[15rem]'>
            <Button variant='default' disabled className='py-6'>Retour</Button>
            <Button type='submit' variant='default' className='py-6 bg-green-600 text-white hover:bg-green-700'>Suivant</Button>
        </div>
    </div>
  )
}

export default Bottom
