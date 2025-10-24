"use client";

import Nav from "@/components/layout/nav/nav";

import Image from "next/image";

import Banner from '@/assets/banner_login_cadastro.png'
import Icon_Google from '@/assets/icon_google.png'

import Footer from "@/components/layout/footer/footer";

export default function LoginPage(){
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
                        max-[768px]:text-[1.5em]"> Entre na sua conta agora! </h1>

                        <h3 className="mt-3 text-[1.3em] font-[400]
                        max-[768px]:text-center
                        max-[768px]:text-[1.1em]"> Digite suas informações abaixo </h3>

                        <input type="email" placeholder="Email" 
                        className="border-b border-b-gray-500 w-full mt-5 py-3 outline-none text-[1em]"/>

                        <input type="password" placeholder="Senha" 
                        className="border-b border-b-gray-500 w-full mt-5 py-3 outline-none text-[1em]"/>

                        <div className="w-full flex flex-wrap items-center justify-between mt-5">

                            <button className="bg-[#DB4444] p-3 w-[40%] text-white rounded-[5px]
                            hover:bg-[#c74d4d] transition duration-300 cursor-pointer">
                                Entrar
                            </button>

                            <span className="text-[#DB4444] cursor-pointer underline
                            hover:text-[#c74d4d]">
                                Esqueceu sua senha?
                            </span>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </section>
    )
}