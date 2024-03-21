import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Google = () => {
  return (
      <div className='mt-5'>
      <Button 
            variant='default' 
            className='py-6 w-[80%] mx-auto flex items-center gap-2'
            onClick={() => signIn('google')}
      >
          <Image src='/images/googles.png' width={0} height={0} sizes='100vw' alt='google' className='w-[2rem] h-[2rem] object-contain' />
          <h5>Se connecter avec Google</h5>
      </Button>{" "}
  </div>
  )
}

export default Google
