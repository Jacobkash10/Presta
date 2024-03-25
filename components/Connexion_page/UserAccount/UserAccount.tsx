"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import * as React from "react"
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

const UserAccount = () => {

  const {toast} = useToast()
  const { data: session, status } = useSession();

  return (
      <div>
        {
          session?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className='flex items-center gap-2 border p-1 rounded-md cursor-pointer hover:bg-secondary transition-all .3s'>
                  <div className='bg-primary w-7 h-7 rounded-full flex justify-center items-center'>
                    <p className=' text-background font-bold'>
                      {session?.user.name?.substr(0, 1)?.toUpperCase()}
                    </p>
                  </div>
                  <h5 className='text-base font-semibold'>{session?.user.name}</h5>
                  <Menu size={18} />
                </div>  
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuCheckboxItem>
                   <Link href='/Compte/Accueil'>Compte</Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>
                   <Link href='/Compte/Profil'>Profil</Link>
                </DropdownMenuCheckboxItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>
                   <Link href={'/Compte/Mes_demandes'}>Mes demandes</Link>
                </DropdownMenuCheckboxItem> 
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem>
                  <Button onClick={() => signOut({
                    redirect: true,
                    callbackUrl: `${window.location.origin}/Connexion`
                    })}
                    className='mb-3 nine:mb-0 max-w-[35%] xs:max-w-[30%] nine:max-w-full mx-2 nine:mx-0' variant="destructive">
                    Se deconnecter
                  </Button>
                </DropdownMenuCheckboxItem> 
              </DropdownMenuContent>
            </DropdownMenu>
            ) : (
             <Button 
              className='mb-3 nine:mb-0 bg-green-600 hover:bg-green-700 
              text-white max-w-[35%] xs:max-w-[30%] nine:max-w-full mx-2 nine:mx-0' variant="default">
                <Link href={"/Connexion"}>
                  Connexion
                </Link>
            </Button>
            )
        }
      
    </div>
  )
}

export default UserAccount
