'use client'


import axios from "axios"
import { useState } from "react"
import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation";
import { useToast } from '@/components/ui/use-toast';
import Link from 'next/link'

const Inscription = () => {

    const {toast} = useToast()
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [error, setError] = useState("");
    const [user, setUser] = useState({
            name: '',
            email: '',
            password: ''
        })
    
        const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setLoading(true);
          try {
            if (!user.name || !user.email || !user.password) {
                setError("Veuillez remplir tous les champs");
                return;
              }
            
            const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
            if (!emailRegex.test(user.email)) {
                setError("Email invalide");
                return;
            }

            const res = await axios.post('/api/register', user)
            console.log(res.data);
            if (res.status == 200 || res.status == 201) {
                // toast.success("Utilisateur ajouté avec succès");
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

            setUser({
              name: "",
              email: "",
              password: "",
            });
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
            <form className='border-[1px] py-10 px-[2rem] rounded-lg' onSubmit={registerUser}>
                <div className="">
                    <Label htmlFor="text">Non d'utilisateur</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={user.name}
                        onChange={e => setUser({ ...user, name: e.target.value })}
                        placeholder="Votre nom" className='w-[100%]' 
                    />
                </div>
                <div className="mt-5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={user.email}
                        onChange={e => setUser({ ...user, email: e.target.value })}
                        placeholder="Email" className='w-[100%]' 
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
                        value={user.password}
                        onChange={e => setUser({ ...user, password: e.target.value })}
                        className='w-[100%]' 
                    />
                </div>
                <div className='mt-5'>
                    {error && <p className="py-6 text-lg">{error}</p>}
                    <Button variant='default' type='submit' className='py-7 w-[100%] bg-green-600 text-white hover:bg-green-400'>
                        {loading ? "Processing" : " S'inscrire"}
                    </Button>
                </div>
                <div className="mt-5 text-sm">
                    <h5>Vous avez déjà un compte ?</h5>
                    <Link className='text-green-500 hover:underline max-w-fit' href='/Connexion'>Connectez-vous</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Inscription

