"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Coffee, Crown, ShoppingCart } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cartItems, setCartItems] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const slides = [
    {
      id: "coffee",
      title: "Empire Brews",
      subtitle: "Legendary Coffee for the Bold",
      content: "Discover our exclusive light and dark roasts crafted for the Bad Empire Coffee Club.",
      images: ["/images/badempirelightroast-transparent.png", "/images/badempiredarkroast1-transparent.png"],
      cta1: { text: "Shop Coffee", action: () => addToCart("Light Roast") },
      cta2: { text: "Join Club", action: () => handleCTA("Join club clicked") },
    },
    {
      id: "chains",
      title: "Chain Lifestyle",
      subtitle: "Bling and Brotherhood",
      content: "Premium gold, silver, and scrap metal jewelry for the empire. Chains that tell your story.",
      video: "/videos/chain1.mp4",
      cta1: { text: "Browse Chains", action: () => handleCTA("Browse chains clicked") },
      cta2: { text: "Custom Orders", action: () => handleCTA("Custom orders clicked") },
    },
    {
      id: "social",
      title: "Bad Empire Club",
      subtitle: "French Bulldog Community and Social",
      content: "Join our community of coffee lovers, frenchie enthusiasts, dart players, and friends in NY.",
      image: "/images/frenchbulldog1tp.png",
      cta1: { text: "Membership Plans", action: () => handleCTA("Membership clicked") },
      cta2: { text: "Learn More", action: () => handleCTA("Learn more clicked") },
    },
  ]

  const handleCTA = (action: string) => {
    console.log(`[v0] Button clicked: ${action}`)
  }

  const addToCart = (product: string) => {
    setCartItems((prev) => prev + 1)
    console.log(`[v0] Added ${product} to cart. Total items: ${cartItems + 1}`)
  }

  useEffect(() => {
    if (currentSlide === 1 && videoRef.current) {
      videoRef.current.play().catch((err) => console.log("[v0] Video play error:", err))
    }
  }, [currentSlide])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsTransitioning(false)
      }, 500)
    }, 10000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    console.log(`[v0] Navigating to slide ${index}`)
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsTransitioning(false)
    }, 500)
  }

  const nextSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsTransitioning(false)
    }, 500)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsTransitioning(false)
    }, 500)
  }

  const slide = slides[currentSlide]

  const backgroundMap: { [key: number]: string | null } = {
    0: "url('/images/badempirebg2.jpg')",
    1: "url('/images/badempirebg3.jpg')",
    2: "url('/images/badempirebg1.jpg')",
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
      style={{
        backgroundImage: backgroundMap[currentSlide],
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isTransitioning ? "opacity-100" : "opacity-0"} bg-black`}
      />
      <div className="absolute inset-0 bg-black/15" />

      {/* Neon Grid Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Carousel Container */}
      <div className="relative w-full h-full z-10 flex items-center justify-center">
        {/* Slides */}
        <div
          className={`w-full h-full flex items-center justify-center px-4 md:px-8 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
        >
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex flex-col justify-center max-w-md">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-pink/10 border border-neon-pink/30 mb-4 w-fit text-xs">
                  <Crown className="h-3 w-3 text-neon-gold" />
                  <span className="text-neon-gold font-medium">
                    Bad Empire {slide.id === "coffee" ? "Coffee" : slide.id === "chains" ? "Chains" : "Club"}
                  </span>
                </div>

                <h1
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-foreground leading-tight drop-shadow-lg"
                  style={{ fontFamily: "'Bradley Gratis', serif" }}
                >
                  {slide.title}
                </h1>

                <p
                  className="text-base md:text-lg text-neon-cyan mb-3 font-semibold drop-shadow-md"
                  style={{ fontFamily: "'Bradley Gratis', serif" }}
                >
                  {slide.subtitle}
                </p>

                <p className="text-sm md:text-base text-foreground/80 mb-6 leading-relaxed">{slide.content}</p>

                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <Button
                    onClick={slide.cta1.action}
                    className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 text-white font-bold px-6 py-2 text-sm rounded-lg hover:scale-105 transition-transform duration-200"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {slide.cta1.text}
                  </Button>
                  <Button
                    onClick={slide.cta2.action}
                    variant="outline"
                    className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-bold px-6 py-2 text-sm rounded-lg hover:scale-105 transition-transform duration-200 bg-transparent"
                  >
                    <Coffee className="mr-2 h-4 w-4" />
                    {slide.cta2.text}
                  </Button>
                </div>

                <div className="mt-4 text-xs text-neon-gold font-semibold">Cart Items: {cartItems}</div>
              </div>

              {/* Right Image/Video */}
              <div className="flex items-center justify-center lg:justify-end">
                {"images" in slide && slide.images && (
                  <div className="flex gap-3 items-center justify-center">
                    {slide.images.map((img, idx) => (
                      <div key={idx} className="relative w-32 h-80 md:w-40 md:h-96">
                        <Image
                          src={img || "/placeholder.svg"}
                          alt={`Coffee bag ${idx + 1}`}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                )}
                {"video" in slide && slide.video && (
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    className={`w-full max-w-xs h-auto rounded-xl border border-neon-cyan/30 transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                    onTimeUpdate={(e) => {
                      if (e.currentTarget.currentTime >= 15) {
                        e.currentTarget.currentTime = 0.5
                      }
                    }}
                  >
                    <source src={slide.video} type="video/mp4" />
                  </video>
                )}
                {"image" in slide && slide.image && (
                  <div className="relative w-56 h-80 md:w-64 md:h-96">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-neon-pink/20 hover:bg-neon-pink/40 border border-neon-pink/50 rounded-full p-3 transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-neon-pink" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-neon-cyan/20 hover:bg-neon-cyan/40 border border-neon-cyan/50 rounded-full p-3 transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-neon-cyan" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide ? "bg-neon-pink h-3 w-8" : "bg-neon-pink/30 hover:bg-neon-pink/50 h-3 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
