"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, ShoppingCart, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Bad Empire Coffee Club",
    subtitle: "Join Our Exclusive Community",
    description: "Experience the finest specialty coffee with our membership",
    image: "/images/socialsharing.png",
    cta1: { text: "Join Club", action: () => console.log("Join club clicked") },
    cta2: { text: "Learn More", action: () => console.log("Learn more clicked") },
    background: "url(/images/badempirebg1.jpg)",
  },
  {
    id: 2,
    title: "Premium Dark Roast",
    subtitle: "Boldly Crafted",
    description: "Rich, full-bodied flavor with a smooth finish",
    image: "/images/badempiредarkroast1-transparent.png",
    cta1: { text: "Add to Cart", action: () => console.log("Dark roast added") },
    cta2: { text: "Details", action: () => console.log("Dark roast details") },
    background: "url(/images/badempirebg2.jpg)",
  },
  {
    id: 3,
    title: "Light Roast Blend",
    subtitle: "Smooth & Bright",
    description: "Delicate notes of citrus and floral undertones",
    image: "/images/badempirelightroast-transparent.png",
    cta1: { text: "Add to Cart", action: () => console.log("Light roast added") },
    cta2: { text: "Details", action: () => console.log("Light roast details") },
    background: "url(/images/badempirebg2.jpg)",
  },
  {
    id: 4,
    title: "Chain Supply",
    subtitle: "Exceptional Quality",
    description: "Curated selection from the finest suppliers",
    video: "/videos/chain1.mp4",
    cta1: { text: "Explore", action: () => console.log("Explore chain") },
    cta2: { text: "Contact", action: () => console.log("Contact sales") },
    background: "url(/images/badempirebg3.jpg)",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const videoRef = useRef(null)

  const titleSizeClass = "text-4xl sm:text-5xl md:text-7xl lg:text-8xl"
  const subtitleSizeClass = "text-lg sm:text-xl md:text-3xl lg:text-4xl"
  const descriptionSizeClass = "text-base sm:text-lg md:text-xl lg:text-2xl"

  const slide = slides[currentSlide]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (videoRef.current && currentSlide === 3) {
      videoRef.current.play().catch(() => {
        console.log("Video autoplay failed")
      })
    }
  }, [currentSlide])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: s.background,
            backgroundSize: "cover",
            backgroundPosition: index === 1 ? "right" : index === currentSlide ? "right" : "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="w-full px-4 sm:px-8 lg:px-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-center max-w-6xl mx-auto">
                {/* Left Content */}
                <div className="text-center md:text-left flex flex-col justify-center">
                  <h1
                    className={`${titleSizeClass} font-bradley text-white drop-shadow-2xl mb-2 sm:mb-3 md:mb-4 text-balance`}
                    style={{
                      textShadow: "3px 3px 0 rgba(0,0,0,0.7), 6px 6px 0 rgba(0,0,0,0.5)",
                    }}
                  >
                    {s.title}
                  </h1>
                  <h2
                    className={`${subtitleSizeClass} text-neon-cyan drop-shadow-lg mb-2 sm:mb-3 md:mb-4 text-balance`}
                    style={{
                      textShadow: "2px 2px 0 rgba(0,0,0,0.7), 4px 4px 0 rgba(0,0,0,0.5)",
                    }}
                  >
                    {s.subtitle}
                  </h2>
                  <p
                    className={`${descriptionSizeClass} text-gray-200 drop-shadow-lg mb-4 sm:mb-6 md:mb-8 text-balance`}
                    style={{
                      textShadow: "1px 1px 0 rgba(0,0,0,0.7), 3px 3px 0 rgba(0,0,0,0.5)",
                    }}
                  >
                    {s.description}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 lg:gap-4 w-full md:w-auto justify-center md:justify-start">
                    <Button
                      onClick={s.cta1.action}
                      className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 text-white font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-lg hover:scale-105 transition-transform duration-200 whitespace-nowrap"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {s.cta1.text}
                    </Button>
                    <Button
                      onClick={s.cta2.action}
                      variant="outline"
                      className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg rounded-lg hover:scale-105 transition-transform duration-200 bg-transparent whitespace-nowrap"
                    >
                      <Coffee className="mr-2 h-4 w-4" />
                      {s.cta2.text}
                    </Button>
                  </div>
                </div>

                {/* Right Content - Images/Video */}
                <div className="relative h-full hidden md:flex items-center justify-center">
                  {s.video ? (
                    <video
                      ref={videoRef}
                      src={s.video}
                      className="w-96 h-auto drop-shadow-2xl"
                      autoPlay
                      muted
                      playsInline
                      loop
                    />
                  ) : (
                    <img
                      src={s.image || "/placeholder.svg"}
                      alt={s.title}
                      className="max-w-md lg:max-w-lg drop-shadow-2xl"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hidden md:block absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden md:block absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-neon-cyan w-8" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
