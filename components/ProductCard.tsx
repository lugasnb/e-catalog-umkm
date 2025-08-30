"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, MessageCircle } from "lucide-react"
import type { Product } from "@/types/product"
import { getSpiceLevelColor } from "@/utils/helpers"
import { sendWhatsAppMessage } from "@/utils/whatsapp"

interface ProductCardProps {
  product: Product
  onDetailClick: (product: Product) => void
}

export default function ProductCard({ product, onDetailClick }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl w-full max-w-sm">
      <div className="relative overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {product.isPopular && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 shadow-lg font-semibold">
            <Star className="mr-1 h-3 w-3 fill-current" />
            Populer
          </Badge>
        )}
        <Badge
          className={`absolute top-4 right-4 ${getSpiceLevelColor(product.spiceLevel)} border-0 shadow-md font-medium`}
          variant="secondary"
        >
          {product.spiceLevel}
        </Badge>
        <Button
          size="sm"
          variant="ghost"
          className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-gray-700 rounded-full w-10 h-10 p-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-serif font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
            {product.name}
          </CardTitle>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold text-yellow-700">{product.rating}</span>
          </div>
        </div>
        <CardDescription className="text-gray-600 leading-relaxed font-medium">{product.description}</CardDescription>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="text-2xl font-serif font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
          {product.price}
        </div>
      </CardContent>

      <CardFooter className="flex gap-3 pt-0">
        <Button
          onClick={() => sendWhatsAppMessage(product.name, product.price)}
          className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Pesan
        </Button>
        <Button
          onClick={() => onDetailClick(product)}
          variant="outline"
          className="flex-1 border-2 border-orange-200 text-orange-600 hover:bg-orange-50 rounded-full bg-transparent font-semibold"
        >
          Detail
        </Button>
      </CardFooter>
    </Card>
  )
}
