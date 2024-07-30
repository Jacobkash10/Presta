import React from 'react'
import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
    } from "@/components/ui/dialog"

const Demander = ({ children }: any) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
            {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-2">
            <DialogHeader>
                  <DialogTitle>
                        Demander un service
                  </DialogTitle>
                  <DialogDescription className="">
                        Salut
                  </DialogDescription>
            </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Demander