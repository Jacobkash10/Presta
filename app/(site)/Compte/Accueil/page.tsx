import Home from '@/components/Profil_page/Home/Home'
import Sidebar from '@/components/Profil_page/Sidebar/Sidebar'
import React from 'react'

const page = () => {
  return (
    <div className='mt-[5rem] flex items-start h-[40rem]'>
      <Sidebar />
      <div className='h-[100%] w-[100%]'>
            <Home />
      </div>
    </div>
  )
}

export default page
