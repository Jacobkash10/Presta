import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const Hour_picker = ({reservation, setReservation}: any) => {
  return (
    <div className="mt-8 rounded-lg border px-10 py-6 flex flex-col items-center justify-center">
        <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
        <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>Quelle heure vous convient le mieux ?</h3>
        <div className='mt-5 w-full flex flex-col items-center justify-center'>
          <Input
          name="hour"
          required
          value={reservation.hour}
          onChange={e => setReservation({ ...reservation, hour: e.target.value })}
          type='text' className='w-[40%] py-7' />
        </div>
    </div>
  )
}

export default Hour_picker
