import Avantage from '@/components/Home/Avantage/Avantage'
import Annonce from '@/components/Service_page/Annonce/Annonce'
import Banner from '@/components/Service_page/Banner/Banner'
import Chiffres from '@/components/Service_page/Chiffres/Chiffres'
import Services from '@/components/Service_page/Services/Services'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20'>
      <Banner />
      <Services />
      <Chiffres />
      <Annonce />
      <Avantage />
    </div>
  )
}

export default page
