"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Coffee, Crown, ShoppingCart } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cartItems, setCartItems] = useState(0)

  const slides = [
    {
      id: "coffee",
      title: "Empire Brews",
      subtitle: "Legendary Coffee for the Bold",
      content: "Discover our exclusive light and dark roasts crafted for the Bad Empire Coffee Club.",
      image: "/images/manholdingcoffeeanddog.jpg",
      cta1: { text: "Shop Coffee", action: () => addToCart("Light Roast") },
      cta2: { text: "Join Club", action: () => console.log("[v0] Join club clicked") },
    },
    {
      id: "chains",
      title: "Chain Lifestyle",
      subtitle: "Bling & Brotherhood",
      content: "Premium gold, silver, and scrap metal jewelry for the empire. Chains that tell your story.",
      video: "/videos/chain1.mp4",
      cta1: { text: "Browse Chains", action: () => console.log("[v0] Browse chains clicked") },
      cta2: { text: "Custom Orders", action: () => console.log("[v0] Custom orders clicked") },
    },
    {
      id: "social",
      title: "Bad Empire Club",
      subtitle: "French Bulldog Community & Social",
      content: "Join our community of coffee lovers, frenchie enthusiasts, dart players, and friends in NY.",
      image: "/images/frenchbulldog1tp.jpg",
      cta1: { text: "Membership Plans", action: () => console.log("[v0] Membership clicked") },
      cta2: { text: "Learn More", action: () => console.log("[v0] Learn more clicked") },
    },
  ]

  const addToCart = (product: string) => {
    setCartItems((prev) => prev + 1)
    console.log(`[v0] Added ${product} to cart`)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slide = slides[currentSlide]

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
      style={{
        backgroundImage: "url('/images/badempirebg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Neon Grid Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Carousel Container */}
      <div className="relative w-full h-full z-10 flex items-center justify-center">
        {/* Slides */}
        <div className="w-full h-full flex items-center justify-center px-4 md:px-8">
          <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-pink/10 border border-neon-pink/30 mb-6">
                <Crown className="h-4 w-4 text-neon-gold" />
                <span className="text-sm text-neon-gold font-medium">
                  Bad Empire {slide.id === "coffee" ? "Coffee" : slide.id === "chains" ? "Chains" : "Club"}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-foreground">{slide.title}</h1>

              <p className="text-lg md:text-xl text-neon-cyan mb-3 font-semibold">{slide.subtitle}</p>

              <p className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl">{slide.content}</p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={slide.cta1.action}
                  className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 text-white font-bold px-8 py-6 text-base rounded-lg hover:scale-105 transition-transform"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {slide.cta1.text}
                </Button>
                <Button
                  onClick={slide.cta2.action}
                  variant="outline"
                  className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-bold px-8 py-6 text-base rounded-lg hover:scale-105 transition-transform bg-transparent"
                >
                  <Coffee className="mr-2 h-5 w-5" />
                  {slide.cta2.text}
                </Button>
              </div>

              {/* Cart Counter */}
              <div className="mt-8 text-sm text-neon-gold font-semibold">Cart Items: {cartItems}</div>
            </div>

            {/* Right Image/Video */}
            <div className="flex-1 flex items-center justify-center">
              {slide.image && (
                <div className="relative w-full h-96 md:h-full max-h-96">
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}
              {slide.video && (
                <video
                  key={slide.id}
                  autoPlay
                  loop
                  muted
                  className="w-full max-w-md h-auto rounded-xl border border-neon-cyan/30"
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              )}
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
