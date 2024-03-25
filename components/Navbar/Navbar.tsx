"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { ModeToggle } from '../toggle'
import { Button } from "@/components/ui/button"
import { AlignRight, PlusCircle, X } from 'lucide-react';
import UserAccount from '../Connexion_page/UserAccount/UserAccount'
import { usePathname } from 'next/navigation'


const Navbar =  () => {

  const pathname = usePathname()
  
  const links = [
    {name: "Accueil", link: "/"},
    {name: "Services", link: "/Services"},
    {name: "Nos prestataires", link: "/Nos_prestataires"}
  ]

  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  const isActive = (link: any) => {
      return pathname === link
  }

  return (
    <div className='bg-background fixed right-0 left-0 top-0 flex justify-between gap-6 items-center nine:py-[8px] py-[12px] border-b-[1px] px-2 xs:px-[1rem] z-50 bg-default lg:px-[3.8rem] md:px-[1.5rem] nine:px-[2.3rem]'>
        <div className='border rounded-md p-1'>
          <Link className='text-base font-bold' href={"/"}>
              <span className='border-r-2 border-green-600 mr-1'></span>
              <span className='border-r-2 border-green-600 mr-1'></span>
              Presta
          </Link>
        </div>
        <div className={`nine:flex nine:justify-between bg-background border-y-2 nine:border-y-0 pt-2 pb-5 px-1 md:px-3 nine:p-0 absolute top-12 left-0 right-0 nine:relative nine:top-0 nine:bg-transparent w-full items-center transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          <div className='nine:flex nine:items-center nine:gap-6 flex flex-col gap-2 nine:flex-row'>
            {
              links.map((item: any) => (
                <Link key={item.name} className={`${isActive(item.link) ? 'bg-accent text-accent-foreground' : ''} text-sm font-semibold text-primary px-3 hover:bg-accent hover:text-accent-foreground py-2 rounded-xl transition-all .3s`} href={item.link}>
                  {item.name}
                </Link>
              ))
            }
          </div>
          <div className='nine:flex nine:items-center nine:gap-3 flex flex-col gap-1 nine:flex-row nine:max-w-full'>
            <Button variant="outline" className={`${pathname === '/Demander_un_service' ? 'bg-accent text-accent-foreground' : ''} my-3 nine:my-0 max-w-[35%] xs:max-w-[30%] mx-2 nine:mx-0 nine:max-w-full`}>
              <Link className='nine:flex items-center gap-2' href={"/Demander_un_service"}>
                <i><PlusCircle size={18} className='hidden nine:flex' /></i>
                <h5 className='text-xs xs:text-sm'>Demander un service</h5>
              </Link>
            </Button>
            <ModeToggle />
            <UserAccount />
          </div>
        </div>
        <div className='nine:hidden' onClick={toggle}> 
            {open ? <X /> : <AlignRight /> }
        </div>
    </div>
  )
}

export default Navbar
