"use client"

import { Button } from "@/components/ui/button"
import {
  Phone,
  MapPin,
  MessageCircle,
  Sparkles,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Music2,
} from "lucide-react"
import { sendGeneralWhatsAppMessage } from "@/utils/whatsapp"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand & Deskripsi */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <Sparkles className="text-white h-5 w-5" />
              </div>
              <h4 className="font-serif font-bold text-xl">Makaroni Sangar</h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4 font-medium">
              Makaroni renyah dengan bumbu khas nusantara. Dibuat dari bahan premium,
              halal, higienis, dan harga bersahabat. Pedasnya bikin gahar, bikin nagih!
            </p>
            <Button
              onClick={sendGeneralWhatsAppMessage}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat WhatsApp
            </Button>
          </div>

          {/* Kontak UMKM */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-orange-400">Kontak UMKM</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span className="font-medium">0877-2761-5500</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span className="font-medium">makaronisangar@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <a
                  href="https://maps.app.goo.gl/nFeTZXBSMnt8xv36A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-400 transition-colors"
                >
                  Karangampel Kidul, Indramayu
                </a>
              </div>

              {/* Sosial Media UMKM */}
              <div className="flex gap-4 mt-3">
                <a href="https://instagram.com/sanzsnack" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 hover:text-pink-500 transition-colors" />
                </a>
                <a href="https://facebook.com/sanzsnack" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5 hover:text-blue-500 transition-colors" />
                </a>
                <a href="https://tiktok.com/@sanzsnack" target="_blank" rel="noopener noreferrer">
                  <Music2 className="h-5 w-5 hover:text-gray-200 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Kontak KKM */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-orange-400">Kontak KKM</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span className="font-medium">kkmkarangampel@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span className="font-medium">0812-xxxx-xxxx</span>
              </div>

              {/* Sosial Media KKN */}
              <div className="flex gap-4 mt-3">
                <a href="https://instagram.com/kkmkarangampel" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5 hover:text-pink-500 transition-colors" />
                </a>
                <a href="https://facebook.com/kkmkarangampel" target="_blank" rel="noopener noreferrer">
                  <Music2 className="h-5 w-5 hover:text-blue-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Jam Operasional */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-orange-400">Jam Operasional</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4" />
                <div>
                  <p className="font-medium">Senin - Sabtu: 08:00 - 16:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 pb-6 text-center text-gray-400 mt-6">
          <p className="font-medium">&copy; 2025 Sanz Snack Indonesia. Semua hak cipta dilindungi.</p>
          <p className="text-sm mt-2">Dibuat oleh Kelompok KKM 37 Karangampel Kidul</p>
        </div>
      </div>
    </footer>
  )
}
