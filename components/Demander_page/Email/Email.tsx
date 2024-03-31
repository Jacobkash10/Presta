import { Input } from '@/components/ui/input'
import React from 'react'

const Email = () => {
  return (
    <div>
      <div className="mt-8 rounded-lg border px-10 py-6 flex flex-col items-center justify-center">
            <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
            <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>Quelle est votre adresse e-mail ?</h3>
            <div className='mt-3 w-[100%] flex flex-col items-center justify-center'>
                <Input type='email' className='w-[40%] py-7 bg-white cursor-pointer hover:bg-slate-200 transition-all .3s' placeholder='jhondoe@gmail.com'/>
            </div>
            <div className='mt-2 w-[40%]'>
                <h5 className='max-w-md text-sm'>Votre adresse e-mail vous permettra de retrouver ou modifier votre demande quand vous voudrez.</h5>
            </div>
        </div>
    </div>
  )
}

export default Email
