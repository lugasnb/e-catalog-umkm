"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles } from "lucide-react"
import { sendGeneralWhatsAppMessage } from "@/utils/whatsapp"

export default function Header() {
  return (
    <header className="backdrop-blur-md bg-white/80 border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="text-white h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl font-serif font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Makaroni Sangar
              </h1>
              <p className="text-gray-600 text-sm font-medium">Pedasnya Bikin Gahar</p>
            </div>
          </div>

          <Button
            onClick={sendGeneralWhatsAppMessage}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat WhatsApp
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, #f97316 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>
    </header>
  )
}
