import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci"
import { FiMenu } from "react-icons/fi";

import Link from "next/link";

export default function Nav(){
    return(
        <nav className="flex flex-col">

            <div className="p-5 text-center text-white bg-black flex items-center justify-center">

                <p>
                    Liquidação de verão para todos os trajes de banho e entrega grátis - DE 50%! <b> Compre Agora </b>
                </p>

            </div>

            <div className="p-10 flex items-center justify-between border border-[#f5f5f5]">

                <h1 className="text-2xl font-bold">
                    Exclusive
                </h1>

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

                    <CiHeart size={30} className="text-black hover:text-gray transition-1s transform hover:scale-110 transition duration-300 cursor-pointer max-[768px]:hidden"/>
                    
                    <CiShoppingCart size={30} className="text-black hover:text-gray transition-1s transform hover:scale-110 transition duration-300 cursor-pointer max-[768px]:hidden"/> 

                    <FiMenu size={30} className="text-black hover:text-gray transition-1s transform hover:scale-110 transition duration-300 cursor-pointer hidden max-[768px]:block"/> 

                </div>

            </div>

        </nav>
    )
}