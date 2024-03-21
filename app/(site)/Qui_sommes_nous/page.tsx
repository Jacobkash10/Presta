import Chiffre from '@/components/Devenir_page/Chiffre/Chiffre'
import Avis from '@/components/Home/Avis/Avis'
import Banner from '@/components/Qui_page/Banner/Banner'
import Garantie from '@/components/Qui_page/Garantie/Garantie'
import Qui from '@/components/Qui_page/Qui/Qui'
import Simplifier from '@/components/Qui_page/Simplifier/Simplifier'
import React from 'react'
import Commencer from '../../components/Qui_page/Commencer/Commencer'

const page = () => {
  return (
    <div className='mt-20'>
      <Banner />
      <Qui />
      <Garantie />
      <Simplifier />
      <Chiffre />
      <Avis />
      <Commencer />
    </div>
  )
}

export default page
