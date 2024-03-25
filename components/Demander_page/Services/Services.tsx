import React from 'react'
import { Search } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <div className="mt-[4rem] rounded-lg border px-10 py-5 flex flex-col items-center justify-center">
        <h3 className='mb-3 font-bold text-center text-2xl'>Sélectionner un service</h3>
        <div className="flex items-center rounded-xl gap-2  bg-secondary p-2 w-[50%]">
            <i className='text-primary'><Search /></i>
            <Input type="text" className='bg-transparent w-[100%] border-none text-primary transition-all .3s' placeholder='Rechercher un service' />
        </div>
        <div className="grid grid-cols-3 grid-rows-2 w-[50%] gap-2 mt-5">
            <Button variant='secondary' className='py-3 px-5 rounded-ful hover:bg-green-500 transition-all .4s'>
                Ménage
            </Button>
            <Button variant='secondary' className='py-3 px-5 rounded-ful hover:bg-green-500 transition-all .4s'>
                Réparation d'une télé
            </Button>
            <Button variant='secondary' className='py-3 px-5 rounded-ful hover:bg-green-500 transition-all .4s'>
                Tondre le gazon
            </Button>
            <Button variant='secondary' className='py-3 px-5 rounded-ful hover:bg-green-500 transition-all .4s'>
                Fixer une lampe
            </Button>
            <Button variant='secondary' className='py-3 px-5 rounded-ful hover:bg-green-500 transition-all .4s'>
                Montage d'un meuble
            </Button>
        </div>
        <div className="flex items-center mt-5 rounded-xl bg-secondary p-2 gap-2 w-[50%]">
            <i className='text-primary'><Plus /></i>
            <Input type="text" className='bg-transparent w-[100%] border-none text-primary transition-all .3s' placeholder='Demande spécial' />
        </div>
      </div>
  )
}

export default Services
