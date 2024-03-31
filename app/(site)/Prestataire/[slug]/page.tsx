import Content from '@/components/UnPresta_page/Content/Content'
import Others from '@/components/UnPresta_page/Others/Others'
import React from 'react'

export async function generateStaticParams() {
      const res = await fetch('http://localhost:3000/api/prestataires')
      const data = await res.json();
     
      return data.providers.map((category: any) => ({
        id: category.slug.toString(),
      }))
    }

    async function fetchPrestataires(slug: string) {
      const res = await fetch(`http://localhost:3000/api/prestataires/${slug}`, {
        next: {
          revalidate: 10,
        }
      })
      const data = await res.json();
      return data
    }

const page = async ({ params }: { params: { slug: string } }) => {

      const providers = await fetchPrestataires(params.slug)

  return (
    <div className='mt-20'>
      <Content providers={providers} />
      <Others providers={providers} />
    </div>
  )
}

export default page
