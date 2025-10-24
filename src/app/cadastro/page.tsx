"use client";

import Nav from "@/components/layout/nav/nav";

import Image from "next/image";

import Banner from '@/assets/banner_login_cadastro.png'
import Icon_Google from '@/assets/icon_google.png'

import Footer from "@/components/layout/footer/footer";

export default function CadastroPage(){
    return (
        <section>
            <Nav />

            <div className="flex items-center justify-between">

                <div className="flex items-center justify-center w-[50%]
                max-[768px]:hidden">

                    <Image 
                        src={Banner}
                        alt="Banner Promocional"
                        className="rounded-lg shadow-lg w-full"
                    />

                </div>

                <div className="flex items-center justify-center w-[50%]
                max-[768px]:w-[100%]
                max-[768px]:py-[40px]
                max-[768px]:px-[10px]">

                    <div className="flex flex-col items-center justify-center">

                        <h1 className="text-[2.5em] font-bold
                        max-[768px]:text-center
                        max-[768px]:text-[2em]"> Cadastre-se agora! </h1>

                        <h3 className="mt-3 text-[1.3em] font-[400]
                        max-[768px]:text-center
                        max-[768px]:text-[1.1em]"> Digite suas informações abaixo </h3>

                        <input type="text" placeholder="Nome" 
                        className="border-b border-b-gray-500 w-full mt-5 py-3 outline-none text-[1em]"/>

                        <input type="email" placeholder="Email" 
                        className="border-b border-b-gray-500 w-full mt-5 py-3 outline-none text-[1em]"/>

                        <input type="password" placeholder="Senha" 
                        className="border-b border-b-gray-500 w-full mt-5 py-3 outline-none text-[1em]"/>

                        <button className="bg-[#DB4444] p-3 text-[1.3em] text-white mt-5 rounded-[5px]
                        font-[500] cursor-pointer hover:bg-[#ac3a3a] w-full transition duration-300">
                            Cadastrar
                        </button>

                        <div className="flex items-center justify-center border border-gray-500 w-full mt-3 
                        py-3 rounded-[5px] gap-3 hover:cursor-pointer transition duration-300 hover:bg-[#F5F5F5] 
                        hover:border-black">

                            <Image 
                                src={Icon_Google}
                                alt="Icone Google"
                            />

                            <span className="font-[600] text-[1.2em]">
                                Cadastre-se com o Google
                            </span>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </section>
    )
}