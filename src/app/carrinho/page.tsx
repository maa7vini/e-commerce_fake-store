"use client";

import { useState, useEffect } from "react";

import Nav from "@/components/layout/nav/nav";
import Footer from "@/components/layout/footer/footer";

import CardProduto from "@/components/produto/card_produto/card_produto";

export default function CarrinhoPage(){
    const [produtos, setProdutos] = useState<any[]>([]);
    const [qtdItens, setQtdItens] = useState(0);
    
    useEffect(() => {
        const carrinhoSalvo = localStorage.getItem("carrinho")
        if (carrinhoSalvo){
            setProdutos(JSON.parse(carrinhoSalvo));
        }
    }, []);

    useEffect(() => {
        const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
        setQtdItens(carrinho.length);
    }, []);

    const removerProduto = (id: Number) => {
        const atualizado = produtos.filter((p) => p.id !== id);
        setProdutos(atualizado);
        localStorage.setItem("carrinho", JSON.stringify(atualizado));
    };

    return(
        <section className="h-[100vh]">

            <Nav />

            <div className="px-20 mt-15
            max-[768px]:flex
            max-[768px]:items-center
            max-[768px]:justify-center
            max-[768px]:text-center">

                <p className="text-2xl font-bold"> Carrinho <span> ({qtdItens}) </span> </p>

            </div>

            <div className="flex items-center flex-wrap gap-20 mt-10 px-20 pb-20
                max-[768px]:gap-10
                max-[768px]:px-[10px]
                max-[768px]:py-[30px]
                max-[768px]:justify-center">
            
                {produtos.length === 0 ? (
                    <p className="text-gray-500 text-lg">Seu carrinho está vazio.</p>
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
                        isCarrinho
                        onRemoveFromCart={() => removerProduto(produto.id)}
                        />
                    ))
                )}
            
            </div>

            <Footer />

        </section>
    )
}