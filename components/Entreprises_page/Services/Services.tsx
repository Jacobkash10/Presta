import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Img1 from '../../../public/images/bricolage_bus.jpg'
import Img2 from '../../../public/images/vert.webp'
import Img3 from '../../../public/images/locaux.webp'
import { ChevronRight } from 'lucide-react'

const Services = () => {
  return (
    <div className='mt-12 w-[100%]'>
        <h3 className='text-3xl font-bold mb-1'>De quel <span className='text-green-600'>service</span> avez-vous besoin ?</h3>
        <p className='max-w-lg mb-1 text-base'>Pour chaque situation, trouvez le prestataire dont les compétences répondent à vos attentes et à votre niveau d’exigence.</p>
        <div className='grid grid-cols-2 grid-rows-3 items-center gap-20 mt-12 w-[100%]'>
            <div className="border border-input bg-secondary w-[100%] h-[16rem] rounded-lg  overflow-hidden">
                <Image src={Img1} alt='Car' width={0} height={0} sizes='100vw' className='w-[100%] h-[100%] object-cover rounded-lg'  />
            </div>
            <div>
                <h3 className='text-[22px] font-bold mb-3'>Bricolage et rénovation</h3>
                <p className='text-sm mb-3'>De l’assemblage de vos nouveaux bureaux au débarrassage de votre salle d’archives, 
                    en passant par toutes les petites réparations et rénovations de vos locaux au quotidien, 
                    trouvez le bon prestataire professionnel où et quand vous voulez.
                </p>
                <Link className='text-green-600 font-semibold flex items-center gap-2 max-w-fit hover:underline' href={"/"}>Découvrir <i><ChevronRight size={20}/></i></Link>
            </div>

            
            <div>
                <h3 className='text-[22px] font-bold mb-3'>Entretien de vos espaces verts</h3>
                <p className='text-sm mb-3'>
                    Faites intervenir des jardiniers et des paysagistes de métier pour prendre soin de vos terrasses, 
                    parkings, cours, ou n’importe quel endroit avec un peu de vert, en 2 clics et en toute sérénité.
                </p>
                <Link className='text-green-600 font-semibold flex items-center gap-2 max-w-fit hover:underline' href={"/"}>Découvrir <i><ChevronRight size={20}/></i></Link>
            </div>
            <div className="border border-input bg-secondary w-[100%] h-[16rem] rounded-lg  overflow-hidden">
                <Image src={Img2} alt='Car' width={0} height={0} sizes='100vw' className='w-[100%] h-[100%] object-cover rounded-lg'  />
            </div>
            

            <div className="border border-input bg-secondary w-[100%] h-[16rem] rounded-lg  overflow-hidden">
                <Image src={Img3} alt='Car' width={0} height={0} sizes='100vw' className='w-[100%] h-[100%] object-cover rounded-lg'  />
            </div>
            <div>
                <h3 className='text-[22px] font-bold mb-3'>Nettoyage des locaux</h3>
                <p className='text-sm mb-3'>
                    Pour une intervention éclair avant la visite d’un client ou pour des prestations régulières, 
                    par des spécialistes professionnels du ménage de locaux et d’espaces communs, à votre écoute.
                </p>
                <Link className='text-green-600 font-semibold flex items-center gap-2 max-w-fit hover:underline' href={"/"}>Découvrir <i><ChevronRight size={20}/></i></Link>
            </div>
        </div>  
    </div>
  )
}

export default Services
