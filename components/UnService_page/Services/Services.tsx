import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { db } from '@/lib/db'

interface Services {
    id: string;
    slug: string;
    name_cate: string;
    image: string;
}

interface Props {
    service: Services;
  }

const Services: React.FC<Props> = async ({ service }) => {

    const allServices = await db.service.findMany({
        include: {
            category: true
        }
    })

    const res = allServices

  return (
    <div className='mt-5 flex items-center justify-center flex-col w-[100%]'>
        <h3 className='text-3xl font-bold mb-1'>Tous <span className='text-green-600'>nos services</span> "{service.name_cate.toLowerCase()}</h3>
        <div className='grid grid-cols-3 gap-6 mt-6 w-[100%]'>
            {  res.length > 0 ?
                res?.filter((curDate: any) => {
                    return curDate?.categorySlug === service.slug
                })?.map((item: any) => (
                    <div className="border p-8 rounded-lg" key={item.id}>
                        <div className='py-2 px-2 rounded-md bg-secondary'>
                            <p className='text-base text-center font-bold'>{item.name_service}</p>
                        </div>
                        <div className='border-b-2 pb-4 pt-4 border-t-2 mt-4'>
                            <p className='text-sm'>
                                {item.description}
                            </p>
                        </div>
                        <div className=''>
                        <Button variant='default' className='py-5 mt-4 w-[100%]'>
                            <Link className='text-base w-full' href={`/Detail/${item.slug}`}>
                                Voir ce service
                            </Link>
                        </Button>
                        </div>
                    </div>
                ))
                :

                [1,2,3,4,5,6,7,8,9].map((item, index) => (
                  <div key={index} className='h-[13rem] w-full bg-slate-200 animate-pulse rounded-lg'></div>
                ))
            }
        </div>
    </div>
  )
}

export default Services
