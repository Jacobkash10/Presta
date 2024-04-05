"use client"

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
      Form,
      FormControl,
      FormDescription,
      FormField,
      FormItem,
      FormLabel,
      FormMessage,
    } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {motion} from 'framer-motion'
import {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
    } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
      Select,
      SelectContent,
      SelectItem,
      SelectTrigger,
      SelectValue,
    } from "@/components/ui/select"
import { useForm } from 'react-hook-form'
import { registerSchema } from '@/components/validators/auth'
import z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from '@/lib/utils'
import { ArrowBigRight } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"

type Input = z.infer<typeof registerSchema>;

const page = () => {

      const [formStep, setFormStep] = React.useState(0)
      const { toast } = useToast()
      

      const form = useForm<Input>({
            resolver: zodResolver(registerSchema),
            defaultValues: {
                  confirmPassword: "",
                  email: "",
                  name: "",
                  password: "",
                  studentId: "",
                  year: ""
            }
      })

      function onSubmit(data: Input) {
            if (data.password !== data.confirmPassword) {
                  toast({
                        title: "Password no match",
                        variant: 'destructive'
                  })
                  return;
            }
            alert(JSON.stringify(data, null, 4))
      }

  return (
      <div className='relative py-[20rem]'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <Card className="w-[350px] mt-[5rem]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 relative overflow-x-hidden">
        <motion.div className={cn("space-y-3", {
            // hidden: formStep == 1
        })}
        // formStep == 0 => translateX == 0
        // formStep == 1 => translateX == '-100%'
        animate={{ 
            translateX: `-${formStep * 100}%`
         }}
         transition={{ 
            ease: 'easeInOut'
          }}
        >
        {/* name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* student id */}
        <FormField
          control={form.control}
          name="studentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Student ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter your student ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* year */}
        <FormField
          control={form.control}
          name="year"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                        [10, 11, 12].map(year => {
                              return (
                                    <SelectItem key={year} value={year.toString()}>
                                          Year {year}
                                    </SelectItem>
                              )
                        })
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        </motion.div>
        <motion.div className={cn("space-y-3 absolute left-0 right-0 top-0", {
            // hidden: formStep == 0
        })}
        // formStep == 0 => translateX == 100%
        // formStep == 1 => translateX == 0
        animate = {{ 
            translateX: `${100 - formStep * 100}%`
         }}
         style={{ 
            translateX: `${100 - formStep * 100}`
          }}
         transition={{ 
            ease: 'easeInOut'
          }}
        >
        {/* password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your password" {...field} type='password' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        </motion.div>
        <div className='flex gap-3'>
            <Button
             type="submit"
             className={cn({
                  hidden: formStep == 0,
             })}
             >
                  Submit
            </Button>
            <Button type="button" variant={"ghost"}
                  className={cn({
                        hidden: formStep == 1,
                  })} 
                  onClick={() => {
                  //validation
                  form.trigger(['email', 'name', 'studentId', 'year'])
                  const emailState = form.getFieldState('email')
                  const nameState = form.getFieldState('name')
                  const studentIdState = form.getFieldState('studentId')
                  const yearState = form.getFieldState('year')

                  if(!emailState.isDirty || emailState.invalid) return;
                  if(!nameState.isDirty || nameState.invalid) return;
                  if(!studentIdState.isDirty || studentIdState.invalid) return;
                  if(!yearState.isDirty || yearState.invalid) return;

                  setFormStep(1)
                  }}>
                  Next
                  <ArrowBigRight className='w-4 h-4 ml-2' />
            </Button>
            <Button
             type="button"
             variant={"ghost"}
             onClick={() => {
                  setFormStep(0)
             }}
             className={cn({
                  hidden: formStep == 0,
             })}
             >
                  Go back
            </Button>
        </div>
      </form>
      </Form>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}

export default page