import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Scissors, Users, Gamepad2 } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Coffee Bar & Lounge",
    description: "A physical hub for members in NYC—craft brews, late-night vibes, and medieval tavern atmosphere.",
  },
  {
    icon: Scissors,
    title: "Barber Parlor",
    description: "Connected grooming experience with cuts, shaves, and member-exclusive rituals.",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Dartboard championships, gaming nights, tastings, and VIP gatherings.",
  },
  {
    icon: Gamepad2,
    title: "Mario Kart Tournaments",
    description: "Regular gaming events with prizes, drinks, and legendary competition.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-pink/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-pink/10 border border-neon-pink/30 mb-6">
              <Coffee className="h-4 w-4 text-neon-pink" />
              <span className="text-sm text-neon-pink font-medium">About the Empire</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              More Than{" "}
              <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
                Just Coffee
              </span>
            </h2>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Bad Empire Coffee Club is a lifestyle destination rooted in New York City. We blend the neon energy of
              Miami Vice streets with the timeless mystique of medieval taverns—creating a space where coffee culture
              meets community, gaming, and grooming.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="bg-card/30 border border-neon-pink/10 hover:border-neon-pink/30 transition-colors"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-neon-pink/10">
                        <feature.icon className="h-5 w-5 text-neon-pink" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                        <p className="text-sm text-foreground/60">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Logo Display */}
          <div className="relative">
            <div className="relative flex items-center justify-center">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 via-neon-purple/20 to-neon-cyan/20 rounded-full blur-[100px]" />

              {/* Main Logo */}
              <div className="relative">
                <Image
                  src="/images/badempirelogotpneon.png"
                  alt="Bad Empire Logo"
                  width={400}
                  height={300}
                  className="drop-shadow-[0_0_50px_rgba(236,72,153,0.5)]"
                />
              </div>
            </div>

            {/* Coffee Club Wordmark */}
            <div className="mt-8 flex justify-center">
              <Image
                src="/images/badempirecoffeeclubjustwords.png"
                alt="Bad Empire Coffee Club"
                width={300}
                height={50}
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
