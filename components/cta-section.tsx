"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        background: "linear-gradient(135deg, #f97f09 0%, #d35121 50%, #7FFFD4 100%)",
        transition: "all 0.5s ease-in-out",
      }}
    >

      {/* Glow / Notion suave */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: "#7FFFD4" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 " style={{ backgroundColor: "#7FFFD4" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#7FFFD4" }} />
            <span className="text-white text-sm font-medium">Inscripciones Abiertas</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tu transformación comienza con un solo paso
          </h2>

          <p className="text-lg md:text-xl text-white opacity-80 mb-10 max-w-2xl mx-auto">
            Únete a nuestra comunidad de bailarines apasionados. Contáctanos hoy y descubre cómo la danza puede cambiar tu vida.
          </p>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

            {/* WhatsApp */}
            <Link
              href="https://wa.me/573186234832?text=Quiero%20saber%20mas%20sobre%20tu%20academia"
              target="_blank"
              className="group flex items-center justify-center gap-2 text-black font-semibold text-lg px-8 py-4 rounded-full shadow-lg w-full sm:w-auto transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              style={{ backgroundColor: "#ffffff" }}
            >
              <FontAwesomeIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" icon={faWhatsapp} />
              <span className="transition-all duration-300 group-hover:tracking-wide">Escríbenos por WhatsApp</span>
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com/nuevoestilodance"
              target="_blank"
              className="group flex items-center justify-center gap-2 border-2 text-white font-semibold text-lg px-8 py-4 rounded-full w-full sm:w-auto transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              style={{ borderColor: "#ffffff" }}
            >
              <FontAwesomeIcon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" icon={faInstagram} />
              <span className="transition-all duration-300 group-hover:tracking-wide">Síguenos en Instagram</span>
            </Link>

          </div>

        </div>
      </div>

      {/* WAVE NEGRO RESPONSIVE */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,120 C360,200 720,40 1080,120 L1440,160 L1440,200 L0,200 Z"
            fill="#000000"
          />
        </svg>
      </div>

    </section>
  )
}