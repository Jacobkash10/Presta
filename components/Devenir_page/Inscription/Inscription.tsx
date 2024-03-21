import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Inscription = () => {
  return (
    <div className='mt-12 w-[80%] xs:w-[60%] nine:w-[80%]'>
      <Button variant='default' className='w-[100%] text-xl py-3 md:py-6'><Link href={"/"}>S'inscrire</Link></Button>
    </div>
  )
}

export default Inscription
 