import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react'

const Home = async ({res}: any) => {

  const data = await getServerSession(authOptions);
  console.log(res)

  return (
    <div className='m-4 h-[100%] border-t pt-5'>
      {
        data?.user ? (
          <div className='flex items-center gap-2'>
            <h2 className='text-2xl'></h2>
            <div className='bg-primary w-16 h-16 rounded-full flex justify-center items-center'>
              <p className='text-3xl text-background font-bold'>
                {data?.user.name?.substr(0, 1)?.toUpperCase()}
              </p>
            </div>
            <h2 className='text-2xl'>{data?.user.name?.toUpperCase()}</h2>
          </div>
        ) : (
          <h2 className='text-2xl'>Veuillez vous connectez</h2>  
        )
      }
      <div>
      <div className='mt-6 grid grid-cols-3 gap-4 border-t'>
        <div className='bg-secondary border rounded-lg mt-6'>
            <div className='px-10 py-10'>
              <h5 className='text-xl'>
              {
                res?.filter((curDate: any) => {
                  return curDate?.userEmail === data?.user?.email
                  })?.length
              }
              </h5>
              <p className=''>Demande(s)</p>
            </div>
            <div className='bg-destructive py-4 rounded-b-lg'></div>
        </div>
        <div className=' bg-secondary border rounded-lg mt-6'>
            <div className='px-10 py-10'>
              <h5 className='text-xl'>2</h5>
              <p className=''>Réservation(s) en attente</p>
            </div>
            <div className='bg-primary py-4 rounded-b-lg'></div>
        </div>
        <div className=' bg-secondary border rounded-lg mt-6'>
            <div className='px-10 py-10'>
              <h5 className='text-xl'>8</h5>
              <p className=''>Commentaire(s)</p>
            </div>
            <div className='bg-green-600 py-4 rounded-b-lg'></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home
