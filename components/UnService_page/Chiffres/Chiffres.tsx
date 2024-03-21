import React from 'react'

const Chiffres = () => {
  return (
    <div className="mt-32 grid grid-cols-4 gap-4">
        <div className="bg-secondary p-[2rem] rounded-md">
            <h4 className='text-3xl font-bold mb-3'>30</h4>
            <p className='text-base'>C’est le nombre de meubles déjà montés par les spécialistes présent sur Presta</p>
        </div>
        <div className="bg-secondary p-[2rem] rounded-md">
            <h4 className='text-3xl font-bold mb-3'>22</h4>
            <p className='text-base'>C’est le nombre de monteur de meubles disponible sur Presta</p>
        </div>
        <div className="bg-secondary p-[2rem] rounded-md">
            <h4 className='text-3xl font-bold mb-3'>61</h4>
            <p className='text-base'>C’est le nombre de types de meubles pouvant être montés grâce à Presta</p>
        </div>
        <div className="bg-secondary p-[2rem] rounded-md">
            <h4 className='text-3xl font-bold mb-3'>20$</h4>
            <p className='text-base'>C’est le prix moyen d’un montage de meuble sur Presta</p>
        </div>
      </div>
  )
}

export default Chiffres
