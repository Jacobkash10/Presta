import React from 'react'

const Chiffres = () => {
  return (
    <div className="mt-32 grid grid-cols-1 xs:grid-cols-2 nine:grid-cols-4 gap-4">
        <div className="border p-[2rem] rounded-md">
            <h4 className='text-3xl font-bold mb-3 text-green-600'>30+</h4>
            <p className='text-xl'>Services</p>
        </div>
        <div className="border p-[2rem] rounded-md">
            <h4 className='text-3xl font-bold mb-3 text-green-600'>22+</h4>
            <p className='text-xl'>Prestataires</p>
        </div>
        <div className="border p-[2rem] rounded-md">
            <h4 className='text-3xl font-bold mb-3 text-green-600'>61+</h4>
            <p className='text-xl'>Prestations</p>
        </div>
        <div className="border p-[2rem] rounded-md">
            <h4 className='text-3xl font-bold mb-3 text-green-600'>4.9/5</h4>
            <p className='text-xl'>Note moyenne</p>
        </div>
      </div>
  )
}

export default Chiffres
