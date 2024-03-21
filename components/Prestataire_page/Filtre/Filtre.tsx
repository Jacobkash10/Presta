import React from 'react'
import { ListFilter } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button';

const Filtre = () => {
  return (
    <div className="mt-10 w-[100%] border-t-[1px] border-b-[1px] py-4">
        <div className="md:flex items-center w-[100%] gap-3">
            <div className="flex items-center gap-2 w-[10%] ">
                <i><ListFilter /></i>
                <h4>Filtres</h4>
            </div>
            <div className="flex flex-col justify-center items-center md:w-[30%] border-l-2 px-5 mt-5 md:mt-0">
                <Select>
                    <SelectTrigger className="w-[100%]">
                        <SelectValue placeholder="Selectionner un service" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Services</SelectLabel>
                        <SelectItem value="apple">Electricité</SelectItem>
                        <SelectItem value="banana">Ménage</SelectItem>
                        <SelectItem value="blueberry">Peinture</SelectItem>
                        <SelectItem value="grapes">Electronique</SelectItem>
                        <SelectItem value="pineapple">Bricolage</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            {/* <div className="block items-center gap-4 border-l-2 pl-4">
                <h4 className='text-sm'>Année d'expérience</h4>
                <div className="">
                    <Button variant='secondary' className='border-2'>Moins d'un an</Button>
                    <Button variant='secondary' className='border-2'>2 à 4 ans</Button>
                    <Button variant='secondary' className='border-2'>5 à 10 ans</Button>
                    <Button variant='secondary' className='border-2'>10 ans et +</Button>
                </div>
            </div> */}
        </div>
      </div>
  )
}

export default Filtre
