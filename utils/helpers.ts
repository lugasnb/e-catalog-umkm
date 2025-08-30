export const getSpiceLevelColor = (level: string) => {
  switch (level) {
    case "Pedas":
      return "bg-red-100 text-red-800"
    case "Sedang":
      return "bg-yellow-100 text-yellow-800"
    case "Tidak Pedas":
      return "bg-green-100 text-green-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}
