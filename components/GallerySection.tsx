"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"

const galleryImages = [
  {
    id: 1,
    src: "/macaroni-cooking.png",
    alt: "Proses memasak makaroni",
    title: "Proses Memasak",
  },
  {
    id: 2,
    src: "/fresh-ingredients-spices.png",
    alt: "Bahan-bahan segar",
    title: "Bahan Berkualitas",
  },
  {
    id: 3,
    src: "/macaroni-packaging-delivery.png",
    alt: "Proses packaging",
    title: "Packaging Higienis",
  },
  {
    id: 4,
    src: "/placeholder-mk7xr.png",
    alt: "Pelanggan puas",
    title: "Pelanggan Puas",
  },
  {
    id: 5,
    src: "/colorful-macaroni.png",
    alt: "Variasi makaroni",
    title: "Beragam Varian",
  },
  {
    id: 6,
    src: "/clean-kitchen-food-prep.png",
    alt: "Dapur bersih",
    title: "Dapur Bersih",
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openModal = (id: number) => {
    setSelectedImage(id)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % galleryImages.length
      setSelectedImage(galleryImages[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage)
      const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
      setSelectedImage(galleryImages[prevIndex].id)
    }
  }

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">Galeri Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lihat proses pembuatan dan kualitas produk kami melalui galeri foto berikut.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="overflow-hidden cursor-pointer group border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(image.id)}
            >
              <div className="relative">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <img
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white text-xl font-semibold bg-black/50 rounded-lg px-4 py-2 inline-block">
                  {selectedImageData.title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
