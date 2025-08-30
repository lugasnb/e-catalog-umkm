"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Product } from "@/types/product"
import { featuredProducts } from "@/data/products"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProductCard from "@/components/ProductCard"
import ProductModal from "@/components/ProductModal"
import AboutSection from "@/components/AboutSection"
import TestimonialSection from "@/components/TestimonialSection"
import GallerySection from "@/components/GallerySection"
import FAQSection from "@/components/FAQSection"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <Header />
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-4">Menu Pilihan Terpopuler</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
              Setiap varian makaroni dibuat dengan resep rahasia dan bumbu pilihan untuk pengalaman kuliner terbaik.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center mb-12">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onDetailClick={openProductDetail} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/menu">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold"
                >
                  Lihat Menu Lengkap (45 Varian)
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={closeModal} />

      <GallerySection />
      <AboutSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </div>
  )
}
