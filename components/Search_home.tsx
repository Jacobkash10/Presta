import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ArrowBigRight, Search } from "lucide-react"
import Link from "next/link"

async function fetchCategories() {
  const res = await fetch("http://localhost:3000/api/categories", {
    next: {
      revalidate: 10,
    }
  })
  const data = await res.json();
  return data.categories
}

export async function SearchHome() {

  const services = await fetchCategories()

  return (
    <Dialog>
      <DialogTrigger asChild>
      <div className='flex items-center justify-center gap-2 border border-input bg-[#0000002b] py-2 pl-5 pr-2 mb-8 rounded-full w-[90%] xs:w-[70%] sm:w-[50%] md:w-[52%] nine:w-[40%] cursor-pointer transition-all .3s hover:bg-[#6b676739]'>
            <span className="w-[90%] text-[grey] text-sm md:sm nine:base">Rechercher un service</span>
            <i className='bg-green-700 h-[100%] p-2 rounded-3xl'><Search color='white' size={25} /></i>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-2">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 border-b pl-2 mb-2">
          <Search size={18} />
          <Input
              id=""
              placeholder="Rechercher un service"
              className="w-[87%] border-none"
            />
          </DialogTitle>
          <DialogDescription className="grid grid-cols-1 gap-3">
            <p className="mb-2 text-xs">Nos services</p>
            {
                  services?.slice(0, 6)?.map((item: any) => (
                        <div className="py-2 px-2 hover:bg-[#aaa49762] bg-secondary transition-none .3s flex items-center gap-3" key={item.id}>
                              <i><ArrowBigRight className="text-primary" /></i>
                              <Link className="text-primary w-full" href={"/UnService"}>
                                    {item.name_cate}
                              </Link>
                        </div>
                  ))
            }
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
