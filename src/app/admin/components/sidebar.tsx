'use client'

import { FaHome, FaBook, FaBox, FaBookOpen } from "react-icons/fa";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const togglePesanan = () => setIsOpen(!isOpen);
  const toggleLaporan = () => setIsOpen2(!isOpen2);

  return (
    <aside className="h-screen w-60 flex flex-col justify-between bg-red-500 text-white p-4">
      {/* --- Logo Header --- */}
      <div>
        <div className="flex flex-row items-center justify-center">
          <img src="./images/logo-kribi-pth.png" className="h-8" />
          <div className="ml-1 italic font-bold text-[12px] text-gray-100">
            <p>Keripik</p>
            <p>Indonesia</p>
          </div>
        </div>

        {/* --- Menu Utama --- */}
        <div className="space-y-2 mt-8">
          {/* Dashboard */}
          <Link
            href="/admin"
            className="shadow flex items-center relative overflow-hidden px-6 py-2 text-white font-semibold rounded group hover:text-red-500 hover:cursor-pointer"
          >
            <FaHome className="z-10" />
            <p className="ml-2 z-10">Dashboard</p>
            <span className="absolute inset-0 bg-gray-200 scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
          </Link>

          {/* Produk */}
          <Link
            href="/admin/produk"
            className="shadow flex items-center relative overflow-hidden px-6 py-2 text-white font-semibold rounded group hover:text-red-500 hover:cursor-pointer"
          >
            <FaBox className="z-10" />
            <p className="ml-2 z-10">Produk</p>
            <span className="absolute inset-0 bg-gray-200 scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
          </Link>

          {/* Pesanan */}
          <button
            onClick={togglePesanan}
            className="shadow w-full text-left flex items-center relative overflow-hidden px-6 py-2 text-white font-semibold rounded group hover:text-red-500 hover:cursor-pointer"
          >
            <FaBookOpen className="z-10" />
            <p className="ml-2 z-10">Pesanan</p>
            <span className="absolute inset-0 bg-gray-200 scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
          </button>

          {/* Submenu Pesanan */}
          <div
            className={`ml-6 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <Link
              href="/admin/pesanan/online"
              className="block px-4 py-1 rounded hover:bg-gray-200 hover:text-red-500 transition"
            >
              + Pesanan Online
            </Link>
            <Link
              href="/admin/pesanan/offline"
              className="block px-4 py-1 rounded hover:bg-gray-200 hover:text-red-500 transition"
            >
              + Pesanan Offline
            </Link>
          </div>

          {/* Laporan */}
          <button
            onClick={toggleLaporan}
            className="shadow w-full text-left flex items-center relative overflow-hidden px-6 py-2 text-white font-semibold rounded group hover:text-red-500 hover:cursor-pointer"
          >
            <FaBook className="z-10" />
            <p className="ml-2 z-10">Laporan</p>
            <span className="absolute inset-0 bg-gray-200 scale-x-0 origin-left transition-transform duration-200 group-hover:scale-x-100"></span>
          </button>

          {/* Submenu Laporan */}
          <div
            className={`ml-6 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen2 ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <Link
              href="/admin/laporan/online"
              className="block px-4 py-1 rounded hover:bg-gray-200 hover:text-red-500 transition"
            >
              + Laporan Online
            </Link>
            <Link
              href="/admin/laporan/offline"
              className="block px-4 py-1 rounded hover:bg-gray-200 hover:text-red-500 transition"
            >
              + Laporan Offline
            </Link>
          </div>
        </div>
      </div>

      {/* --- Profil & Footer --- */}
      <div className="space-y-4">
        {/* User Profile */}
        <div className="p-2 text-center flex items-center">
          <div className="mr-2 w-10 h-10 rounded-full bg-gray-200 text-red-500 flex items-center justify-center font-bold text-lg">
            M
          </div>
          <div className="text-left text-sm">
            <p className="text-white font-semibold">Muhammad Revy</p>
            <p className="text-white text-xs">mrevy@gmail.com</p>
          </div>
          <a href="/logout"><LogOut className="w-4 ml-2 text-sm" /></a>
        </div>

        {/* Copyright */}
        <p className="text-center text-red-400 text-xs">&copy; Kribi 2025</p>
      </div>
    </aside>
  );
}