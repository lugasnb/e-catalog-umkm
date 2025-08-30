"use client"

import { Star, Quote } from "lucide-react"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Sarah Wijaya",
    location: "Jakarta",
    rating: 5,
    comment: "Makaroni Balado-nya enak banget! Pedasnya pas dan rasanya autentik. Sudah langganan 6 bulan!",
    avatar: "/diverse-woman-smiling.png",
  },
  {
    id: 2,
    name: "Budi Santoso",
    location: "Bandung",
    rating: 5,
    comment: "Packaging rapi, rasa konsisten, dan pelayanan ramah. Makaroni Rendang favorit keluarga!",
    avatar: "/smiling-man.png",
  },
  {
    id: 3,
    name: "Rina Melati",
    location: "Surabaya",
    rating: 5,
    comment: "Varian rasanya banyak dan semuanya enak. Makaroni Sambal Matah jadi andalan buat acara keluarga.",
    avatar: "/happy-woman.png",
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">Apa Kata Pelanggan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Simak testimoni dari pelanggan setia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-orange-500 mb-2" />
              </div>

              <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.comment}"</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
