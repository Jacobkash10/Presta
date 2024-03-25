import MesDemandes from '@/components/Profil_page/Mes_demandes/Mes_demandes'
import Sidebar from '@/components/Profil_page/Sidebar/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div className='mt-[3.5rem] flex items-start h-[40rem]'>
      <Sidebar />
      <div className='h-[100%]'>
            <MesDemandes />
      </div>
    </div>
  )
}

export default page
