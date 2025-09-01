"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Eye } from "lucide-react"
import { sendGeneralWhatsAppMessage } from "@/utils/whatsapp"

export default function Hero() {
  const blackText = "Sanz Snack, Cemilan Ringan yang Membawa Sensasi Nikmat di Setiap Gigitan"

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-yellow-500/10"></div>
      <div className="container mx-auto px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              {blackText}
            </h2>
          </div>

          {/* Existing code */}
          <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Kelezatan cemilan berpadu dengan bumbu tertentu, dibuat dari bahan premium untuk menemani keseharianmu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={sendGeneralWhatsAppMessage}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Pesan via WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full bg-transparent font-semibold"
            >
              <a href="menu">
                <Eye className="inline-block mr-2 h-5 w-5" />
                Lihat Menu
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
