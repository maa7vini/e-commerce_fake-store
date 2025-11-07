"use client";

import { useState, useEffect } from "react";

import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

interface CardProdutoProps {
    title: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    id?: number;
    isCarrinho?: boolean;
    onAddToCart?: () => void;
    onRemoveFromCart?: () => void;
}

export default function CardProduto({id, title, price, rating = 0, reviews = 0, image, isCarrinho = false, onAddToCart, onRemoveFromCart}: CardProdutoProps){
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
      const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
      const jaExiste = carrinho.some((p: any) => p.id === id);
      setIsFavorited(jaExiste);
    }, [id]);

    const handleFavoriteClick = () => {
      setIsFavorited(!isFavorited);
      if (!isFavorited && onAddToCart) {
        onAddToCart();
      }
    };

    return(
        <div className="flex flex-col h-auto w-[250px] rounded-[3px] group hover:cursor-pointer">
      
      <div
        className="bg-[#F5F5F5] h-[200px] w-[250px] flex items-center justify-center 
        bg-no-repeat bg-center relative z-0 p-10"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "contain", }}
      >

        <div
          className="bg-white flex items-center justify-center p-[5px] rounded-2xl hover:scale-110 transition duration-300 cursor-pointer absolute z-10 top-2 right-2"
          onClick={isCarrinho ? onRemoveFromCart : handleFavoriteClick}
        >
          {isCarrinho ? (
            <FaTrash size={18} className="text-gray-700 hover:text-[#DB4444]" />
          ) : (
            <CiHeart
              size={22}
              className={`transition duration-300 ${
                isFavorited ? "text-[#DB4444]" : "text-black"
              }`}
            />
          )}
        </div>
       
        <div className="bg-yellow-500 flex items-center  
                        px-[5px] py-[0px] rounded-[3px] absolute z-10 top-2 left-2 text-white gap-[3px]">
          <FaStar size={13} className="mt-[-3px] text-white"/>
          <p className="text-[15px] font-bold">{rating.toFixed(1)}</p>
        </div>

        
        <div className="bg-black flex items-center p-[5px] 
                        justify-center absolute z-10 bottom-0 w-full 
                        rounded-t-none rounded-br-[5px] rounded-bl-[3px] 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="text-white font-[600]"> Comprar Agora </span>
        </div>
      </div>

      
      <div className="pt-3 pr-5 pb-0 pl-0 flex flex-col">
        <h3 className="w-full truncate font-bold text-[1em]">{title}</h3>

        <div className="flex items-center gap-3 mt-1">
          <span className="text-[#DB4444] font-bold">${price}</span>
        </div>

        <div className="flex items-center gap-3 mt-1">
          <div className="flex items-center gap-1">
            {Array(5).fill(0).map((_, i) => (
              <FaStar
                key={i}
                size={18}
                className={i < Math.round(rating) ? "text-yellow-500" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-gray-500 font-bold">({reviews})</span>
        </div>
      </div>
    </div>
    )
}