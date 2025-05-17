'use client'

import { ShoppingBag, Users, BoxIcon } from 'lucide-react'

export default function Layanan() {
  const services = [
    {
      icon: <ShoppingBag className="h-10 w-10 text-red-500" />,
      title: 'Pesan Online',
      desc: 'Nikmati kemudahan memesan keripik favoritmu hanya lewat HP.',
      button: 'Pesan Online',
    },
    {
      icon: <Users className="h-10 w-10 text-red-500" />,
      title: 'Reseller',
      desc: 'Stok Sekarang, Untung Tiap Hari. Jadi Reseller KRIBI!',
      button: 'Gabung',
    },
    {
      icon: <BoxIcon className="h-10 w-10 text-red-500" />,
      title: 'Dropship',
      desc: 'Posting, Promosi, Profit! Jadi Dropshipper KRIBI Sekarang!',
      button: 'Gabung',
    },
  ]

  return (
    <section id="layanan" className="bg-white py-10 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-6 mt-6 text-red-500">Layanan Kami</h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-row items-center bg-gray-100 rounded-xl shadow-md p-6 w-full md:w-1/3 hover:shadow-lg hover:cursor-default transition-all"
          >
            <div className="mr-4">{service.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
              <div className="mt-3 w-full">
                <a href="" className="py-2 px-3 bg-gray-100 text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white transition-all">{service.button}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}