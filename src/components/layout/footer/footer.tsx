import Image from "next/image"

import Icon_Enviar from '@/assets/icon_enviar.png'
import Qrcode from '@/assets/qrcode.png'
import GoogleStore from '@/assets/google_store.png'
import AppStore from '@/assets/app_store.png'
import Facebook from '@/assets/icon_facebook.png'
import Twitter from '@/assets/icon_twitter.png'
import Linkedin from '@/assets/icon_linkedin.png'

export default function Footer(){
    return(
        <footer className="bg-black text-white px-[40px] py-[30px] bottom-0
        max-[768px]:py-[30px]
        max-[768px]:px-[10px]">

            <div className="flex items-center justify-center flex-wrap gap-7 h-[200px]
            max-[768px]:h-[auto]">

                <div className="flex flex-col w-60 h-full
                max-[768px]:w-full">

                    <h1 className="text-3xl font-bold"> Exclusivo </h1>

                    <h2 className="text-[1.3em] font-bold mt-3"> Inscreva-se </h2>

                    <span className="text-[.9em] mt-3"> Ganhe 10% de desconto no seu primeiro pedido </span>

                    <div className="flex items-center justify-between border-2 border-white w-full rounded-[3px]
                    mt-4 px-[10px] gap-[5px]">

                        <input type="text" placeholder="Digite seu email"
                        className="border-none outline-none py-[10px] flex-1"/>

                        <Image 
                        src={Icon_Enviar}
                        alt="Icone Enviar"/>

                    </div>

                </div>

                <div className="flex flex-col w-60 h-full
                max-[768px]:w-full">

                    <h1 className="text-3xl font-bold"> Suporte </h1>

                    <span className="text-[.9em] mt-3"> 111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh. </span>

                    <span className="text-[.9em] mt-3"> exclusive@gmail.com </span>

                    <span className="text-[.9em] mt-3"> +88015-88888-9999 </span>

                </div>

                <div className="flex flex-col w-60 h-full
                max-[768px]:w-full">

                    <h1 className="text-3xl font-bold"> Conta </h1>

                    <span className="text-[.9em] mt-3"> Minha Conta </span>

                    <span className="text-[.9em] mt-3"> Login/Cadastrar </span>

                    <span className="text-[.9em] mt-3"> Carrinho </span>

                </div>

                <div className="flex flex-col w-60 h-full
                max-[768px]:w-full">

                    <h1 className="text-3xl font-bold"> Links Rápidos </h1>

                    <span className="text-[.9em] mt-3"> Política de Privacidade </span>

                    <span className="text-[.9em] mt-3"> Termos de Uso </span>

                    <span className="text-[.9em] mt-3"> FAQ </span>

                    <span className="text-[.9em] mt-3"> Contato </span>

                </div>

                <div className="flex flex-col w-60 h-full
                max-[768px]:w-full">

                    <h1 className="text-3xl font-bold"> Baixe o App </h1>

                    <div className="flex items-center mt-3 gap-3">

                        <div className="flex items-center justify-center">

                            <Image 
                            src={Qrcode}
                            alt="Qrcode"/>

                        </div>

                        <div className="flex flex-col justify-center gap-3">

                            <Image 
                            src={GoogleStore}
                            alt="Google Store"/>

                            <Image 
                            src={AppStore}
                            alt="App Store"/>

                        </div>

                    </div>

                    <div className="flex items-center gap-3 mt-3">

                        <Image 
                        src={Facebook}
                        alt="Facebook"/>

                        <Image 
                        src={Twitter}
                        alt="Twitter"/>

                        <Image 
                        src={Linkedin}
                        alt="Linkedin"/>

                    </div>

                </div>

            </div>

        </footer>
    )
}