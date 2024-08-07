import { db } from '@/lib/db'
import Image from 'next/image'
import Link from 'next/link'

const Services = async () => {

    const services = await db.category.findMany()

  return (
    <div className='py-[100px] flex sm:items-center justify-center flex-col w-[100%]'>
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-1 xs:text-center'>De quel <span className='text-green-600'>service</span> avez-vous besoin ?</h3>
        <p className='max-w-lg mb-1 text-base sm:text-md xs:text-center font-normal'>Pour chaque situation, 
            trouvez le prestataire dont les compétences répondent à vos attentes et à votre niveau d’exigence.</p>
        <div className='sm:grid gap-5 mt-12 w-[100%] block xs:grid-cols-2 nine:grid-cols-3'>
            { services.length > 0 ?
                services?.slice(0, 6)?.map((item: any) => (
                    <div className="" key={item.id}>
                        <div className="border border-input bg-secondary w-[100%] h-[10rem] sm:h-[10rem] nine:h-[14rem] rounded-lg  overflow-hidden">
                            <Link href={`/Service/${item.slug}`}>
                                <Image src={item.image} alt='Car' width={0} height={0} sizes='100vw' className='w-[100%] h-[100%] object-contain rounded-lg hover:scale-125 transition-all .5s ease-in-out'  />
                            </Link>
                        </div>
                        <div className='mt-2'>
                            <h5 className='font-semibold text-base'>{item.name_cate}</h5>
                        </div>
                    </div>
                ))
                :

                [1,2,3,4,5,6].map((item, index) => (
                  <div key={index} className='h-[13rem] w-full bg-slate-200 animate-pulse rounded-lg'></div>
                ))
            }
        </div>  
    </div>
  )
}

export default Services
