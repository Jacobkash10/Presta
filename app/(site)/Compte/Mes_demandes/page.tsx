import MesDemandes from '@/components/Profil_page/Mes_demandes/Mes_demandes'
import Sidebar from '@/components/Profil_page/Sidebar/Sidebar'
import React from 'react'

async function fetchReservation() {
  const res = await fetch(`http://localhost:3000/api/reservation`, {
    next: {
      revalidate: 10,
    }
  })
  const data = await res.json();
  return data.reserves
}

const page = async () => {

  const reserve = await fetchReservation()
  
  const res = reserve

  return (
    <div className='mt-[5rem] flex items-start h-[40rem]'>
      <Sidebar />
      <div className='h-[100%] w-full'>
            <MesDemandes res={res}/>
      </div>
    </div>
  )
}

export default page
