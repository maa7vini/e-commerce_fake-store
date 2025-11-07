"use client";

import axios from "axios";

import { useState, useEffect } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";

import CardProduto from "@/components/produto/card_produto/card_produto";

export default function MaisVendidos(){
    const [produtos, setProdutos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products?limit=4")
            .then((res) => setProdutos(res.data))
            .catch((err) => console.error("Erro ao buscar produtos:", err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="py-10 px-20 flex flex-col 
        max-[768px]:py-[30px] 
        max-[768px]:px-[10px]">
            
            <div className="flex items-center gap-3
            max-[768px]:justify-center">
            
                <MdOutlineCalendarMonth size={30} className="text-[#DB4444] hover:text-gray transition-1s transform hover:scale-110 transition duration-300 cursor-pointer"/> 
                            
                <span className="text-[#DB4444] text-[1.3em] font-medium
                max-[768px]:text-[1.5em]"> Esse Mês </span>
            
            </div>

            <div className="mt-5
            max-[768px]:items-center
            max-[768px]:justify-center">

                <h1 className="text-2xl font-bold
                max-[768px]:text-center"> Produtos Mais Vendidos </h1>

            </div>

            <div className="flex items-center flex-wrap justify-center gap-20 mt-5
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

        </section>
    )
}