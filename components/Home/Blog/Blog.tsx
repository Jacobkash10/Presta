import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className='mt-28 flex flex-col items-center justify-center'>
        <h3 className='text-xl nine:text-2xl lg:text-3xl font-bold mb-2'>Besoin de <span className='text-green-600'>conseils ?</span></h3>
        <div className="block xs:grid md:grid-cols-2 nine:grid-cols-3 gap-8 w-[100%] mt-10">
            <div className="w-[100%]">
                <div className="w-[100%] h-[12rem] rounded-lg overflow-hidden">
                    <Link href='/'>
                        <Image src='/images/meuble.jpg' alt='Car' width={0} height={0} sizes='100vw' className='w-[100%] h-[100%] object-cover rounded-lg hover:scale-110 transition-all .4s ease-in-out'  />
                    </Link>
                </div>
                <div className="mt-5">
                    <h5 className='mb-2 font-bold text-[15px] underline'><Link href='/'>Comment démonter vos meubles IKEA ? Astuces et VIDÉOS</Link></h5>
                    <p className='text-sm font-medium'>
                        <Link href='/'>
                            Démonter un meuble IKEA est une mission tout aussi périlleuse 
                            que de l'assembler ! Faites appel à un prestataire sur Prest pour 
                            qu'il vous vienne en aide
                        </Link>
                    </p>
                </div>
            </div>
            <div className="w-[100%] my-12 sm:my-0">
                <div className="w-[100%] h-[12rem] rounded-lg overflow-hidden">
                    <Link href='/'>
                        <Image src='/images/mousse.jpg' alt='Car' width={0} height={0} sizes='100vw' className='w-[100%] h-[100%] object-cover rounded-lg hover:scale-110 transition-all .4s ease-in-out'  />
                    </Link>
                </div>
                <div className="mt-5">
                    <h5 className='mb-2 font-bold text-[15px] underline'><Link href='/'>Comment enlever la mousse sur une terrasse</Link></h5>
                    <p className='text-sm font-medium'>
                        <Link href='/'>
                            Mousse et lichen ont encore envahi votre terrasse ? 
                            Découvrez nos solutions écolos et économiques pour 
                            en venir à bout.
                        </Link>
                    </p>
                </div>
            </div>
            <div className="w-[100%]">
                <div className="w-[100%] h-[12rem] rounded-lg overflow-hidden">
                    <Link href='/'>
                        <Image src='/images/herbe.jpg' alt='Car' width={0} height={0} sizes='100vw' className='w-[100%] h-[100%] object-cover rounded-lg hover:scale-110 transition-all .4s ease-in-out'  />
                    </Link>
                </div>
                <div className="mt-5">
                    <h5 className='mb-2 font-bold text-[15px] underline'><Link href='/'>Comment congeler ses herbes aromatiques ?</Link></h5>
                    <p className='text-sm font-medium'>
                        <Link href='/'>
                            Basilic, menthe, persil ou coriandre ont vite fait de faner, 
                            même au frigo… Pour garder la fraicheur de vos plantes 
                            aromatiques, ne les jetez plus, congelez-les plutôt !
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
