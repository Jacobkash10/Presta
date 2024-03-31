"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Info = ({session}: any) => {
  return (
    <div>
      <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Voir vos informations</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Mes informations</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <div className="flex items-center gap-4">
            <h5>Nom</h5>
            <h5 className='border rounded-lg p-2 w-full'>{session.user.name}</h5>
          </div>
          <div className="mt-4 flex items-center gap-4">
          <h5>Email</h5>
            <h5 className='border rounded-lg p-2 w-full'>{session.user.email}</h5>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default Info