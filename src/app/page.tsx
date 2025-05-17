import HeroCarousel from "@/components/heroCarousel";
import Produk from "@/components/produk";
import Layanan from "@/components/layanan";
import Tentang from "@/components/tentang";
import Album from "@/components/album";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroCarousel/>
    <Produk/>
    <Layanan/>
    <Tentang/>
    <Album/>
    <Footer/>
    </>
  );
};