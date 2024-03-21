import BadgesPlus from '@/components/Entreprises_page/Badges_plus/BadgesPlus'
import Banner from '@/components/Entreprises_page/Banner/Banner'
import Services from '@/components/Entreprises_page/Services/Services'
import Avantage from '@/components/Home/Avantage/Avantage'
import How from '@/components/Home/How/How'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20'>
      <Banner />
      <Services />
      <BadgesPlus />
      <How />
      <Avantage />
    </div>
  )
}

export default page
