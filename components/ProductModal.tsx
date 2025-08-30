"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, X, MessageCircle, Sparkles, Zap, Clock, Award } from "lucide-react"
import type { Product } from "@/types/product"
import { getSpiceLevelColor } from "@/utils/helpers"
import { sendWhatsAppMessage } from "@/utils/whatsapp"

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="relative">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-64 object-cover rounded-t-3xl"
          />
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-700 rounded-full w-10 h-10 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
          {product.isPopular && (
            <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 shadow-lg font-semibold">
              <Star className="mr-1 h-3 w-3 fill-current" />
              Populer
            </Badge>
          )}
          <Badge
            className={`absolute bottom-4 right-4 ${getSpiceLevelColor(product.spiceLevel)} border-0 shadow-md font-medium`}
            variant="secondary"
          >
            {product.spiceLevel}
          </Badge>
        </div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-serif font-bold text-gray-900">{product.name}</h2>
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-2 rounded-full">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-lg font-semibold text-yellow-700">{product.rating}</span>
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-6 font-medium">{product.description}</p>

          <div className="text-3xl font-serif font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-8">
            {product.price}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-orange-500" />
                Bahan-bahan
              </h3>
              <p className="text-gray-600 font-medium">{product.ingredients}</p>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-green-500" />
                Informasi Nutrisi
              </h3>
              <p className="text-gray-600 font-medium">{product.nutrition}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-serif font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  Waktu Masak
                </h3>
                <p className="text-gray-600 font-medium">{product.cookingTime}</p>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Award className="h-4 w-4 text-purple-500" />
                  Porsi
                </h3>
                <p className="text-gray-600 font-medium">{product.portion}</p>
              </div>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-red-500">⚠️</span>
                Alergen
              </h3>
              <p className="text-gray-600 font-medium">{product.allergens}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100">
            <Button
              onClick={() => {
                sendWhatsAppMessage(product.name, product.price)
                onClose()
              }}
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 py-3 font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Pesan Sekarang
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="px-8 border-2 border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full bg-transparent py-3 font-semibold"
            >
              Tutup
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
