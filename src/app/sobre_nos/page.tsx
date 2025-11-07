"use client";

import Nav from "@/components/layout/nav/nav";
import Footer from "@/components/layout/footer/footer";

import Image from "next/image";

import Bg_SobreNos from '@/assets/bg_sobre-nos.png';
import Icon_Caminhao from '@/assets/icon-delivery.png'
import Icon_Microfone from '@/assets/Icon-Customer service.png'
import Icon_Check from '@/assets/Icon-secure.png'

export default function SobreNos_Page(){
    return(
        <section>

            <Nav />

            <div className="w-full px-20 py-10 flex items-center justify-between
            max-[768px]:py-[30px] 
            max-[768px]:px-[10px] 
            max-[768px]:justify-center">

                <p className="font-[600]">
                    <span className="text-[#828282]"> Home / </span> Sobre Nós
                </p>

            </div>

            <div className="flex items-center justify-between">

                <div className="w-[50%] flex justify-center flex-col px-[50px]
                max-[768px]:w-[100%]
                max-[768px]:px-[10px]
                max-[768px]:py-[30px]">

                    <h1 className="text-6xl font-bold
                    max-[768px]:text-center
                    max-[768px]:text-5xl"> Nossa História </h1>

                    <p className="text-[1.1em] leading-[1.5em] font-[500] mt-3
                    max-[768px]:text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium illo magnam 
                        quisquam, qui saepe modi, expedita amet dolor, quia a fugit veritatis molestias minima? 
                        Voluptas placeat vero distinctio laudantium eveniet. Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Minima autem inventore beatae. Totam quasi tenetur quae, quas eligendi, vel 
                        consectetur eaque deserunt eos velit nemo sapiente iusto doloribus optio delectus?
                    </p>

                    <p className="text-[1.1em] leading-[1.5em] font-[500] mt-3
                    max-[768px]:text-justify">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime saepe rerum magni earum 
                        pariatur consequatur, architecto minima! Praesentium ipsum architecto non, eaque vitae 
                        atque nobis tempora, saepe eius, amet distinctio?
                    </p>

                </div>

                <div className="w-[50%] flex items-center justify-center
                max-[768px]:hidden">

                    <Image 
                        src={Bg_SobreNos}
                        alt="Banner Promocional"
                        className="rounded-lg shadow-lg
                        max-[768px]:h-[auto]
                        max-[768px]:w-[100%]"/>

                </div>

            </div>

            <div className="flex flex-wrap items-center justify-center gap-10 text-center mt-[100px] pb-[100px]
            max-[768px]:px-[10px]
            max-[768px]:py-[30px]
            max-[768px]:mt-[0px]">
            
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

            <Footer />

        </section>
    )
}