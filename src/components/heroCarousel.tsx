'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
  'https://www.dapurkobe.co.id/wp-content/uploads/makaroni-saus-karamel.jpg',
  'https://cnc-magazine.oramiland.com/parenting/original_images/Resep_Basreng_Pedas_Manis_Daun_Jeruk.jpeg',
  'https://i.ytimg.com/vi/h1jZ_wd3Fo0/maxresdefault.jpg'
];

export default function HeroCarousel() {
  return (
    <div className="w-full h-full" id="beranda">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2300 }}
        pagination={{ clickable: true }}
        loop
        className="w-sreen h-screen"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute z-20 inset-0 bg-black/70"></div>
          </SwiperSlide>
        ))}
      </Swiper>
        <div className="absolute z-20 inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold"><code>Keripik Orang Indonesia</code></h1>
            <p className="text-lg md:text-xl"><code>#KeripikBojotIndonesia</code></p>
            <a href="#produk" className="mt-3 relative overflow-hidden px-6 py-2 border border-white text-white font-semibold rounded-full group">
              <span className="relative z-10">Lihat Selengkapnya</span>
              <span className="absolute inset-0 bg-red-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
        </div>
    </div>
  );
}