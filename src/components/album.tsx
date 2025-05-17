'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Album() {
    const images = [
        "https://i0.wp.com/www.tokomesin.com/wp-content/uploads/2017/09/singkong-balado-pedas.png?fit=555%2C416&ssl=1",
        "https://serikatnews.com/wp-content/uploads/2023/04/astronauts-id.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBmR946Cr2VcfC_M4-zrn8W-1Rbbk-2dGNA&s"
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