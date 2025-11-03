"use client"

import { useState } from "react";

import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci"
import { MdCancel } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

import Link from "next/link";

export default function Nav(){
    const [open, setOpen] = useState(false);

    return(
        <nav className="flex flex-col z-0">

            {open && <div className="fixed inset-0 bg-[#F5F5F5] z-[9999] flex 
            items-center justify-center flex-col gap-3 transition duration-700">

                <div className="h-[40px] w-[40px] flex items-center justify-center 
                absolute top-0 right-0 mt-5 mr-5">
                    <MdCancel onClick={() => setOpen(false)} className="h-auto w-[100%]" /> 
                </div>

                <Link href="/">
                    <span className="text-2xl font-[600]"> Home </span>
                </Link>

                <Link href="/login">
                    <span className="text-2xl font-[600]"> Login </span>
                </Link>

                <Link href="/cadastro">
                    <span className="text-2xl font-[600]"> Inscreva-se </span>
                </Link>

                <span className="text-2xl font-[600]"> Sobre Nós </span>

                <span className="text-2xl font-[600]"> Carrinho </span>

                <Link href="/minha_conta">
                    <span className="text-2xl font-[600]"> Minha Conta </span>
                </Link>

            </div>}

            <div className="p-5 text-center text-white bg-black flex items-center justify-center">

                <p>
                    Liquidação de verão para todos os trajes de banho e entrega grátis - DE 50%! <b> Compre Agora </b>
                </p>

            </div>

            <div className="p-10 flex items-center justify-between border border-[#f5f5f5]">

                <Link href="minha_conta">
                    <h1 className="text-2xl font-bold">
                        Exclusive
                    </h1>
                </Link>

                <div className="flex items-center max-[768px]:hidden">

                    <ul className="flex items-center gap-[30px]">
                        <li>
                            <Link href="/"> Home </Link>
                        </li>

                        <li>
                            <Link href="/login"> Login </Link>
                        </li>

                        <li>
                            <a href="#">Sobre Nós</a>
                        </li>

                        <li>
                            <Link href="/cadastro"> Inscreva-se </Link>
                        </li>
                    </ul>

                </div>

                <div className="flex items-center gap-3">

                    <div className="flex items-center bg-[#F5F5F5] p-2 rounded-[5px] max-[768px]:hidden">

                        <div className="flex items-center">

                            <input 
                            type="text" 
                            placeholder="O que você deseja?"
                            className="outline-none"/>

                            <CiSearch size={30} className="text-black hover:text-gray transition-1s"/>

                        </div>

                    </div>
                    
                    <CiShoppingCart size={30} className="text-black hover:text-gray transition-1s transform hover:scale-110 transition duration-300 cursor-pointer 
                    hover:text-red-700 max-[768px]:hidden"/> 

                    <Link href="minha_conta">
                        <CiUser size={30} className="text-black hover:text-gray transition-1s transform hover:scale-110 transition duration-300 cursor-pointer 
                        hover:text-red-700 max-[768px]:hidden"/>
                    </Link>

                    <FiMenu onClick={() => setOpen(!open)}
                    size={30} className="text-black hover:text-gray transition-1s transform hover:scale-110 transition duration-300 cursor-pointer hidden 
                    hover:text-red-700 max-[768px]:block"/> 

                </div>

            </div>

        </nav>
    )
}