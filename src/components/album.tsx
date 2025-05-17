'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Album() {
    const images = [
        "/images/gambar1.jpeg",
        "/images/gambar2.jpeg",
        "/images/gambar3.jpeg",
        "/images/gambar4.jpeg",
    ];
    return (
        <div id="album" className="bg-white w-full h-full overflow-x-hidden">
            <div className="min-h-screen w-full flex items-center justify-center">
                <div className="flex flex-col md:flex-col items-center justify-center max-w-screen-xl mx-auto">
                    <div className="p-3">
                        <h1 className="text-2xl font-bold text-red-500">Dokumentasi</h1>
                    </div>
                    <div className="w-full max-w-2xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-xl shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Dokumentasi ${index + 1}`}
              className="w-full h-64 object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
                </div>
            </div>
        </div>
    );
}