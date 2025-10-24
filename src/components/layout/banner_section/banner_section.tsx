import Image from "next/image"
import Banner from '@/assets/banne_2.webp'


export default function BannerSection(){
    return(
        <section className="py-10 px-20 flex items-center justify-center
        max-[768px]:py-[30px]
        max-[768px]:px-[10px]">

            <Image 
            src={Banner}
            alt="Banner Promocional"
            className="rounded-lg shadow-lg
            max-[768px]:h-[auto]
            max-[768px]:w-[100%]"/>

        </section>
    )
}