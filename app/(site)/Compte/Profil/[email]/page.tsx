import Profil from '@/components/Profil_page/Profil/Profil'
import Sidebar from '@/components/Profil_page/Sidebar/Sidebar'
import React from 'react'

export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/api/users')
  const data = await res.json();
 
  return data.users.map((user: any) => ({
    id: user.email.toString(),
  }))
}

async function fetchUser(email: string) {
  const res = await fetch(`http://localhost:3000/api/users/${email}`, {
    next: {
      revalidate: 10,
    }
  })
  const data = await res.json();
  return data
}

const page = async ({ params }: { params: { email: string } }) => {

  const user = await fetchUser(params.email)
  console.log(user)

  return (
    <div className='mt-[5rem] flex items-start h-[40rem]'>
      <Sidebar user={user} />
      <div className='h-[100%] w-full'>
            <Profil user={user} />
      </div>
    </div>
  )
}

export default page
