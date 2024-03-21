import Badges from '@/components/Devenir_page/Badges/Badges'
import Banner from '@/components/Devenir_page/Banner/Banner'
import Chiffre from '@/components/Devenir_page/Chiffre/Chiffre'
import How from '@/components/Devenir_page/How/How'
import Techno from '@/components/Devenir_page/Techno/Techno'
import Type from '@/components/Devenir_page/Type/Type'
import Avantage from '@/components/Home/Avantage/Avantage'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20'>
      <Banner />
      <Chiffre />
      <Badges />
      <How />
      <Type />
      <Techno />
      <Avantage />
    </div>
  )
}

export default page
