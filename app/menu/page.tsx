"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Filter } from "lucide-react"
import type { Product } from "@/types/product"
import { makaroniProducts } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import ProductModal from "@/components/ProductModal"
import { Button } from "@/components/ui/button"

const categories = ["Semua", "Tradisional", "Western", "Asian Fusion", "Seafood", "Vegetarian", "Premium"]

export default function MenuPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedCategory, setSelectedCategory] = useState("Semua")

  const filteredProducts =
    selectedCategory === "Semua"
      ? makaroniProducts
      : makaroniProducts.filter((product) => product.category === selectedCategory)

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-gray-900 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Kembali ke Beranda</span>
            </Link>
            <h1 className="text-2xl font-serif font-bold text-gray-900">Menu Lengkap</h1>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-900">Filter Kategori:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-orange-600 hover:bg-orange-700 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">
              {selectedCategory === "Semua" ? "Semua Menu" : `Menu ${selectedCategory}`}
            </h2>
            <p className="text-gray-600">
              Menampilkan {filteredProducts.length} dari {makaroniProducts.length} produk
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onDetailClick={openProductDetail} />
            ))}
          </div>
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  )
}
