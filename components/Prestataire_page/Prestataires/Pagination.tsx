"use client"

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const Pagination = ({currentPage}: any) => {

      const router = useRouter()

  return (
      <div className="mt-12 flex items-center gap-10">
      <div className="">
          <Button variant='secondary' className='py-6 mt-4 w-[100%]'>
            Précédent
          </Button>
      </div>
      <div className="">
          <Button variant='secondary' className='py-6 mt-4 w-[100%]'>
            Suivant
          </Button>
      </div>
  </div>
  )
}

export default Pagination