import React from 'react'
import { EqualSquare, Globe, ShieldCheck, ThumbsUp, UserCheck } from 'lucide-react';
import { Phone } from 'lucide-react';

const Garantie = () => {
  return (
    <div className='mt-16 bg-secondary rounded-lg py-20 px-10'>
        <h3 className='text-3xl font-bold mb-1 text-center'>
            Bénéficiez des <span className='text-green-600'>meilleures garanties</span>
        </h3>
        <div className='grid grid-cols-3 grid-rows-2 gap-10 mt-20'>
            <div className='w-[100%]'>
                <div className='flex items-end gap-4'>
                    <i className='text-green-600'><UserCheck size={25} /></i>
                    <h5 className='mt-2 text-base font-semibold'>Identité des prestataires vérifiée</h5>
                </div>
                <p className='text-wrap mt-2 text-sm leading-normal'>
                    Nous vérifions l'identité de chacun des prestataires qui se rendent chez vous.
                </p>
            </div>
            <div className='w-[100%]'>
                <div className='flex items-end gap-4'>
                    <i className='text-green-600'><ShieldCheck size={25} /></i>
                    <h5 className='mt-2 text-base font-semibold'>Services assurés</h5>
                </div>
                <p className='text-wrap mt-2 text-sm leading-normal'>
                    Nous assurons toutes les prestations du début à la fin.
                </p>
            </div>
            <div className='w-[100%]'>
                <div className='flex items-end gap-4'>
                    <i className='text-green-600'><Phone size={25} /></i>
                    <h5 className='mt-2 text-base font-semibold'>Assistance téléphonique 6j/7</h5>
                </div>
                <p className='text-wrap mt-2 text-sm leading-normal'>
                    Notre service client met tout en oeuvre pour agir rapidement en cas d'imprévu.
                </p>
            </div>
            <div className='w-[100%]'>
                <div className='flex items-end gap-4'>
                    <i className='text-green-600'><EqualSquare size={25} /></i>
                    <h5 className='mt-2 text-base font-semibold'>Cadre légal et sécurisé</h5>
                </div>
                <p className='text-wrap mt-2 text-sm leading-normal'>
                    Confiez vos tâches du quotiden en toute sécurité et sans aucune contrainte.
                </p>
            </div>
            <div className='w-[100%]'>
                <div className='flex items-end gap-4'>
                    <i className='text-green-600'><ThumbsUp size={25} /></i>
                    <h5 className='mt-2 text-base font-semibold'>Prestations encadrées</h5>
                </div>
                <p className='text-wrap mt-2 text-sm leading-normal'>
                    Nous vous accompagnons avant, pendant et après votre prestation.
                </p>
            </div>
            <div className='w-[100%]'>
                <div className='flex items-end gap-4'>
                    <i className='text-green-600'><Globe size={25} /></i>
                    <h5 className='mt-2 text-base font-semibold'>Service 100% en ligne</h5>
                </div>
                <p className='text-wrap mt-2 text-sm leading-normal'>
                    Un système exclusivement en ligne pour garantir la rémunération des prestataires.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Garantie
