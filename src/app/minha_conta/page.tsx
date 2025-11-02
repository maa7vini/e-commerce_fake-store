"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/layout/nav/nav";
import Footer from "@/components/layout/footer/footer";

export default function MinhaConta_Page(){
    const [nome, setNome] = useState("");
    const [usuario, setUsuario] = useState("Usuário");

    useEffect(() => {
        const nomeSalvo = localStorage.getItem("usuario");
        if (nomeSalvo) {
            setUsuario(nomeSalvo);
            setNome(nomeSalvo);
        }
    }, []);

    const handleSalvar = () => {
        if (nome.trim() !== "") {
            setUsuario(nome);
            localStorage.setItem("usuario", nome);
        }
    };

    return(
        <section className="h-dvh">

            <Nav />

            <div className="w-full px-20 py-10 flex items-center justify-between
            max-[768px]:py-[30px] max-[768px]:px-[10px] max-[768px]:justify-center max-[768px]:flex-col">

                <p className="font-[600]">
                    <span className="text-[#828282]"> Home / </span> Minha conta
                </p>

                <p className="font-[600]">
                    Bem Vindo(a)!{""} <span className="text-[#DB4444]"> {usuario ? usuario : ""} </span>
                </p>

            </div>

            <div className="flex justify-between px-20 py-5
            max-[768px]:px-[10px]">

                <div className="w-[20%] p-5 font-[600]
                max-[768px]:hidden">

                    <h2> Gerenciar Minha Conta </h2>

                    <ul className="px-5">

                        <li className="text-[#DB4444] transition duration-200
                        hover:cursor-pointer hover:transform hover:scale-[1.1]">
                            Meu Perfil
                        </li>

                    </ul>

                </div>

                <div className="w-[80%] flex items-center
                max-[768px]:w-full max-[768px]:px-[10px] max-[768px]:pb-[30px]">

                    <div className="flex flex-col rounded-[10px] p-10 w-full shadow-lg border border-[#00000007]
                    max-[768px]:p-5">

                        <h3 className="text-[#DB4444] text-2xl font-[700]"> Edite seu Perfil </h3>

                        <div className="w-full mt-5 flex flex-wrap items-center justify-between
                        max-[768px]:gap-3">

                            <div className="flex flex-col
                            max-[768px]:w-full">

                                <label className="font-[500]">
                                    Primeiro Nome
                                </label>

                                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}
                                className="border-none outline-none py-3 
                                px-5 bg-[#F5F5F5] w-[450px] rounded-[5px]
                                max-[768px]:w-[100%] max-[768px]:border max-[768px]:border-red-500"/>

                            </div>

                            <div className="flex flex-col
                            max-[768px]:w-full">

                                <label className="font-[500]">
                                    Sobrenome
                                </label>

                                <input type="text" className="border-none outline-none py-3 
                                px-5 bg-[#F5F5F5] w-[450px] rounded-[5px]
                                max-[768px]:w-[100%]"/>

                            </div>

                        </div>

                        <div className="w-full mt-5 flex flex-wrap items-center justify-between
                        max-[768px]:gap-3">

                            <div className="flex flex-col
                            max-[768px]:w-full">

                                <label className="font-[500]">
                                    Email
                                </label>

                                <input type="email" className="border-none outline-none py-3 
                                px-5 bg-[#F5F5F5] w-[450px] rounded-[5px]
                                max-[768px]:w-[100%]"/>

                            </div>

                            <div className="flex flex-col
                            max-[768px]:w-full">

                                <label className="font-[500]">
                                    Endereço
                                </label>

                                <input type="text" className="border-none outline-none py-3 
                                px-5 bg-[#F5F5F5] w-[450px] rounded-[5px]
                                max-[768px]:w-[100%]"/>

                            </div>

                        </div>

                        <div className="flex flex-col w-full mt-5">

                            <div className="flex flex-col">

                                <label className="font-[500]">
                                    Alterações de Senha
                                </label>

                                <input type="password" placeholder="Senha Atual" 
                                className="border-none outline-none py-3 px-5 
                                bg-[#F5F5F5] w-full rounded-[5px]
                                max-[768px]:w-[100%]"/>

                                <input type="password" placeholder="Nova Senha" 
                                className="border-none outline-none py-3 px-5 
                                bg-[#F5F5F5] w-full rounded-[5px] mt-3
                                max-[768px]:w-[100%]"/>

                                <input type="password" placeholder="Confirmar Nova Senha" 
                                className="border-none outline-none py-3 px-5 
                                bg-[#F5F5F5] w-full rounded-[5px] mt-3
                                max-[768px]:w-[100%]"/>

                            </div>

                        </div>

                        <div className="w-full mt-5 flex items-center justify-end gap-5
                        max-[768px]:mt-10">

                            <span className="cursor-pointer transform transition duration-150 
                            hover:scale-[1.1]"> Cancelar </span>

                            <button onClick={handleSalvar}
                            className="bg-[#DB4444] p-3 font-[600] w-[200px] text-white rounded-[5px]
                            hover:bg-[#d34242] transition duration-300 cursor-pointer">
                                Salvar
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <Footer />

        </section>
    )
}