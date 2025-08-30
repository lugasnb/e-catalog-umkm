"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin, MessageCircle, Sparkles, Mail, Clock } from "lucide-react"
import { sendGeneralWhatsAppMessage } from "@/utils/whatsapp"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Sparkles className="text-white h-5 w-5" />
              </div>
              <h4 className="font-serif font-bold text-xl">Makaroni Sangar</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 font-medium">
              Kelezatan makaroni berpadu dengan rasa nusantara, hadir dari bahan premium dan racikan bumbu pilihan.
            </p>
            <Button
              onClick={sendGeneralWhatsAppMessage}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat WhatsApp
            </Button>
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-orange-400">Kontak</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">0877-2761-5500</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="font-medium">makaronisangar@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-8 h-8 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="font-small">
                  Karangampel Kidul, Kecamatan Karangampel, Kabupaten Indramayu, Jawa Barat 45283
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-orange-400">Jam Operasional</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-8 h-8 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-medium">Senin - Sabtu: 10:00 - 17:00</p>
                  <p className="text-orange-300 font-medium">Delivery tersedia setiap hari</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p className="font-medium">&copy; 2025 Makaroni Sangar. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  )
}
