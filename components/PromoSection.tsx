"use client"

import { Gift, Clock, Percent } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { sendWhatsAppMessage } from "@/utils/whatsapp"

const promos = [
  {
    id: 1,
    title: "Paket Hemat Keluarga",
    description: "Beli 3 makaroni berbeda, hemat 20%",
    discount: "20%",
    originalPrice: "75.000",
    promoPrice: "60.000",
    icon: Gift,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 2,
    title: "Flash Sale Weekend",
    description: "Setiap Sabtu-Minggu diskon spesial",
    discount: "15%",
    originalPrice: "25.000",
    promoPrice: "21.250",
    icon: Clock,
    color: "from-red-500 to-pink-600",
  },
  {
    id: 3,
    title: "Member Setia",
    description: "Pembelian ke-10 gratis 1 makaroni",
    discount: "FREE",
    originalPrice: "25.000",
    promoPrice: "0",
    icon: Percent,
    color: "from-purple-500 to-indigo-600",
  },
]

export default function PromoSection() {
  const handlePromoOrder = (promo: (typeof promos)[0]) => {
    const message = `Halo! Saya tertarik dengan promo "${promo.title}". Bisa info lebih lanjut?`
    sendWhatsAppMessage(message)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-white mb-4">Promo Spesial</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Jangan lewatkan penawaran menarik dari kami. Hemat lebih banyak dengan promo eksklusif!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {promos.map((promo) => {
            const IconComponent = promo.icon
            return (
              <Card
                key={promo.id}
                className="relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${promo.color}`}></div>

                <div className="p-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${promo.color} mb-4`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{promo.title}</h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        Rp {promo.promoPrice === "0" ? "GRATIS" : Number(promo.promoPrice).toLocaleString()}
                      </span>
                      {promo.promoPrice !== "0" && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          Rp {Number(promo.originalPrice).toLocaleString()}
                        </span>
                      )}
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${promo.color} text-white text-sm font-bold`}
                    >
                      {promo.discount} OFF
                    </div>
                  </div>

                  <Button
                    onClick={() => handlePromoOrder(promo)}
                    className={`w-full bg-gradient-to-r ${promo.color} hover:opacity-90 text-white font-semibold py-3 rounded-lg transition-all duration-300`}
                  >
                    Ambil Promo
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
