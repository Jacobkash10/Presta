import React from 'react'
import { UserCheck } from 'lucide-react';
import { Phone } from 'lucide-react';

const Top = () => {
  return (
    <div className="fixed left-0 right-0 top-0 bg-background mt-[3.5rem]">
        <div className="flex items-center justify-center gap-[12rem] pt-4 pb-1">
          <div className="flex flex-col items-center justify-center">
            <i><UserCheck size={20} /></i>
            <h4 className='text-sm'>Prestation encadrée et profils vérifiés</h4>
          </div>
          <div className="flex flex-col items-center justify-center">
            <i><Phone size={20} /></i>
            <h4 className='text-sm'>Service client 6j/7 de 9h à 18h</h4>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-1 bg-primary w-[100%] p-[.1rem]">
          <div className="w-[100%] p-[.1rem] bg-secondary"></div>
          <div className="w-[100%] p-[.1rem]"></div>
          <div className="w-[100%] p-[.1rem]"></div>
          <div className="w-[100%] p-[.1rem]"></div>
        </div>
      </div>
  )
}

export default Top
