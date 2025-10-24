import { FaList } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { CgGames } from "react-icons/cg";

export default function Categorias(){
    return(
        <section className="py-10 px-20 flex flex-col max-[768px]:py-[30px] max-[768px]:px-[10px]">

            <div className="flex items-center gap-3
            max-[768px]:text-center
            max-[768px]:justify-center">

                <FaList size={30} className="text-[#DB4444] hover:text-gray transition-1s transform hover:scale-110 transition duration-300 cursor-pointer"/> 
                
                <span className="text-[#DB4444] text-[1.3em] font-medium max-[768px]:text-[1.5em]"> Categorias </span>

            </div>

            <div className="mt-5
            max-[768px]:items-center 
            max-[768px]:justify-center">

                <h1 className="text-2xl font-bold 
                max-[768px]:text-center"> Procure Por Categoria </h1>

            </div>

            <div className="mt-5 flex items-center justify-center gap-2 flex-wrap border-b border-b-[#80808062] pb-13">

                <div className="group border-2 border-[#99a1af56] hover:border-[#DB4444] h-40 w-50 gap-3 rounded-[3px] 
                flex items-center justify-center flex-col hover:text-white hover:bg-[#DB4444] 
                hover:cursor-pointer transition-colors duration-300 ease-in-out">

                    <IoPhonePortraitOutline size={40} className="text-black group-hover:text-white transition-colors duration-300 ease-in-out"/> 

                    <span className="font-[600] group-hover:text-white transition-colors duration-300 ease-in-out"> Celulares </span>

                </div>

                <div className="group border-2 border-[#99a1af56] hover:border-[#DB4444] h-40 w-50 gap-3 rounded-[3px] 
                flex items-center justify-center flex-col hover:text-white hover:bg-[#DB4444] 
                hover:cursor-pointer transition-colors duration-300 ease-in-out">

                    <HiOutlineComputerDesktop size={40} className="text-black group-hover:text-white transition-colors duration-300 ease-in-out"/> 

                    <span className="font-[600] group-hover:text-white transition-colors duration-300 ease-in-out"> Computadores </span>

                </div>

                <div className="group border-2 border-[#99a1af56] hover:border-[#DB4444] h-40 w-50 gap-3 rounded-[3px] 
                flex items-center justify-center flex-col hover:text-white hover:bg-[#DB4444] 
                hover:cursor-pointer transition-colors duration-300 ease-in-out">

                    <BsSmartwatch size={40} className="text-black group-hover:text-white transition-colors duration-300 ease-in-out"/> 

                    <span className="font-[600] group-hover:text-white transition-colors duration-300 ease-in-out"> SmartWatch </span>

                </div>

                <div className="group border-2 border-[#99a1af56] hover:border-[#DB4444] h-40 w-50 gap-3 rounded-[3px] 
                flex items-center justify-center flex-col hover:text-white hover:bg-[#DB4444] 
                hover:cursor-pointer transition-colors duration-300 ease-in-out">

                    <CiCamera size={40} className="text-black group-hover:text-white transition-colors duration-300 ease-in-out"/> 

                    <span className="font-[600] group-hover:text-white transition-colors duration-300 ease-in-out"> Camera </span>

                </div>

                <div className="group border-2 border-[#99a1af56] hover:border-[#DB4444] h-40 w-50 gap-3 rounded-[3px] 
                flex items-center justify-center flex-col hover:text-white hover:bg-[#DB4444] 
                hover:cursor-pointer transition-colors duration-300 ease-in-out">

                    <CiHeadphones size={40} className="text-black group-hover:text-white transition-colors duration-300 ease-in-out"/> 

                    <span className="font-[600] group-hover:text-white transition-colors duration-300 ease-in-out"> HeadPhones </span>

                </div>

                <div className="group border-2 border-[#99a1af56] hover:border-[#DB4444] h-40 w-50 gap-3 rounded-[3px] 
                flex items-center justify-center flex-col hover:text-white hover:bg-[#DB4444] 
                hover:cursor-pointer transition-colors duration-300 ease-in-out">

                    <CgGames size={40} className="text-black group-hover:text-white transition-colors duration-300 ease-in-out"/> 

                    <span className="font-[600] group-hover:text-white transition-colors duration-300 ease-in-out"> Jogos </span>

                </div>

            </div>

        </section>
    )
}