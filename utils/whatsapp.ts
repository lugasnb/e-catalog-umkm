export const sendWhatsAppMessage = (productName: string, price: string) => {
  const phoneNumber = "6287727615500" // Format: country code + phone number without +
  const message = `Halo! Saya tertarik untuk memesan *${productName}* dengan harga ${price}. Bisa tolong berikan informasi lebih lanjut?`
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}

export const sendGeneralWhatsAppMessage = () => {
  const phoneNumber = "6287727615500"
  const message = "Halo! Saya ingin mengetahui lebih lanjut tentang menu makaroni yang tersedia. Terima kasih!"
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
}
