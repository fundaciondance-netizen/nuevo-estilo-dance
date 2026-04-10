"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const images = [
    "/hero_1.webp",
    "/hero_2.webp",
    "/hero_4.webp",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500); // tiempo entre slides

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Academia de danza urbana en Cali"
            fill
            priority={index === 0}
            className={`object-cover object-center transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-l from-black/85 via-black/65 to-black/40" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-end px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-right">
          <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
            Resistencia • Pasión • Movimiento
          </p>

          <h1 className="text-2xl font-bold leading-snug text-white sm:text-3xl lg:text-4xl">
            Academia de danza urbana en Cali que transforma mentes a través del movimiento
          </h1>

          <p className="mt-4 text-sm leading-6 text-white/80 sm:text-base">
            Resistencia, pasión y movimiento en un solo lugar. Vive una experiencia que va más allá del baile y conecta con una comunidad que impulsa tu crecimiento.
          </p>

          <div className="mt-6 flex flex-col items-end gap-3 sm:flex-row sm:justify-end">
            <Link
              href="https://wa.me/573186234832?text=Quiero%20saber%20mas%20sobre%20tu%20academia"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f97f09] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#d35121]"
            >
              <MessageCircleMore className="h-4 w-4" />
              ¡Únete!
            </Link>

            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10"
            >
              Ver Lineas de Acción
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 leading-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-30 align-bottom"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}