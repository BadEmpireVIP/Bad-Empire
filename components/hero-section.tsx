import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Crown, Coffee } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 px-4"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-neon-purple/10" />

      {/* Neon Grid Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(236,72,153,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(236,72,153,0.1)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-neon-pink/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-neon-cyan/20 rounded-full blur-[128px] animate-pulse delay-1000" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-neon-pink/10 border border-neon-pink/30 mb-4 md:mb-6">
              <Crown className="h-3 w-3 md:h-4 md:w-4 text-neon-gold" />
              <span className="text-xs md:text-sm text-neon-gold font-medium">
                NYC Flagship • Coffee • Lifestyle Club
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              <span className="text-foreground">Bad Empire</span>
              <br />
              <span className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan bg-clip-text text-transparent">
                Coffee Club
              </span>
            </h1>

            <p className="text-base md:text-xl text-foreground/70 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Neon streets, ancient legends, and midnight brews. Swear fealty to the brew and join the Empire.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 text-white font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-xl shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:shadow-[0_0_40px_rgba(236,72,153,0.7)] transition-all duration-300 hover:scale-105"
              >
                <Coffee className="mr-2 h-5 w-5" />
                Join the Club
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-xl transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Explore the Empire
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative w-full">
            <div className="relative w-full max-w-sm mx-auto">
              {/* Glow behind products */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/30 to-neon-cyan/30 rounded-full blur-[60px]" />

              <div className="relative flex items-center justify-center gap-[-20px] scale-75 sm:scale-100">
                <div className="relative z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                  <Image
                    src="/images/badempirelightroast-transparent.png"
                    alt="Sunblade of the East - Light Roast"
                    width={280}
                    height={400}
                    className="drop-shadow-[0_0_30px_rgba(236,72,153,0.4)] w-auto"
                  />
                </div>
                <div className="relative z-20 transform rotate-6 hover:rotate-0 transition-transform duration-500 -ml-4 sm:-ml-12">
                  <Image
                    src="/images/badempiredarkroast1-transparent.png"
                    alt="Nightfall of the Obsidian Crown - Dark Roast"
                    width={280}
                    height={400}
                    className="drop-shadow-[0_0_30px_rgba(34,211,238,0.4)] w-auto"
                  />
                </div>
              </div>
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
