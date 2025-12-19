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
    image: "/images/coloredcoffeeclub.png",
    cta1: { text: "Join Club", action: () => console.log("Join club clicked") },
    cta2: { text: "Learn More", action: () => console.log("Learn more clicked") },
    background: "url(/images/badempirebg1.jpg)",
  },
  {
    id: 2,
    title: "Premium Dark Roast",
    subtitle: "Boldly Crafted",
    description: "Rich, full-bodied flavor with a smooth finish",
    image: "/images/badempiredarkroast1-transparent.png",
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
    image: "/images/chaintest.png",
    cta1: { text: "Explore", action: () => console.log("Explore chain") },
    cta2: { text: "Contact", action: () => console.log("Contact sales") },
    background: "url(/images/badempirebg3.jpg)",
  },
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef(null)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const titleSizeClass = "text-4xl sm:text-5xl md:text-5xl lg:text-8xl"
  const subtitleSizeClass = "text-lg sm:text-xl md:text-2xl lg:text-4xl"
  const descriptionSizeClass = "text-base sm:text-lg md:text-base lg:text-2xl"

  const slide = slides[currentSlide]

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 600)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setIsTransitioning(false)
      }, 600)
    }
  }

  const nextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, 600)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 600)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX
  }

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX
    handleSwipe()
  }

  const handleSwipe = () => {
    const swipeThreshold = 50
    const diff = touchStartX.current - touchEndX.current

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  return (
    <section
      className="relative w-full min-h-screen pt-16 md:pt-20 overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 ${
            index === currentSlide ? "z-10 opacity-100 animate-slide-in-bg" : "z-0 opacity-0"
          } ${isTransitioning && index === currentSlide ? "slide-transitioning" : ""}`}
          style={{
            backgroundImage: s.background,
            backgroundSize: "cover",
            backgroundPosition: index === 0 ? "right" : "center",
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
                    className={`${titleSizeClass} font-bradley text-white drop-shadow-2xl mb-2 sm:mb-3 md:mb-4 text-balance ${
                      index === currentSlide ? "animate-slide-in-title" : ""
                    }`}
                    style={{
                      textShadow: "3px 3px 0 rgba(0,0,0,0.7), 6px 6px 0 rgba(0,0,0,0.5)",
                    }}
                  >
                    {s.title}
                  </h1>
                  <h2
                    className={`${subtitleSizeClass} text-neon-cyan drop-shadow-lg mb-2 sm:mb-3 md:mb-4 text-balance ${
                      index === currentSlide ? "animate-slide-in-subtitle" : ""
                    }`}
                    style={{
                      textShadow: "2px 2px 0 rgba(0,0,0,0.7), 4px 4px 0 rgba(0,0,0,0.5)",
                    }}
                  >
                    {s.subtitle}
                  </h2>
                  <p
                    className={`${descriptionSizeClass} text-gray-200 drop-shadow-lg mb-4 sm:mb-6 md:mb-8 text-balance ${
                      index === currentSlide ? "animate-slide-in-description" : ""
                    }`}
                    style={{
                      textShadow: "1px 1px 0 rgba(0,0,0,0.7), 3px 3px 0 rgba(0,0,0,0.5)",
                    }}
                  >
                    {s.description}
                  </p>

                  {/* Buttons */}
                  <div
                    className={`flex flex-col sm:flex-row gap-3 sm:gap-3 lg:gap-4 w-full md:w-auto justify-center md:justify-start ${
                      index === currentSlide ? "animate-slide-in-buttons" : ""
                    }`}
                  >
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

                {/* Right Content - Images with Animations */}
                <div
                  className={`relative w-full flex items-center justify-center md:h-full md:col-span-1 mt-6 md:mt-0 ${
                    index === currentSlide ? "animate-scale-in-image" : ""
                  }`}
                >
                  <img
                    src={s.image || "/placeholder.svg"}
                    alt={s.title}
                    className={`drop-shadow-2xl ${
                      index === 0
                        ? "w-40 sm:w-56 md:w-48 lg:w-80 image-sway"
                        : index === 1 || index === 2
                          ? "w-40 sm:w-56 md:w-48 lg:w-72 image-float"
                          : "w-48 sm:w-64 md:w-56 lg:w-96 image-pulse"
                    }`}
                  />
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
