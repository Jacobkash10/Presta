import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

async function fetchCategories() {
    const res = await fetch("http://localhost:3000/api/categories", {
      next: {
        revalidate: 10,
      }
    })
    const data = await res.json();
    return data.categories
  }

const Services = async () => {

    const services = await fetchCategories()

  return (
    <div className='mt-10 flex sm:items-center justify-center flex-col w-[100%]'>
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-1 xs:text-center'>De quel <span className='text-green-600'>service</span> avez-vous besoin ?</h3>
        <p className='max-w-lg mb-1 text-sm sm:text-md xs:text-center font-normal'>Pour chaque situation, 
            trouvez le prestataire dont les compétences répondent à vos attentes et à votre niveau d’exigence.</p>
        <div className='sm:grid gap-5 mt-6 w-[100%] block xs:grid-cols-2 nine:grid-cols-3'>
            {
                services?.slice(0, 6)?.map((item: any) => (
                    <div className="" key={item.id}>
                        <div className="border border-input bg-secondary w-[100%] h-[10rem] sm:h-[10rem] nine:h-[13rem] rounded-lg  overflow-hidden">
                            <Link href={`/Service/${item.id}`}>
                                <Image src={item.image} alt='Car' width={0} height={0} sizes='100vw' className='w-[100%] h-[100%] object-contain rounded-lg hover:scale-125 transition-all .5s ease-in-out'  />
                            </Link>
                        </div>
                        <div className='mt-2'>
                            <h5 className='font-semibold text-sm'>{item.name_cate}</h5>
                        </div>
                    </div>
                ))
            }
        </div>  
    </div>
  )
}

export default Services
