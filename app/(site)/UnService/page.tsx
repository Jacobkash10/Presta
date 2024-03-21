import Avantage from '@/components/Home/Avantage/Avantage'
import Annonce from '@/components/UnService_page/Annonce/Annonce'
import Banner from '@/components/UnService_page/Banner/Banner'
import Chiffres from '@/components/UnService_page/Chiffres/Chiffres'
import Prestataires from '@/components/UnService_page/Prestataires/Prestataires'
import Services from '@/components/UnService_page/Services/Services'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20'>
      <Banner />
      <Services />
      <Prestataires />
      <Chiffres />
      <Annonce />
      <Avantage />
    </div>
  )
}

export default page
