import Content from '@/components/UnPresta_page/Content/Content'
import Others from '@/components/UnPresta_page/Others/Others'
import { db } from '@/lib/db';
import React from 'react'

const page = async ({ params }: { params: { slug: string } }) => {
  const {slug} = params
  const provider = await db.provider.findFirstOrThrow({ where: { slug }, include: { category: true} })

  return (
    <div className='mt-20'>
      <Content provider={provider} />
      <Others provider={provider} />
    </div>
  )
}

export default page
