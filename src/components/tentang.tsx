'use client'

export default function Tentang() {
  return (
    <div id="tentang" className="bg-gray-100 w-full overflow-x-hidden">
      <div className="min-h-screen w-full flex items-center justify-center px-4 py-10">
        <div className="flex flex-col items-center justify-center max-w-5xl w-full">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-red-500 mt-6">Tentang Kami</h1>
          </div>

          <div className="flex flex-col gap-6 w-full">
            {/* Poin 1 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition mx-auto w-full max-w-3xl text-left">
              <h3 className="text-lg font-bold text-red-600 mb-2">Perjalanan</h3>
              <p className="text-sm md:text-base text-gray-700">
                Produk ini dirintis oleh generasi muda kreatif yang ingin menghadirkan inovasi dalam dunia kuliner tradisional. Kami membawa semangat baru dalam setiap keripik.
              </p>
            </div>

            {/* Poin 2 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition mx-auto w-full max-w-3xl text-left">
              <h3 className="text-lg font-bold text-red-600 mb-2">Berdiri Tahun 2025</h3>
              <p className="text-sm md:text-base text-gray-700">
                Meski masih baru, kami hadir dengan tekad besar untuk memberikan produk yang berkualitas dan mampu bersaing di pasar modern.
              </p>
            </div>

            {/* Poin 3 */}
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition mx-auto w-full max-w-3xl text-left">
              <h3 className="text-lg font-bold text-red-600 mb-2">Rasa Khas Indonesia</h3>
              <p className="text-sm md:text-base text-gray-700">
                Kami menghadirkan berbagai rasa otentik khas Nusantara, mulai dari pedas manis hingga gurih rempah, agar semua orang bisa mencicipi kekayaan rasa Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
