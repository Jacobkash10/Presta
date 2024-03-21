import React from 'react'

const Chiffre = () => {
  return (
    <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 nine:grid-cols-4 gap-10 border py-8 px-10 rounded-xl'>
      <div className=''>
        <h5 className='font-bold text-2xl'>150</h5>
        <p className='mt-2'>Services rendus depuis la création</p>
      </div>
      <div className=''>
        <h5 className='font-bold text-2xl'>20</h5>
        <p className='mt-2'>Services demandés chaque mois</p>
      </div>
      <div className=''>
        <h5 className='font-bold text-2xl'>65</h5>
        <p className='mt-2'>Clients utilisent Presta pour leurs services à domicile</p>
      </div>
      <div className=''>
        <h5 className='font-bold text-2xl'>900</h5>
        <p className='mt-2'>Heures de travail payées via Presta</p>
      </div>
    </div>
  )
}

export default Chiffre
