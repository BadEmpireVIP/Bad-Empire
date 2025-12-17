"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Plus, Minus, Sun, Moon } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Sunblade of the East",
    roast: "Light Roast",
    description:
      "Roasted for the early watch on the city walls. Bright, citrusy, and smooth—perfect for the dawn patrol.",
    flavorNotes: ["Citrus", "Honey", "Floral"],
    price: 18.99,
    image: "/images/badempirelightroast1.png",
    icon: Sun,
    accentColor: "neon-gold",
  },
  {
    id: 2,
    name: "Nightfall of the Obsidian Crown",
    roast: "Dark Roast",
    description:
      "Brewed for council meetings held after midnight. Bold, chocolatey, and smoky—fuel for the night watch.",
    flavorNotes: ["Dark Chocolate", "Smoky", "Caramel"],
    price: 19.99,
    image: "/images/badempiredarkroast1.png",
    icon: Moon,
    accentColor: "neon-purple",
  },
]

export function ProductsSection() {
  const [quantities, setQuantities] = useState<Record<number, number>>({ 1: 1, 2: 1 })

  const updateQuantity = (id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }))
  }

  return (
    <section id="products" className="relative py-16 md:py-24 overflow-hidden px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-cyan/5 to-background" />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 mb-4 md:mb-6">
            <ShoppingBag className="h-3 w-3 md:h-4 md:w-4 text-neon-cyan" />
            <span className="text-xs md:text-sm text-neon-cyan font-medium">Coffee Lineup</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-foreground">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
              Allegiance
            </span>
          </h2>
          <p className="text-base md:text-xl text-foreground/70 max-w-2xl mx-auto px-2">
            Two legendary roasts, each crafted for different moments of your empire.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden bg-card/50 border border-foreground/10 hover:border-neon-pink/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]"
            >
              <CardContent className="p-0">
                <div className="relative h-48 md:h-80 bg-gradient-to-b from-foreground/5 to-transparent overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      product.accentColor === "neon-gold"
                        ? "from-neon-gold/10 to-transparent"
                        : "from-neon-purple/10 to-transparent"
                    } opacity-50`}
                  />
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <product.icon
                      className={`h-4 w-4 md:h-5 md:w-5 ${
                        product.accentColor === "neon-gold" ? "text-neon-gold" : "text-neon-purple"
                      }`}
                    />
                    <Badge
                      variant="secondary"
                      className={`text-xs md:text-sm ${
                        product.accentColor === "neon-gold"
                          ? "bg-neon-gold/20 text-neon-gold border-neon-gold/30"
                          : "bg-neon-purple/20 text-neon-purple border-neon-purple/30"
                      }`}
                    >
                      {product.roast}
                    </Badge>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2">{product.name}</h3>
                  <p className="text-foreground/60 text-xs md:text-sm mb-4 italic">{product.description}</p>

                  {/* Flavor Notes */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                    {product.flavorNotes.map((note) => (
                      <span
                        key={note}
                        className="px-2.5 py-1 text-xs rounded-full bg-foreground/5 text-foreground/70 border border-foreground/10"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  {/* Price & Actions */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-2xl md:text-3xl font-bold text-foreground">${product.price.toFixed(2)}</span>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-1.5 bg-foreground/5 rounded-lg p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-foreground/70 hover:text-foreground"
                          onClick={() => updateQuantity(product.id, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium text-foreground text-sm">
                          {quantities[product.id] || 1}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-foreground/70 hover:text-foreground"
                          onClick={() => updateQuantity(product.id, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Add to Cart */}
                      <Button className="flex-1 sm:flex-none bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 text-white font-bold rounded-lg shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.6)] transition-all duration-300">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        <span className="hidden sm:inline">Add</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
