"use client"

import { Button } from "@/components/ui/button"
import {
  Phone,
  MapPin,
  MessageCircle,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Music2,
  Youtube,
} from "lucide-react"
import { sendGeneralWhatsAppMessage } from "@/utils/whatsapp"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Grid Konten */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
            {/* Brand & Deskripsi di kanan */}
          <div className="text-left">
            <div className="flex items-center justify-end gap-3 mb-4">
              <img
                src="/sanz-logo.png"
                alt="Logo"
                className="w-12 h-12 object-contain"
              />
              <h4 className="font-serif font-bold text-xl">
                Sanz Snack Indonesia
              </h4>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 font-medium max-w-sm ml-auto">
              Gigit, Rasain, dan Nikmati Renyahnya Sanz Snack – Cemilan Klasik
              dengan Sensasi Unik
            </p>
            <Button
              onClick={sendGeneralWhatsAppMessage}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold shadow-md"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat WhatsApp
            </Button>
          </div>

            {/* Kontak UMKM */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-4 text-orange-400">
                Kontak UMKM
              </h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="p-2 rounded-full ring-1 ring-gray-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="font-medium">0877-2761-5500</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="p-2 rounded-full ring-1 ring-gray-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-medium">@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="p-2 rounded-full ring-1 ring-gray-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <a
                    href="https://maps.app.goo.gl/nFeTZXBSMnt8xv36A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition-colors font-medium"
                  >
                    Karangampel Kidul, Indramayu
                  </a>
                </div>
                {/* Sosial Media UMKM */}
                <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
                  <a
                    href="https://instagram.com/sanzsnack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full ring-1 ring-gray-600 hover:bg-pink-500/20 transition"
                  >
                    <Instagram className="h-5 w-5 hover:text-pink-500 transition-colors" />
                  </a>
                  <span className="font-medium">sanz_keripikbuah</span>
                </div>
              </div>
            </div>

            {/* Kontak KKM */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-4 text-orange-400">
                Kontak KKM
              </h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="p-2 rounded-full ring-1 ring-gray-600">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="font-medium">0877-9401-7463</span>
                </div>
                <div className="flex items-center gap-3 justify-center md:justify-start">
                  <div className="p-2 rounded-full ring-1 ring-gray-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-medium">
                    kkmkarangampelkidul@gmail.com
                  </span>
                </div>
                {/* Sosial Media KKN */}
                <div className="flex gap-4 mt-4 justify-center md:justify-start">
                  <a
                    href="https://instagram.com/kkm37.karangampelkidul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full ring-1 ring-gray-600 hover:bg-pink-500/20 transition"
                  >
                    <Instagram className="h-5 w-5 hover:text-pink-500 transition-colors" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@kkm.umc.karangamp?is_from_webapp=1&sender_device=pc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full ring-1 ring-gray-600 hover:bg-gray-200/20 transition"
                  >
                    <Music2 className="h-5 w-5 hover:text-gray-200 transition-colors" />
                  </a>
                  <a
                    href="https://www.youtube.com/@KKM37KarangampelKidul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full ring-1 ring-gray-600 hover:bg-red-500/20 transition"
                  >
                    <Youtube className="h-5 w-5 hover:text-red-500 transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Jam Operasional */}
            <div>
              <h4 className="font-serif font-bold text-lg mb-4 text-orange-400">
                Jam Operasional
              </h4>
              <div className="flex items-center gap-3 justify-center md:justify-start text-gray-300">
                <div className="p-2 rounded-full ring-1 ring-gray-600">
                  <Clock className="h-5 w-5" />
                </div>
                <p className="font-medium">Senin - Sabtu: 08:00 - 16:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 pb-6 text-center text-gray-400 mt-6">
          <p className="font-medium">
            &copy; 2025 Sanz Snack Indonesia. Semua hak cipta dilindungi.
          </p>
          <p className="text-sm mt-2">
            Dibuat oleh Kelompok KKM 37 Karangampel Kidul
          </p>
        </div>
      </div>
    </footer>
  )
}
