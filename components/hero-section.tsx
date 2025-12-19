"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Crown, Coffee, ShoppingCart, Star, Check } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [cartItems, setCartItems] = useState(0)

  const addToCart = (product: string) => {
    setCartItems((prev) => prev + 1)
    console.log(`[v0] Added ${product} to cart`)
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 px-4"
      style={{
        backgroundImage: "url('/images/badempirebg1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Neon Grid Effect - toned down */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-neon-pink/10 border border-neon-pink/30 mb-6 md:mb-8">
            <Crown className="h-4 w-4 md:h-5 md:w-5 text-neon-gold" />
            <span className="text-xs md:text-sm text-neon-gold font-medium">NY Coffee Club Lifestyle</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-foreground">Bad Empire</span>
            <br />
            <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Coffee Club
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-base md:text-xl text-foreground/70 mb-8 md:mb-12 max-w-2xl leading-relaxed">
            Neon streets, ancient legends, and midnight brews. Swear fealty to the brew and join the Empire.
          </p>

          {/* Product Cards - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full mb-8 md:mb-12">
            {/* Light Roast Card */}
            <div className="bg-card/40 backdrop-blur border border-neon-gold/30 rounded-2xl p-6 md:p-8 hover:border-neon-gold/60 transition-all duration-300 hover:bg-card/60 group">
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-40 md:h-48 w-32 md:w-40">
                  <Image
                    src="/images/badempirelightroast-transparent.png"
                    alt="Sunblade of the East"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-neon-gold mb-1">Sunblade of the East</h3>
                  <p className="text-sm text-foreground/60 mb-3">Light Roast</p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-neon-gold text-neon-gold" />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-neon-cyan mb-4">$14.99</p>
                  <Button
                    onClick={() => addToCart("Sunblade of the East")}
                    className="w-full bg-gradient-to-r from-neon-gold to-neon-purple hover:from-neon-gold/90 hover:to-neon-purple/90 text-background font-bold rounded-lg hover:scale-105 transition-transform"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Dark Roast Card */}
            <div className="bg-card/40 backdrop-blur border border-neon-cyan/30 rounded-2xl p-6 md:p-8 hover:border-neon-cyan/60 transition-all duration-300 hover:bg-card/60 group">
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-40 md:h-48 w-32 md:w-40">
                  <Image
                    src="/images/badempiredarkroast1-transparent.png"
                    alt="Nightfall of the Obsidian Crown"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-neon-cyan mb-1">Nightfall of the Obsidian Crown</h3>
                  <p className="text-sm text-foreground/60 mb-3">Dark Roast</p>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-neon-cyan text-neon-cyan" />
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-neon-pink mb-4">$14.99</p>
                  <Button
                    onClick={() => addToCart("Nightfall of the Obsidian Crown")}
                    className="w-full bg-gradient-to-r from-neon-cyan to-neon-pink hover:from-neon-cyan/90 hover:to-neon-pink/90 text-background font-bold rounded-lg hover:scale-105 transition-transform"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-neon-pink/20 to-neon-cyan/20 backdrop-blur border border-neon-pink/30 rounded-2xl p-6 md:p-8 w-full mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Check className="h-6 w-6 text-neon-gold" />
              <h3 className="text-xl md:text-2xl font-bold">Cart Items: {cartItems}</h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 text-white font-bold px-8 py-6 rounded-xl hover:scale-105 transition-all"
              >
                <Coffee className="mr-2 h-5 w-5" />
                Continue Shopping
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-cyan to-neon-gold hover:from-neon-cyan/90 hover:to-neon-gold/90 text-background font-bold px-8 py-6 rounded-xl hover:scale-105 transition-all"
              >
                Checkout Now
              </Button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-4 text-center text-sm md:text-base">
            <div className="text-foreground/70">
              <p className="font-bold text-neon-gold mb-1">100+</p>
              <p>Club Members</p>
            </div>
            <div className="text-foreground/70 border-l border-r border-neon-pink/30">
              <p className="font-bold text-neon-cyan mb-1">5.0</p>
              <p>Star Rated</p>
            </div>
            <div className="text-foreground/70">
              <p className="font-bold text-neon-purple mb-1">Fresh</p>
              <p>Daily Roasted</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-neon-pink/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-neon-pink rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
