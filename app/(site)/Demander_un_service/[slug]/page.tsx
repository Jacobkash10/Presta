"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { useToast } from '@/components/ui/use-toast';
import { useSession } from 'next-auth/react'
import axios from 'axios'
import {z} from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import {motion} from 'framer-motion'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Textarea } from "@/components/ui/textarea"
import { reservationSchema } from '@/components/Demander/validators/reservation';
import { Button } from '@/components/ui/button';

interface Data {
  id: string;
  slug: string;
  name_service: string;
  description: string;
  price: number;
  categorySlug: string | null;
}

type Input = z.infer<typeof reservationSchema>;

const MAX_STEPS = 6

const page = ({ params }: { params: { slug: string } }) => {

  const { status } = useSession();
  const [formStep, setFormStep] = React.useState(0)
  const {watch, register, formState: {isValid}} = useForm({mode: "all"})
  const {toast} = useToast()
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [allServices, setAllServices] = useState<Data>()
  const res = allServices
    

    useEffect(() => {
        async function fetchServices(slug: string) {
            const res = await fetch(`http://localhost:3000/api/services/${slug}`, {
                next: {
                    revalidate: 10
                }
            })
          
            const data = await res.json()
            return setAllServices(data.service)
          }
          fetchServices(params.slug)
      }, [])

  const completeForm = () => {
    setFormStep(cur => cur + 1)
  }

  const renderButton = () => {
    if (formStep > 4) {
      return undefined
    }
    else  {
      return (
        <Button type="button" className='py-7' onClick={completeForm}>
            Suivant <ArrowBigRight />
        </Button>
      )
    }
  }

  const goBack = () => {
    setFormStep(cur => cur - 1)
  }

  const form = useForm<Input>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
          serviceSlug: params.slug,
          slug: params.slug,
          address: "",
          date_reservation: new Date(),
          hour: "",
          tel: "",
          description: ""
    }
})


  const createReservation = async (data: Input) => {
    setLoading(true);
    try {
      if (!data.date_reservation || !data.hour || !data.address || !data.tel) {
          setError("Veuillez remplir tous les champs");
          return;
        }

      const res = await axios.post('/api/reservation', data)
      console.log(res.data);
      if (res.status == 200 || res.status == 201) {
          toast({
              title: "Success",
              description: "Demande enrégistrer avec succès",
              variant: "default"
            })
          setError("");
          router.push(`/Demande/${params.slug}`);
      }
      
    } catch (error) {
      console.log(error);
      toast({
          title: "Error",
          description: "",
          variant: "destructive"
      });
    }
    finally {
      setLoading(false);

      data
    }
  }
  
  return (
    <div className='mt-[5rem] py-[2rem] h-screen'>
      <div className='flex flex-col justify-center items-center border-x'>
        <div className='w-[550px]'>
          {formStep < MAX_STEPS && (
            <div className='flex items-center gap-4 border-b pb-4'>
              <h5 className='font-bold text-base'>Etape {formStep + 1} sur {MAX_STEPS}</h5>
          </div>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(createReservation)} className="overflow-x-hidden">
              {formStep == 0 && (<div>
                {/* service */}
                <div className="mt-[4rem] rounded-lg border bg-secondary px-10 py-5 flex flex-col items-center justify-center">
                      <h3 className='mb-3 font-bold text-center text-2xl'>Le service</h3>
                </div>
                 <h2 className='mt-5 border px-3 py-5 rounded-lg font-bold'>{res?.name_service}</h2>
              </div>
              )}
              {formStep == 1 && (<div>
                {/* Date reservation */}
                <FormField
                  control={form.control}
                  name="date_reservation"
                  render={({ field }) => (
                    <FormItem className="flex flex-col items-center justify-center">
                      <FormLabel>
                      <div className="mt-[4rem] rounded-lg border bg-secondary px-10 py-5 flex flex-col items-center justify-center">
                          <h3 className='mb-3 font-bold text-center text-2xl'>Quel jour vous convient le mieux ?</h3>
                      </div>
                      </FormLabel>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            className='border p-5'
                            initialFocus
                          />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              )}
              {formStep == 2 && (<div>
                {/* Heure */}
                <FormField
                  control={form.control}
                  name="hour"
                  render={({ field }) => (
                    <FormItem>
                      <div className="mt-[4rem] rounded-lg border bg-secondary px-10 py-5 flex flex-col items-center justify-center">
                      <h3 className='mb-3 font-bold text-center text-2xl'>Quelle heure vous convient le mieux ?</h3>
                      </div>
                      <FormControl>
                        <Input placeholder="" {...field} className='py-8' type='time' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              )}
              {formStep == 3 && (<div>
                {/* Adresse */}
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <div className="mt-[4rem] rounded-lg border bg-secondary px-10 py-5 flex flex-col items-center justify-center">
                      <h3 className='mb-3 font-bold text-center text-2xl'>Quelle est l'adresse de la prestation ?</h3>
                      </div>
                      <FormControl>
                        <Input placeholder="Casablanca, Mers sultan 09" {...field} className='py-8' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>
              )}
              {formStep == 4 && (
                <div>
                {/* Tel */}
                <FormField
                  control={form.control}
                  name="tel"
                  render={({ field }) => (
                    <FormItem>
                      <div className="mt-[4rem] rounded-lg border bg-secondary px-10 py-5 flex flex-col items-center justify-center">
                        <h3 className='mb-3 font-bold text-center text-2xl'>À quel numéro de téléphone le prestataire pourra-t-il vous joindre ?</h3>
                      </div>
                      <FormControl>
                        <Input placeholder="06 35 26 76 23" {...field} className='py-8' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>
              )}
              {formStep == 5 && (
                <div>
                {/* Précision */}
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          <div className="mt-[4rem] rounded-lg border bg-secondary px-10 py-5 flex flex-col items-center justify-center">
                            <h3 className='mb-3 font-bold text-center text-2xl'>Avez-vous des précisions à apporter ? (Facultatif)</h3>
                          </div>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tapez votre message ici"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              <div className='flex items-center justify-between mt-10'>
                {formStep > 0 && (
                <Button onClick={goBack} type='button' variant={"destructive"} className='py-7'>
                  <ArrowBigLeft/> Retour
                </Button>
                )}
                {renderButton()}
                {formStep == 5 && (
                  <Button type="submit" className='py-7 text-white bg-green-600 hover:bg-green-500 duration-300'>
                      {loading ? "En cours ..." : " Envoyer"}
                  </Button>
                )}
            </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default page
