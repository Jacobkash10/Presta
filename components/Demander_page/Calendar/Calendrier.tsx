"use client"

import React, { useState } from 'react'
import { Calendar } from "@/components/ui/calendar"

const Calendrier = () => {

    const [date, setDate] = React.useState<Date | undefined>(new Date())

    const onChange = (date: any) => {
      setDate(date)
    }

    

  return (
    <div className="mt-8 rounded-lg border px-10 py-6 flex flex-col items-center justify-center">
        <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
        <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>Quel jour vous convient le mieux ?</h3>
        <div className='mt-4'>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border w-[100%]"
          />
        </div>
    </div>
  )
}

export default Calendrier
