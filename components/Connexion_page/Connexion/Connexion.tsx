'use client'

import { useState, useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Google from "../Google/Google"
import { useToast } from "@/components/ui/use-toast"

const Connexion = () => {

 const {toast} = useToast()
  const session = useSession()
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [data, setData] = useState({
     email: '',
      password: ''
    })

    useEffect(() => {
      if (session?.status === 'authenticated') {
         router.push('/Compte/Accueil') 
      }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!data.email || !data.password) {
        setError("Veuillez remplir tous les champs");
        return;
      }
      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
      if (!emailRegex.test(data.email)) {
        setError("Email invalide");
        return;
      }

      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        console.log(res);
        setError("error");
      }

      setError("");
      router.push("/Compte/Accueil");
      toast({
        title: "Success",
        description: "Connecté avec succès!",
        variant: "default"
      })

    } catch (error) {
      console.log(error);
      setError("");
    } 
    finally {
      setLoading(false);

      setData({
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className='md:flex justify-between'>
        <div className='hidden md:block py-8 bg-secondary'>
            <h3 className='text-3xl font-semibold text-center'>Connexion</h3>
            <div className='w-[100%] h-[30rem]'>
                <Image src='/images/login.png' width={0} height={0} sizes='100vw' alt='login' className='w-[100%] h-[100%] object-contain' />
            </div>
        </div>
        <div className='md:m-auto sm:px-[4rem] md:px-[3rem] nine:px-[5rem] w-full sm:w-[100%] lg:w-[50%]'>
            <form className='border-[1px] py-10 px-[2rem] rounded-lg' onSubmit={handleSubmit}>
                <div className="">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={data.email}
                        onChange={e => setData({ ...data, email: e.target.value })}
                        placeholder="exemple@gmail.com" className='w-[100%] py-6' 
                    />
                </div>
                <div className="mt-5">
                    <Label htmlFor="password">Mot de passe</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={data.password}
                        onChange={e => setData({ ...data, password: e.target.value })} 
                        className='w-[100%] py-6'/>
                </div>
                <div className='mt-5'>
                    {error && <p className="py-5 text-lg">{error}</p>}
                    <Button variant='default' type='submit' className='py-6 w-[100%] bg-green-600 text-white hover:bg-green-700'>
                        {loading ? "En cours ..." : " Connexion"}
                    </Button>
                </div>
                <div className="mt-5 text-base">
                    <h5>Si vous n'avez pas de compte</h5>
                    <Link className='text-green-500 hover:underline max-w-fit' href='/Inscription'>Enregistrez-vous</Link>
                </div>
              </form> 
              <h5 className='mt-5 text-center'>Ou</h5>
              <div className='mt-5'>
                  <Google />
              </div>  
        </div>
    </div>
  )
}

export default Connexion
