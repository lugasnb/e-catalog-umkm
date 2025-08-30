"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    id: 1,
    question: "Bagaimana cara memesan makaroni?",
    answer:
      "Anda bisa memesan melalui WhatsApp dengan klik tombol 'Pesan Sekarang' pada produk yang diinginkan. Tim kami akan membantu proses pemesanan Anda.",
  },
  {
    id: 2,
    question: "Berapa lama waktu pengiriman?",
    answer:
      "Untuk area Jakarta dan sekitarnya, pengiriman memakan waktu 1-2 hari kerja. Untuk luar kota, estimasi 2-4 hari kerja tergantung lokasi.",
  },
  {
    id: 3,
    question: "Apakah ada minimum order?",
    answer:
      "Tidak ada minimum order. Anda bisa memesan mulai dari 1 porsi makaroni. Namun untuk pemesanan dalam jumlah besar, kami memberikan diskon khusus.",
  },
  {
    id: 4,
    question: "Bagaimana cara penyimpanan makaroni?",
    answer:
      "Makaroni kami dikemas dalam kemasan kedap udara. Setelah dibuka, sebaiknya disimpan di kulkas dan dikonsumsi dalam 2-3 hari.",
  },
  {
    id: 5,
    question: "Apakah tersedia opsi pedas dan tidak pedas?",
    answer:
      "Ya, kami menyediakan level kepedasan dari 1-5. Anda bisa request level kepedasan sesuai selera saat memesan.",
  },
  {
    id: 6,
    question: "Apakah bisa custom rasa?",
    answer:
      "Untuk pemesanan dalam jumlah besar (minimal 50 porsi), kami bisa diskusikan custom rasa sesuai permintaan Anda.",
  },
]

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-gray-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan umum seputar produk dan layanan kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="overflow-hidden border-0 shadow-lg">
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openFAQ === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                )}
              </button>

              {openFAQ === faq.id && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
