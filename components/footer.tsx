"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Quiénes Somos" },
  { href: "#lineas", label: "Líneas de Acción" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#servicios", label: "Servicios" },
]

const services = [
  "Clases Grupales",
  "Clases Particulares",
  "Programa Intensivo",
  "Coreografías",
  "Talleres",
  "Eventos",
]

const socialLinks = [
  { icon: faInstagram, href: "https://instagram.com/nuevoestilodance", label: "Instagram" },
  { icon: faTiktok, href: "https://tiktok.com/@nuevoestilodance2026", label: "Tiktok" },
  { icon: faYoutube, href: "https://youtube.com/nuevoestilodance", label: "YouTube" },
]

export function Footer() {
  return (
    <footer
      id="contacto"
      className="pt-16 pb-8"
      style={{ backgroundColor: "#000000", color: "#ffffff" }}
    >
      <div className="container mx-auto px-4">

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* BRAND */}
          <div>
            <Link href="#inicio" className="flex items-center gap-2 mb-6">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#d35121" }}
              >
                <span className="font-bold text-lg">NE</span>
              </div>
              <span className="font-bold text-xl">
                <span style={{ color: "#f97f09" }}>Nuevo</span> Estilo Dance
              </span>
            </Link>

            <p className="text-sm mb-6 opacity-70">
              Fundación dedicada a transformar vidas a través de la danza urbana.
              Formación, comunidad y oportunidades para jóvenes apasionados.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="w-5 h-5"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-70 hover:opacity-100 transition-all"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICIOS */}
          <div>
            <h3 className="font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm opacity-70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" style={{ color: "#7FFFD4" }} />
                <span className="text-sm opacity-70">
                  Calle 12 oeste # 52 c 15<br />Cali, Colombia
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" style={{ color: "#7FFFD4" }} />
                <Link href="https://wa.me/573186234832?text=Quiero%20saber%20mas%20sobre%20tu%20academia" className="text-sm opacity-70 hover:opacity-100">
                  +57 318 6234832
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" style={{ color: "#7FFFD4" }} />
                <Link href="mailto:nuevoestilodance@gmail.com" className="text-sm opacity-70 hover:opacity-100">
                  nuevoestilodance@gmail.com
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1" style={{ color: "#7FFFD4" }} />
                <span className="text-sm opacity-70">
                  Lun - Vie: 3PM - 6PM<br />Atención mensajes: 8AM - 12PM | 2PM - 6PM
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* MAP */}
        <div className="rounded-2xl overflow-hidden mb-12 border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.232265611901!2d-76.5635767!3d3.4183814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a41b9d334885%3A0x72e020a89c86bdc4!2sFundaci%C3%B3n%20Nuevo%20Estilo%20Dance!5e0!3m2!1ses!2sco!4v1701826500000!5m2!1ses!2sco"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} Nuevo Estilo Dance
          </p>

          <div className="flex gap-6 text-sm">
            <Link href="#" className="opacity-50 hover:opacity-100">
              Privacidad
            </Link>
            <Link href="#" className="opacity-50 hover:opacity-100">
              Términos
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}