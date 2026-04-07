"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/573186234832?text=Hola%2C%20quiero%20más%20información"
      target="_blank"
      className="fixed bottom-20 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp"
    >
      <FontAwesomeIcon
        icon={faWhatsapp}
        style={{ fontSize: "2rem" }} // 🔥 Esto aumenta el icono de verdad
      />
    </Link>
  )
}