"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María García",
    role: "Estudiante avanzada",
    image: "/images/testimonial-1.jpg",
    quote: "Felicitaciones es una fundación que genera un impacto en la comunidad de la comuna 20 siloe arte danza y prevención de spa y prevención de embarazo adolescente .",
    rating: 5
  },
  {
    name: "Carlos Rodríguez",
    role: "Bailarín profesional",
    image: "/images/testimonial-2.jpg",
    quote: "Gracias a la formación que recibí aquí, ahora trabajo profesionalmente como bailarín. Los instructores son excepcionales y el ambiente es único.",
    rating: 5
  },
  {
    name: "Ana Martínez",
    role: "Madre de estudiante",
    image: "/images/testimonial-3.jpg",
    quote: "Mi hija ha desarrollado una confianza increíble desde que empezó. El enfoque en valores y comunidad hace que este lugar sea especial.",
    rating: 5
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-16 bg-white relative overflow-hidden">

      {/* Detalles suaves */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-[#7FFFD4]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -left-40 w-80 h-80 bg-[#7FFFD4]/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-[#f97f09] font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonios
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Historias que
            <span className="text-[#f97f09]"> inspiran</span>
          </h2>

          <p className="text-lg text-black/70">
            Descubre cómo la danza ha transformado la vida de cientos de personas en nuestra comunidad.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="group p-6 lg:p-8 rounded-3xl bg-white border border-black/10 hover:border-[#7FFFD4]/40 transition-all duration-300 hover:shadow-xl relative"
            >
              
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#7FFFD4]/10 flex items-center justify-center">
                <Quote className="w-5 h-5 text-[#7FFFD4]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#f97f09] fill-[#f97f09]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-black mb-6 leading-relaxed">
                “{testimonial.quote}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#7FFFD4]/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-sm text-black/60">{testimonial.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}