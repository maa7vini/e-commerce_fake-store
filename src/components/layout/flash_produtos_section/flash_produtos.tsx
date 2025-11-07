"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";

import CardProduto from "@/components/produto/card_produto/card_produto";

export default function FlashProdutos(){
    const [produtos, setProdutos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products?limit=4")
            .then((res) => setProdutos(res.data))
            .catch((err) => console.error("Erro ao buscar produtos:", err))
            .finally(() => setLoading(false));
    }, []);

    const tempoInicial = 
    3 * 24 * 60 * 60 + 
    23 * 60 * 60 + 
    19 * 60 + 
    56 

    const [tempoRestante, setTempoRestante] = useState(tempoInicial)

    useEffect(() => {
        if (tempoRestante <= 0) return 

        const interval = setInterval(() => {
            setTempoRestante((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);

    }, [tempoRestante])

    if(!produtos){
        return <p>Carregando...</p>
    }

    const dias = Math.floor(tempoRestante / (24 * 60 * 60));
    const horas = Math.floor((tempoRestante % (24 * 60 * 60)) / 3600);
    const minutos = Math.floor((tempoRestante % 3600) / 60);
    const segundos = tempoRestante % 60;

    return (
        <section className="p-20 flex flex-col max-[768px]:py-[30px] max-[768px]:px-[10px]">

            <div className="flex 
            max-[768px]:items-center  
            max-[768px]:text-center
            max-[768px]:justify-center">

                <AiFillThunderbolt size={30} className="text-[#DB4444] hover:text-gray transition-1s transform hover:scale-110 transition duration-300 cursor-pointer"/> 
                
                <span className="text-[#DB4444] text-[1.3em] font-medium max-[768px]:text-[1.5em]"> Hoje </span>

            </div>

            <div className="mt-5 flex flex-col gap-5 border-b border-b-[#80808062] pb-13">

                <div className="flex flex-wrap gap-16 
                max-[768px]:gap-3
                max-[768px]:items-center
                max-[768px]:justify-center">

                    <h1 className="text-2xl font-bold"> Ofertas Relâmpago </h1>

                    <div className="flex items-center gap-[1.3em] mt-[-5px]">

                        <div className="flex flex-col">

                            <span className="text-[.7em] font-bold">
                                Dias
                            </span>

                            <h1 className="text-[1.7em] font-bold mt-[-7px] ml-[-2px]">
                                {String(dias).padStart(2, "0")}
                            </h1>

                        </div>

                        <p className="text-[#DB4444] text-4xl font-bold mt-[5px]">
                            :
                        </p>

                        <div className="flex flex-col">

                            <span className="text-[.7em] font-bold">
                                Horas
                            </span>

                            <h1 className="text-[1.7em] font-bold mt-[-7px] ml-[-2px]">
                                {String(horas).padStart(2, "0")}
                            </h1>

                        </div>

                        <p className="text-[#DB4444] text-4xl font-bold mt-[5px]">
                            :
                        </p>

                        <div className="flex flex-col">

                            <span className="text-[.7em] font-bold">
                                Minutos
                            </span>

                            <h1 className="text-[1.7em] font-bold mt-[-7px] ml-[-2px]">
                                {String(minutos).padStart(2, "0")}
                            </h1>

                        </div>

                        <p className="text-[#DB4444] text-4xl font-bold mt-[5px]">
                            :
                        </p>

                        <div className="flex flex-col">

                            <span className="text-[.7em] font-bold">
                                Segundos
                            </span>

                            <h1 className="text-[1.7em] font-bold mt-[-7px] ml-[-2px]">
                                {String(segundos).padStart(2, "0")}
                            </h1>

                        </div>

                    </div>

                </div>

                <div className="flex items-center flex-wrap justify-center gap-20
                max-[768px]:gap-10">

                    {loading ? (
                        <div className="flex justify-center items-center">
                            <div className="w-12 h-12 border-4 border-gray-300 border-t-[#DB4444] rounded-full animate-spin"></div>
                        </div>
                        ) : (
                        produtos.map((produto) => (
                            <CardProduto
                            key={produto.id}
                            id={produto.id}
                            title={produto.title}
                            price={produto.price}
                            rating={produto.rating?.rate || 4.5}
                            reviews={produto.rating?.count || 99}
                            image={produto.image}
                            onAddToCart={() => {
                                const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
                                const jaExiste = carrinho.find((p: any) => p.id === produto.id);
                                if (!jaExiste) {
                                const atualizado = [...carrinho, produto];
                                localStorage.setItem("carrinho", JSON.stringify(atualizado));
                                }
                            }}
                            />
                        ))
                    )}

                </div>

                <button className="mt-7 font-[600] transition-[.5s] bg-[#DB4444] text-white text-[1.3em] w-[250px] p-3 m-auto rounded-[5px] cursor-pointer hover:bg-[#d86666]">

                    Ver todos os produtos

                </button>

            </div>

        </section>
    )
}