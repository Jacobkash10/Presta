"use client"

import { Button } from '@/components/ui/button'
import { GitPullRequest, Home, UserCog } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { it } from 'node:test'
import React from 'react'

const Sidebar = () => {

  const pathname = usePathname()

      const links = [
            {name: "Accueil", link: "/Compte/Accueil", i: <Home size={20} />},
            {name: "Profil", link: "/Compte/Profil", i: <UserCog size={20} />},
            {name: "Mes demandes", link: "/Compte/Mes_demandes", i: <GitPullRequest size={20} />}
          ]

          const isActive = (link: any) => {
            return pathname === link
        }

  return (
    <div className='flex flex-col gap-3 items-start justify-between p-6 w-[30%] bg-secondary h-[50%]'>
      <div className='flex flex-col gap-3 items-start w-full'>
        {
              links.map((item: any) => (
                <div key={item.name} className={`${isActive(item.link) ? 'bg-primary text-background rounded-lg' : ''} flex items-center gap-5 text-base p-2 hover:bg-primary hover:text-background rounded-lg ease-in duration-200 w-full`}>
                  <i>{item.i}</i>
                  <Link className='w-full' href={item.link} key={item.name}>{item.name}</Link>
                </div>
              ))
        }
      </div>
      <Button onClick={() => signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/Connexion`
          })}
          className='mb-3 nine:mb-0 max-w-[35%] xs:max-w-[30%] nine:max-w-full mx-2 nine:mx-0' variant="destructive">
          Se deconnecter
      </Button>
    </div>
  )
}

export default Sidebar
