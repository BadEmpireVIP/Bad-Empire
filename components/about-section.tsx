import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, Scissors, Users, Gamepad2 } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Coffee Bar & Lounge",
    description:
      "A physical hub for members in Upstate NY featuring craft brews, late night vibes, and medieval tavern atmosphere.",
  },
  {
    icon: Scissors,
    title: "Barber Parlor",
    description: "Connected grooming experience with cuts, shaves, and member exclusive rituals.",
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
          <div className="text-center mb-16 animate-slide-in-section">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-pink/10 border border-neon-pink/30 mb-6">
              <Coffee className="h-4 w-4 text-neon-pink" />
              <span className="text-sm text-neon-pink font-medium">About the Empire</span>
            </div>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-slide-in-title"
              style={{ opacity: 1, animation: "slideInTitle 0.8s ease-out 0.2s forwards" }}
            >
              More Than{" "}
              <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
                Just Coffee
              </span>
            </h2>

            <p
              className="text-lg text-foreground/70 mb-8 leading-relaxed animate-slide-in-description"
              style={{ opacity: 1, animation: "slideInTitle 0.8s ease-out 0.4s forwards" }}
            >
              Bad Empire Coffee Club is a lifestyle destination born in New York. We blend neon energy with the timeless
              mystique of medieval taverns, creating a space where coffee culture meets community, gaming, grooming,
              French Bulldog breeding, and custom jewelry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className={`bg-card/30 border border-neon-pink/10 hover:border-neon-pink/30 transition-colors animate-slide-in-section`}
                style={{
                  animation: `slideInFromBottom 0.8s ease-out ${0.4 + index * 0.1}s forwards`,
                  opacity: 0,
                }}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-neon-pink/10">
                      <feature.icon className="h-5 w-5 text-neon-pink" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-foreground/60">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Logo Display with French Bulldog */}
          <div
            className="relative animate-scale-in-image"
            style={{
              animation: "scaleInImage 0.8s ease-out 0.6s forwards",
              opacity: 0,
            }}
          >
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

              <div className="absolute -bottom-12 -right-8 w-40 h-40 md:w-52 md:h-52 opacity-90 hover:opacity-100 transition-opacity">
                <Image
                  src="/images/frenchbulldog1tp.png"
                  alt="Bad Empire French Bulldog"
                  fill
                  className="object-contain drop-shadow-[0_0_30px_rgba(236,72,153,0.4)]"
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
