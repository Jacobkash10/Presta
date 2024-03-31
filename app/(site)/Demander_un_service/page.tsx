"use client"

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
import Prestataires from '@/components/Demander_page/Prestataires/Prestataires'
import Services from '@/components/Demander_page/Services/Services'
import Top from '@/components/Demander_page/Top/Top'
import React, { useState } from 'react'

const page = () => {

  const [reservation, setReservation] = useState({
    serviceSlug: '',
    date_reservation: Date,
    hour: Date,
    address: '',
    tel: ''
  })
  
  return (
    <div className='pt-20'>
      <form action="">
        <Top />
        <Services reservation={reservation} setReservation={setReservation} />
        {/* <Hour /> */}
        {/* <Prestataires /> */}
        <Calendrier reservation={reservation} setReservation={setReservation} />
        <Hour_picker reservation={reservation} setReservation={setReservation} />
        <Adresse reservation={reservation} setReservation={setReservation} />
        <Phone reservation={reservation} setReservation={setReservation} />
        <Precision />
        <Email />
        <Nom />
        <Pass />
        <Bottom />
      </form>
    </div>
  )
}

export default page
