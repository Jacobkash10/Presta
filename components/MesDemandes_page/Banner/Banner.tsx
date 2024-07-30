import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { MapPin } from 'lucide-react';
import { Phone } from 'lucide-react';
import { CalendarCheck } from 'lucide-react';
import { Clock7 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';

interface Service {
  id: string;
  slug: string;
  name_service: string;
  description: string;
  price: number;
  categorySlug: string | null
}

interface Reserve {
  id: string;
  slug: string;
  special: string | null;
  date_reservation: Date;
  hour: string;
  tel: string;
  address: string;
  service: Service | null;
  user: User | null;
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string | null;
  emailVerified: Date | null;
  image: string | null;
  address: string | null;
  phone: string | null;
}

interface Props {
  res: Reserve
}

const Banner: React.FC<Props> = ({res}) => {
  return (
    <div>
        
        <div className='mt-4 border p-5 rounded-lg'>
          <h3 className='mb-2 text-3xl font-bold'>{res.service?.name_service}</h3>
          <div className='flex items-center gap-1 text-sm'>
            <i><MapPin size={18} /></i>
            <p>{res?.address}</p>
          </div>
          <div className='mt-4 flex items-center gap-3'>
            <i className='bg-slate-200 py-3 px-3 rounded-full text-green-600'><CalendarCheck size={22} /></i>
            <h5 className='text-sm font-bold'>{format(res?.date_reservation, 'd LLLL, yyyy')} à {res?.hour}</h5>
          </div>
          {/* <div className='mt-4 flex items-center gap-3'>
            <i className='bg-slate-200 py-3 px-3 rounded-full text-green-600'><Clock7 size={22} /></i>
            <h5 className='text-sm font-bold'>4h de service</h5>
          </div> */}
          <h5 className='mt-6 text-sm'>Données personnelles</h5>
          <div className='mt-4 flex items-center gap-3'>
            <i className='text-green-600'><Phone size={22} /></i>
            <h5 className='text-sm font-bold'>{res?.tel}</h5>
          </div>
          <div className='mt-4 flex items-center gap-3'>
            <i className='text-green-600'><MapPin size={22} /></i>
            <h5 className='text-sm font-bold'>{res?.address}</h5>
          </div>
          <div className='w-[50%] mt-5 flex items-center gap-2'>
            <Button variant='default' className='w-[100%] py-7 bg-green-600 text-white hover:bg-green-700'>
                  Voir plus
            </Button>
            <Button variant='default' className='w-[100%] py-7'>
                <Link className='text-base' href={"/"}>
                  Modifier
                </Link>
            </Button>
        </div>
        </div>
    </div>
  )
}

export default Banner
