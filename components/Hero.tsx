"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Eye, Edit3, Check, X } from "lucide-react"
import { sendGeneralWhatsAppMessage } from "@/utils/whatsapp"
import { useState } from "react"

export default function Hero() {
  const [isEditing, setIsEditing] = useState(false)
  const [blackText, setBlackText] = useState("Pedas Gurihnya Langsung Nendang di Lidah")
  const [orangeText, setOrangeText] = useState("")

  const handleSave = () => {
    setIsEditing(false)
  }

  const handleCancel = () => {
    setBlackText("Pedas Gurihnya Langsung Nendang di Lidah")
    setOrangeText("")
    setIsEditing(false)
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/5 to-yellow-500/10"></div>
      <div className="container mx-auto px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <h2 className="text-4xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teks Hitam:</label>
                    <input
                      type="text"
                      value={blackText}
                      onChange={(e) => setBlackText(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                      placeholder="Masukkan teks hitam..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teks Orange:</label>
                    <input
                      type="text"
                      value={orangeText}
                      onChange={(e) => setOrangeText(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                      placeholder="Masukkan teks orange (opsional)..."
                    />
                  </div>
                  <div className="flex gap-2 justify-center">
                    <Button onClick={handleSave} size="sm" className="bg-green-500 hover:bg-green-600">
                      <Check className="w-4 h-4 mr-1" />
                      Simpan
                    </Button>
                    <Button onClick={handleCancel} size="sm" variant="outline">
                      <X className="w-4 h-4 mr-1" />
                      Batal
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {blackText}
                  {orangeText && (
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block">
                      <br />
                      {orangeText}
                    </span>
                  )}
                </>
              )}
            </h2>

            {!isEditing && (
              <Button
                onClick={() => setIsEditing(true)}
                size="sm"
                variant="outline"
                className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white shadow-lg hover:shadow-xl"
              >
                <Edit3 className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Existing code */}
          <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Kelezatan makaroni berpadu dengan rasa nusantara, hadir dari bahan premium dan racikan bumbu pilihan.
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
              <Eye className="mr-2 h-5 w-5" />
              Lihat Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
