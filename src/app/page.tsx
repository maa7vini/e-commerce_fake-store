import Nav from "@/components/layout/nav/nav";
import Header from "@/components/layout/header/header";
import FlashProdutos from "@/components/layout/flash_produtos_section/flash_produtos";
import Categorias from "@/components/layout/categories_section/categorias_section";
import MaisVendidos from "@/components/layout/mais_vendidos_section/mais_vendidos";
import BannerSection from "@/components/layout/banner_section/banner_section";
import ExploreSection from "@/components/layout/explore_section/explore_section";
import DestaqueSection from "@/components/layout/destaque_section/destaque_section";
import InfoSection from "@/components/layout/info_section/info_section";
import Footer from "@/components/layout/footer/footer";

export default function Home() {
  return (
    <div className="h-dvh">
      <Nav />   
      <Header />   
      <FlashProdutos />  
      <Categorias />
      <MaisVendidos />
      <BannerSection />
      <ExploreSection />
      <DestaqueSection />
      <InfoSection />
      <Footer />
    </div>
  );
}
