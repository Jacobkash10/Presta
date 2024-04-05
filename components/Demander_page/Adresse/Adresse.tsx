import { Input } from '@/components/ui/input'
import React from 'react'
import { ShieldCheck } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Search } from 'lucide-react'

const Adresse = ({reservation, setReservation}: any) => {
  return (
    <div className="mt-8 rounded-lg border px-10 py-6 flex flex-col items-center justify-center">
        <h5 className='mb-2 font-bold text-center'>Montage de meubles</h5>
        <h3 className='mb-3 font-bold text-center text-2xl max-w-md'>Quelle est l'adresse de la prestation ?</h3>
        <div className='mt-3 w-[100%] flex flex-col items-center justify-center'>
        <Input
        type='text' 
        value={reservation.address}
        onChange={e => setReservation({ ...reservation, address: e.target.value })}
        className='w-[40%] py-7  transition-all .3s' 
        placeholder='Saisissez votre adresse' required/>
            {/* <Dialog>
                    <DialogTrigger asChild>
                      <Input className='w-[40%] py-7 cursor-pointer hover:bg-slate-200 transition-all .3s' placeholder='Saisissez votre adresse'/>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] p-2">
                        <DialogHeader>
                            <DialogTitle className="flex items-center gap-3 border-b pl-2 mb-2">
                            <Search size={18} />
                            <Input
                                id=""
                                placeholder="Saisissez votre adresse"
                                className="w-[87%] border-none"
                                />
                            </DialogTitle>
                            <DialogDescription className="grid grid-cols-1 gap-3">
                                
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog> */}
        </div>
        <div className='mt-2 border flex items-start gap-2 p-4 w-[40%] rounded-md'>
            <i><ShieldCheck /></i>
            <h5 className='max-w-md text-sm'>Ces informations seront transmises uniquement aux prestataires que vous réserverez.</h5>
        </div>
    </div>
  )
}

export default Adresse
