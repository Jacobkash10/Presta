import Banner from '@/components/MesDemandes_page/Banner/Banner'
import Prestataires from '@/components/MesDemandes_page/Prestataires/Prestataires'
import { db } from '@/lib/db';
import React from 'react'

const page = async ({ params }: { params: { slug: string } }) => {
  const {slug} = params
  const res = await db.reservation.findFirstOrThrow({ where: { slug }, include: { user: true, service: true} })

  return (
    <div className='pt-20'>
      <Banner res={res} />
      <Prestataires />
    </div>
  )
}

export default page
