import React from 'react'
import { ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

const Phone = ({reservation, setReservation}: any) => {
  return (
    <div className="mt-8 rounded-lg border px-10 py-6 flex flex-col items-center justify-center">
        <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
        <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>À quel numéro de téléphone le prestataire pourra-t-il vous joindre ?</h3>
        <div className='mt-3 w-[100%] flex flex-col items-center justify-center'>
            <div className='flex items-center gap-2 w-[100%] justify-center'>
                <Select>
                    <SelectTrigger className="w-[8%] py-7">
                        <SelectValue placeholder="MA" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectItem value="apple">MA</SelectItem>
                        <SelectItem value="banana">RDC</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Input 
                value={reservation.tel}
                onChange={e => setReservation({ ...reservation, tel: e.target.value })}
                className='w-[32%] py-7 bg-white transition-all .3s' 
                placeholder='06 23 65 87 00' required/>
            </div>
        </div>
        <div className='mt-2 border-[.1rem] flex items-start gap-2 p-4 w-[40%] rounded-md'>
            <i><ShieldCheck /></i>
            <h5 className='max-w-md text-sm'>Ces informations seront transmises uniquement aux prestataires que vous réserverez.</h5>
        </div>
    </div>
  )
}

export default Phone