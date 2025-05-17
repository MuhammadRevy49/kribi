import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-red-500 text-white pt-12 pb-6 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
            <div className="flex flex-row mb-2">
                <img src="./images/logo-kribi-pth.png" className="h-12"/>
                <div>
                    <h2 className="italic ml-1 font-bold">Keripik<br/>Indonesia</h2>
                </div>
            </div>
          <p className="text-sm text-white/80">
            Keripik renyah, gurih, dan penuh rasa. Buatan anak bangsa dengan cinta.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Sosial Media</h3>
          <ul className="space-y-2">
            <li className="flex flex-row items-center">
                <FaInstagram className="mr-1"/>
              <a href="#produk" className="hover:underline">
                kribi.indonesia
              </a>
            </li>
            <li className="flex flex-row items-center">
                <FaTiktok className="mr-1"/>
              <a href="#layanan" className="hover:underline">
                kribi.indonesia
              </a>
            </li>
            <li className="flex flex-row items-center">
                <FaYoutube className="mr-1"/>
              <a href="#kontak" className="hover:underline">
                Kribi Official
              </a>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Kontak</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 0822-9513-9799
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> kribiindonesia@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Cimahi, Bandung
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} Kribi. All rights reserved.
      </div>
    </footer>
  )
}
