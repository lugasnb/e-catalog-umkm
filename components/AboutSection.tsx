import { Award, Zap, ShoppingCart } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-orange-50/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6">Tentang Kami</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-12 font-medium">
            Nikmati Sanz Snack, keripik renyah dengan rasa pedas, manis, dan gurih yang sempurna! Terbuat dari bahan berkualitas dan racikan bumbu istimewa. Cemilan favorit untuk teman santai, camilan harian, atau oleh-oleh yang bisa dibawa ke rumah. Sanz snack, temani harimu dengan penuh warna
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-serif font-bold text-gray-900 mb-2 text-lg">Kualitas Terjamin</h4>
              <p className="text-gray-600 font-medium">Bahan-bahan pilihan dan menghadirkan cita rasa yang selalu memuaskan</p>
            </div>
            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-serif font-bold text-gray-900 mb-2 text-lg">Pelayanan Cepat</h4>
              <p className="text-gray-600 font-medium">Pesanan siap dalam 15-20 menit</p>
            </div>
            <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h4 className="font-serif font-bold text-gray-900 mb-2 text-lg">Harga Terjangkau</h4>
              <p className="text-gray-600 font-medium">Kualitas premium dengan harga minimum</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
