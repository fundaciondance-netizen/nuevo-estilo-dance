"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 w-12 h-12 transition-transform duration-500 ease-out ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-full h-full bg-[#7FFFD4] text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Ir arriba"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  )
}