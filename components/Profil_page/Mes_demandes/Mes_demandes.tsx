import React from 'react'
import Bienvenue from './Bienvenue';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Action from './Action';
import { format } from 'date-fns';


const MesDemandes = async ({res}: any) => {

  const data = await getServerSession(authOptions)
  console.log(res)

  return (
    <div className='m-4 h-[100%] border-t py-4'>
      <Table>
      <TableCaption></TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Services</TableHead>
          <TableHead>Catégories</TableHead>
          <TableHead>Prestataires</TableHead>
          <TableHead>Prix</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className='text-right'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {res?.filter((curDate: any) => {
            return curDate?.userEmail === data?.user?.email
            })?.map((item: any) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item?.service?.name_service}</TableCell>
            <TableCell>{item?.prestataire?.categorySlug}</TableCell>
            <TableCell>{item?.prestataire?.name}</TableCell>
            <TableCell>{item?.service?.price}.00 $</TableCell>
            <TableCell>{format(item?.date_reservation, 'd LLLL, yyyy')}</TableCell>
            <TableCell className='text-right'><Action /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      <Bienvenue res={res} />
    </div>
  )
}

export default MesDemandes
