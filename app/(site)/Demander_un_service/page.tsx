import Adresse from '@/components/Demander_page/Adresse/Adresse'
import Bottom from '@/components/Demander_page/Bottom/Bottom'
import Calendrier from '@/components/Demander_page/Calendar/Calendrier'
import Email from '@/components/Demander_page/Email/Email'
import Hour from '@/components/Demander_page/Hour/Hour'
import Hour_picker from '@/components/Demander_page/Hour_picker/Hour_picker'
import Nom from '@/components/Demander_page/Nom/Nom'
import Pass from '@/components/Demander_page/Pass/Pass'
import Phone from '@/components/Demander_page/Phone/Phone'
import Precision from '@/components/Demander_page/Precision/Precision'
import Prenom from '@/components/Demander_page/Prenom/Prenom'
import Prestataires from '@/components/Demander_page/Prestataires/Prestataires'
import Services from '@/components/Demander_page/Services/Services'
import Top from '@/components/Demander_page/Top/Top'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20'>
      <Top />
      <Services />
      <Hour />
      <Prestataires />
      <Calendrier />
      <Hour_picker />
      <Adresse />
      <Phone />
      <Precision />
      <Email />
      <Prenom />
      <Nom />
      <Pass />
      <Bottom />
    </div>
  )
}

export default page
