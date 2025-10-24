import Image from "next/image";

import Modelo from '@/assets/modelo_img.webp'
import Perfume from '@/assets/perfume_img.webp'
import Caixa_Som from '@/assets/caixasom_img.webp'
import Playstation from '@/assets/playstation_img.webp'

import { CiStar } from "react-icons/ci";

export default function DestaqueSection(){
    return(
        <section className="p-20 flex flex-col
        max-[768px]:py-[30px]
        max-[768px]:px-[10px]">

            <div className="flex items-center gap-3
            max-[768px]:justify-center">

                <CiStar size={30} className="text-[#DB4444] hover:text-gray transition-1s transform hover:scale-110 transition duration-300 cursor-pointer"/> 
                
                <span className="text-[#DB4444] text-[1.3em] font-medium"> Em Destaque </span>

            </div>

            <div className="mt-5
            max-[768px]:items-center
            max-[768px]:justify-center">

                <h1 className="text-2xl font-bold
                max-[768px]:text-center
                max-[768px]:text-[1.5em]"> Lançamento </h1>

            </div>

            <div className="flex justify-between mt-7
            max-[768px]:flex-col
            max-[768px]:gap-10">

                <div className="w-[50%] flex items-center justify-center
                max-[768px]:w-[100%]">

                    <Image 
                        src={Playstation}
                        alt="Banner Promocional"
                        className="rounded-lg shadow-lg"
                    />

                </div>

                <div className="w-[50%] flex flex-col items-center justify-center
                max-[768px]:w-[100%]
                max-[768px]:gap-5">

                    <div className="h-[50%] flex items-center justify-center">

                        <Image 
                            src={Modelo}
                            alt="Banner Promocional"
                            className="rounded-lg shadow-lg"
                        />

                    </div>

                    <div className="h-[50%] flex items-center justify-between gap-10
                    max-[768px]:gap-1"> 

                        <Image 
                            src={Caixa_Som}
                            alt="Banner Promocional"
                            className="rounded-lg shadow-lg
                            max-[768px]:h-[auto]
                            max-[768px]:w-[50%]"
                        />

                        <Image 
                            src={Perfume}
                            alt="Banner Promocional"
                            className="rounded-lg shadow-lg
                            max-[768px]:h-[auto]
                            max-[768px]:w-[50%]"
                        />

                    </div>

                </div>

            </div>

        </section>
    )
}