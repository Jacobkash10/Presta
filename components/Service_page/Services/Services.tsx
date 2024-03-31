import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Categories = {
  id: String,
  name_cate: String,
  image: String,
  categories: []
}

async function fetchCategories() {
    const res = await fetch("http://localhost:3000/api/categories", {
      next: {
        revalidate: 10,
      }
    })
    const data: Categories = await res.json();
    return data.categories
  }

const Services = async () => {

    const services = await fetchCategories()

  return (
    <div className='mt-5 flex sm:items-center justify-center flex-col w-[100%]'>
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-1 xs:text-center'>Tous nos <span className='text-green-600'>services</span></h3>
        <div className='sm:grid gap-5 mt-6 w-[100%] block xs:grid-cols-2 nine:grid-cols-3'>
            {
                services?.map((item: any) => (
                    <div className="" key={item.slug}>
                        <div className="border border-input bg-secondary w-[100%] h-[13rem] rounded-lg  overflow-hidden">
                            <Link href={`/Service/${item.slug}`}>
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
