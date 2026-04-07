"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function CTAButton({ href, label, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-[#f97f09] text-white hover:bg-[#d35121] hover:scale-105"
      : "border border-[#f97f09] text-white hover:bg-[#f97f09] hover:text-white hover:scale-105";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {label}
    </Link>
  );
}

export function DanceNavbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  const links = [
    ["Inicio", "#inicio"],
    ["Quienes somos", "#nosotros"],
    ["Lineas de accion", "#lineas"],
    ["Testimonios", "#testimonios"],
  ];

  // Scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 px-4 md:px-8 ${
        scrolled || open
          ? "h-16 bg-black/95 backdrop-blur-md shadow-lg"
          : "h-20 bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between">

        {/* LOGO */}
        <Link href="#inicio" className="flex items-center h-full">
          <div
            className={`flex items-center transition-all duration-300 ${
              scrolled ? "mt-0" : "mt-12 lg:mt-27"
            }`}
          >
            <img
              src="/logo.png"
              alt="Free Style Dance"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled
                  ? "h-10 sm:h-12 md:h-14 lg:h-16"
                  : "h-34 sm:h-36 md:h-40 lg:h-52"
              }`}
            />
          </div>
        </Link>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          <nav className="flex items-center gap-8">
            {links.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="relative group text-sm font-semibold text-white/90 hover:text-white"
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#ec3236] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <CTAButton href="#clases" label="Ver clases" variant="secondary" />
            <CTAButton href="#contacto" label="Inscribirme" variant="primary" />
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white z-50"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        ref={menuRef}
        className={`absolute left-0 top-full w-full transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md px-6 py-6 flex flex-col gap-6 border-t border-white/10">

          {/* Links */}
          <nav className="flex flex-col gap-5">
            {links.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-white text-lg font-semibold hover:text-[#f97f09] transition"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* BOTONES */}
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <CTAButton href="#clases" label="Ver clases" variant="secondary" />
            <CTAButton href="#contacto" label="Inscribirme" variant="primary" />
          </div>

        </div>
      </div>
    </header>
  );
}