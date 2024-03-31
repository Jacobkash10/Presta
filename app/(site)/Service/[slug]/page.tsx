import Avantage from '@/components/Home/Avantage/Avantage'
import Annonce from '@/components/UnService_page/Annonce/Annonce'
import Banner from '@/components/UnService_page/Banner/Banner'
import Chiffres from '@/components/UnService_page/Chiffres/Chiffres'
import Prestataires from '@/components/UnService_page/Prestataires/Prestataires'
import Services from '@/components/UnService_page/Services/Services'
import React from 'react'

export async function generateStaticParams() {
      const res = await fetch('http://localhost:3000/api/categories')
      const data = await res.json();
     
      return data.categories.map((category: any) => ({
        id: category.slug.toString(),
      }))
    }

    async function fetchCategories(slug: string) {
      const res = await fetch(`http://localhost:3000/api/categories/${slug}`, {
        next: {
          revalidate: 10,
        }
      })
      const data = await res.json();
      return data
    }

const page = async ({ params }: { params: { slug: string } }) => {

  const services = await fetchCategories(params.slug)

  return (
    <div className='pt-20'>
      <Banner services={services} />
      <Services services={services}/>
      <Prestataires />
      <Chiffres />
      <Annonce />
      <Avantage />
    </div>
  )
}

export default page
