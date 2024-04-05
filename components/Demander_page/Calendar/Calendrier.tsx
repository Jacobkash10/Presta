"use client"

import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"
import { Input } from '@/components/ui/input'


const Calendrier = ({reservation, setReservation}: any) => {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    const onChange = (date: any) => {
      setDate(date)
    }

    

  return (
    <div className="mt-8 rounded-lg border px-10 py-6 flex flex-col items-center justify-center">
        <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
        <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>Quel jour vous convient le mieux ?</h3>
        <div className='mt-4 w-full flex flex-col items-center justify-cente '>
          {/* <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-[100%]"
          /> */}
          <Input
          name="hour"
          required
          value={reservation.date_reservation}
          onChange={e => setReservation({ ...reservation, date_reservation: e.target.value })}
          type='text' className='w-[40%] py-7' />
        </div>
    </div>
  )
}

export default Calendrier
