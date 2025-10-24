import Image from "next/image";

import Banner from '@/assets/banner.webp';

export default function Header(){
    return (
        <header className="flex justify-between items-center border-t border-gray-200">

            <div className="h-full w-[30%] p-5 border-r border-gray-200 flex items-center justify-center max-[768px]:hidden">

                <ul className="flex flex-col gap-[10px]">

                    <li className="text-[1.3em] font-medium transform hover:scale-110 transition duration-200 cursor-pointer"> Eletrônicos </li>

                    <li className="text-[1.3em] font-medium transform hover:scale-110 transition duration-200 cursor-pointer"> Joias e Acessórios </li>

                    <li className="text-[1.3em] font-medium transform hover:scale-110 transition duration-200 cursor-pointer"> Roupas Masculinas </li>

                    <li className="text-[1.3em] font-medium transform hover:scale-110 transition duration-200 cursor-pointer"> Roupas Femininas </li>

                    <li className="text-[1.3em] font-medium transform hover:scale-110 transition duration-200 cursor-pointer"> Medicamentos </li>

                    <li className="text-[1.3em] font-medium transform hover:scale-110 transition duration-200 cursor-pointer"> Esportes & Lazer </li>

                    <li className="text-[1.3em] font-medium transform hover:scale-110 transition duration-200 cursor-pointer"> Bebês & Brinquedos </li>

                    <li className="text-[1.3em] font-medium transform hover:scale-110 transition duration-200 cursor-pointer"> Mercados & Petshop </li>

                    <li className="text-[1.3em] font-medium transform hover:scale-110 transition duration-200 cursor-pointer"> Saúde & Beleza </li>

                </ul>

            </div>

            <div className="h-[100%] w-[70%] p-5 flex items-center justify-center max-[768px]:w-[100%]">

                <Image 
                src={Banner}
                alt="Banner Promocional"
                className="rounded-lg shadow-lg
                max-[768px]:h-auto
                max-[768px]:w-[100%]"/>

            </div>

        </header>
    )
}