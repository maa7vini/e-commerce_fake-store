import Image from "next/image";
import Icon_Caminhao from '@/assets/icon-delivery.png'
import Icon_Microfone from '@/assets/Icon-Customer service.png'
import Icon_Check from '@/assets/Icon-secure.png'

import { CiStar } from "react-icons/ci";

export default function InfoSection(){
    return(
        <section className="p-20 flex items-center justify-center">

            <div className="flex flex-wrap items-center justify-center gap-10 text-center">

                <div className="flex items-center justify-center flex-col gap-3">

                    <div className="h-[50px] w-[50px] rounded-[50%] bg-black flex items-center justify-center">

                        <Image 
                        src={Icon_Caminhao}
                        alt="Icone Caminhão"
                        className="margin-auto"/>

                    </div>

                    <h1 className="font-bold text-[1.3em]"> ENTREGA RÁPIDA E GRATUITA </h1>

                    <span className="font-medium"> Frete grátis para todos os pedidos acima de R$140 </span>

                </div>

                <div className="flex items-center justify-center flex-col gap-3">

                    <div className="h-[50px] w-[50px] rounded-[50%] bg-black flex items-center justify-center">

                        <Image 
                        src={Icon_Check}
                        alt="Icone Check"
                        className="margin-auto"/>

                    </div>

                    <h1 className="font-bold text-[1.3em]"> ATENDIMENTO AO CLIENTE 24H </h1>

                    <span className="font-medium"> Suporte disponível 24 horas por dia </span>

                </div>

                <div className="flex items-center justify-center flex-col gap-3">

                    <div className="h-[50px] w-[50px] rounded-[50%] bg-black flex items-center justify-center">

                        <Image 
                        src={Icon_Microfone}
                        alt="Icone Microfone"
                        className="margin-auto"/> 

                    </div>

                    <h1 className="font-bold text-[1.3em]"> GARANTIA DE DEVOLUÇÃO DO DINHEIRO </h1>

                    <span className="font-medium"> Devolvemos seu dinheiro em até 30 dias </span>

                </div>

            </div>

        </section>
    )
}