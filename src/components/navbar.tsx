'use client'

import { useState, useEffect} from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setSrcolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSrcolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-red-500 shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center hover:cursor-pointer">
            <img src="./images/logo-kribi-pth.png" className="h-10"/>
            <div className="flex flex-col ml-2 m-0">
              <Link href="/" className="font-bold text-xl text-white leading-none italic">
                Keripik
                <br/>
                Indonesia
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/#beranda" className="text-white p-2 font-bold transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
              Beranda
            </Link>
            <Link href="/#produk" className="text-white p-2 font-bold transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
              Produk
            </Link>
            <Link href="/#layanan" className="text-white p-2 font-bold transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
              Layanan
            </Link>
            <Link href="/#tentang" className="text-white p-2 font-bold transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
              Tentang
            </Link>
            <Link href="/#album" className="text-white p-2 font-bold transition relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
              Dokumentasi
            </Link>
            <Link href="/login" className={`p-2 pl-4 pr-4 rounded-full font-bold transition ${
      scrolled ? 'bg-white text-red-500 hover:bg-gray-300' : 'bg-red-500 text-white hover:bg-white hover:text-red-500'
    }`}>
              Masuk/Daftar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
<div
  className={`md:hidden bg-red-500 shadow transition-all duration-300 ease-in-out overflow-hidden ${
    isOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'
  }`}
>
  <Link href="/#beranda" onClick={()=> {setIsOpen(false)}} className="p-3 block text-white font-bold hover:text-gray-300 transition-all">
    Beranda
  </Link>
  <Link href="/#produk" onClick={()=> {setIsOpen(false)}} className="p-3 block text-white font-bold hover:text-gray-300 transition-all">
    Produk
  </Link>
  <Link href="/#layanan" onClick={()=> {setIsOpen(false)}} className="p-3 block text-white font-bold hover:text-gray-300 transition-all">
    Layanan
  </Link>
  <Link href="/#tentang" onClick={()=> {setIsOpen(false)}} className="p-3 block text-white font-bold hover:text-gray-300 transition-all">
    Tentang
  </Link>
  <Link href="/#kontak" onClick={()=> {setIsOpen(false)}} className="p-3 block text-white font-bold hover:text-gray-300 transition-all">
    Kontak
  </Link>
</div>

    </nav>
  );
}
