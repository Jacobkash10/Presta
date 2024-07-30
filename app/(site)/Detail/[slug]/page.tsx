import React from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Prestataires from '@/components/UnService_page/Prestataires/Prestataires'
import Annonce from '@/components/UnService_page/Annonce/Annonce'
import Avantage from '@/components/Home/Avantage/Avantage'
import { Button } from '@/components/ui/button'
import Demander from '@/components/Demander/Demander'
import { db } from '@/lib/db'

async function page({ params }: { params: { slug: string } }) {
    const {slug} = params
    const service = await db.service.findFirstOrThrow({
      where: {slug}
    })

  return (
    <div className='pt-20'>
      <div className=''>
        <div className='mb-2'>
            <span className="flex items-center gap-2 text-sm font-semibold">
                <Link href='/' className='text-green-500'>Accueil</Link> 
                <i><ChevronRight size={15} /></i> 
                <Link href='/Services' className='text-green-500'>Services</Link>
                <i><ChevronRight size={15} /></i> 
                <Link href={`/Service/${service.categorySlug}`} className='text-green-500'>{service.categorySlug}</Link>
                <i><ChevronRight size={15} /></i> 
                <h6 className=''>{service.name_service}</h6>
            </span>
        </div>
        <div className='flex flex-col justify-center items-center py-[4rem] bg-secondary rounded-xl'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold text-center mb-4 max-w-xl'><span className='text-green-600'>Service {service.name_service.toLowerCase()}</span></h1>
                
                  <Button className='mt-10 text-[1.1rem] py-7'>
                    <Link href={`/Demander_un_service/${service.slug}`}>Demander maintenant</Link>
                  </Button>
            </div>
        </div>
      </div>
      <div className='mt-20 flex flex-col justify-center items-center'>
            <h2 className='text-xl text-center max-w-2xl'>{service.description}</h2>
      </div>
      <Prestataires />
      <Annonce />
      <Avantage />
    </div>
  )
}

export default page
