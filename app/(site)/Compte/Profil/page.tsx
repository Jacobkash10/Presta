import Profil from '@/components/Profil_page/Profil/Profil'
import Sidebar from '@/components/Profil_page/Sidebar/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div className='mt-[3.5rem] flex items-start h-[40rem]'>
      <Sidebar />
      <div className='h-[100%]'>
            <Profil />
      </div>
    </div>
  )
}

export default page
