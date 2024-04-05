'use client'

import axios from "axios"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { useState } from "react"
import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation";
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link'
import {z} from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { registerSchema } from "./validators/register"

type Input = z.infer<typeof registerSchema>;

const Inscription = () => {

    const {toast} = useToast()
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [error, setError] = useState("");

        const form = useForm<Input>({
            resolver: zodResolver(registerSchema),
            defaultValues: {
                  confirmPassword: "",
                  email: "",
                  name: "",
                  password: "",
            }
        })

        async function onSubmit(data: Input) {
            setLoading(true);
            try {
                const res = await axios.post('/api/register', data)
                // if (data.email) {
                //     toast({
                //           title: "Cet email existe déjà",
                //           variant: 'destructive'
                //     })
                //     return;
                // }
                if (res.status == 200 || res.status == 201) {
                    toast({
                        title: "Success",
                        description: "Utilisateur ajouté avec succès",
                        variant: "default"
                      }) 
                    setError("");
                    router.push("/Connexion");
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
    <div className='md:flex justify-between'>
        <div className='hidden md:block py-8 bg-secondary'>
            <h3 className='text-3xl font-semibold text-center'>Inscription</h3>
            <div className='w-[100%] h-[30rem]'>
                <Image src='/images/signup.png' width={0} height={0} sizes='100vw' alt='login' className='w-[100%] h-[100%] object-contain' />
            </div>
        </div>
        <div className='md:m-auto sm:px-[4rem] md:px-[3rem] nine:px-[5rem] w-full sm:w-[100%] lg:w-[50%]'>
        <Form {...form}>
            <form className='border-[1px] py-10 px-[2rem] rounded-lg' onSubmit={form.handleSubmit(onSubmit)}>
                <div className="">
                    {/* name */}
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Non d'utilisateur</FormLabel>
                        <FormControl>
                            <Input placeholder="Jhon Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="mt-5">
                    {/* email */}
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="example@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="mt-5">
                    {/* <Label htmlFor=
                    {/* password */}
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Mot de passe</FormLabel>
                        <FormControl>
                            <Input placeholder="" {...field} type='password' />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className="mt-5">
                    {/* confirm password */}
                    <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Confirm password</FormLabel>
                        <FormControl>
                            <Input placeholder="Confirm your password" {...field} type='password' />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <div className='mt-5'>
                    {error && <p className="py-5 text-lg">{error}</p>}
                    <Button variant='default' type='submit' className='py-6 w-[100%] bg-green-600 text-white hover:bg-green-400'>
                        {loading ? "En cours ..." : " S'inscrire"}
                    </Button>
                </div>
                <div className="mt-5 text-base">
                    <h5>Vous avez déjà un compte ?</h5>
                    <Link className='text-green-500 hover:underline max-w-fit' href='/Connexion'>Connectez-vous</Link>
                </div>
            </form>
        </Form>
        </div>
    </div>
  )
}

export default Inscription

