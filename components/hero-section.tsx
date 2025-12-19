"use client"
import { Button } from "@/components/ui/button"
import { Coffee, ShoppingCart } from "lucide-react"

export function HeroSection({ slide }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 lg:gap-4 w-full md:w-auto justify-center md:justify-start">
      <Button
        onClick={slide.cta1.action}
        className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 text-white font-bold px-6 sm:px-8 py-3 sm:py-3 text-sm sm:text-base rounded-lg hover:scale-105 transition-transform duration-200 whitespace-nowrap"
      >
        <ShoppingCart className="mr-2 h-4 w-4" />
        {slide.cta1.text}
      </Button>
      <Button
        onClick={slide.cta2.action}
        variant="outline"
        className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-bold px-6 sm:px-8 py-3 sm:py-3 text-sm sm:text-base rounded-lg hover:scale-105 transition-transform duration-200 bg-transparent whitespace-nowrap"
      >
        <Coffee className="mr-2 h-4 w-4" />
        {slide.cta2.text}
      </Button>
    </div>
  )
}
