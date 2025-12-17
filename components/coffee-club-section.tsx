import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Crown, Shield, Sword, Coffee, Scissors, Gift, Calendar, Percent, Star } from "lucide-react"

const membershipTiers = [
  {
    name: "Empire Entry",
    price: "$20",
    period: "/mo",
    tagline: "Your first oath to the Empire.",
    icon: Shield,
    features: [
      { icon: Coffee, text: "1 bag of premium coffee each month (Light or Dark)" },
      { icon: Gift, text: "Monthly sticker or mystery item (pins, patches)" },
      { icon: Crown, text: "Access to physical Coffee Club bar & lounge in NYC" },
      { icon: Percent, text: "Member pricing on coffee drinks at the bar" },
      { icon: Scissors, text: "5-10% off at Bad Empire Barber Parlor" },
      { icon: Star, text: "5% discount on merch & online shop" },
      { icon: Calendar, text: "Early access to select events and drops" },
    ],
    buttonText: "Pledge to Empire Entry",
    featured: false,
  },
  {
    name: "Empire Elite",
    price: "$35",
    period: "/mo",
    tagline: "High council of the night watch.",
    icon: Crown,
    features: [
      { icon: Coffee, text: "2 bags of premium coffee each month (mix & match)" },
      { icon: Gift, text: "Monthly apparel item (t-shirt, hat, or similar)" },
      { icon: Crown, text: "Priority seating & exclusive hours at the lounge" },
      { icon: Scissors, text: "Deep barber discounts & priority booking" },
      { icon: Percent, text: "15% discount on all products" },
      { icon: Star, text: "First access to limited drops & collabs" },
      { icon: Calendar, text: "VIP invites to closed-door events" },
    ],
    buttonText: "Ascend to Empire Elite",
    featured: true,
  },
]

const steps = [
  { step: "01", title: "Choose Your Tier", description: "Select Empire Entry or Empire Elite membership" },
  { step: "02", title: "Pick Your Roast", description: "Light, Dark, or mix both for Elite members" },
  { step: "03", title: "Receive & Enjoy", description: "Bags ship monthly; perks unlock at the club" },
]

export function CoffeeClubSection() {
  return (
    <section id="coffee-club" className="relative py-24 overflow-hidden">
      {/* Medieval texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-purple/5 to-background" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-gold/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-gold/10 border border-neon-gold/30 mb-6">
            <Sword className="h-4 w-4 text-neon-gold" />
            <span className="text-sm text-neon-gold font-medium">Membership Tiers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Bad Empire</span>{" "}
            <span className="bg-gradient-to-r from-neon-gold to-amber-400 bg-clip-text text-transparent">
              Coffee Club
            </span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Swear fealty to the brew. Two houses, endless nights.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {membershipTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                tier.featured
                  ? "bg-gradient-to-b from-neon-gold/10 to-background border-2 border-neon-gold/50 shadow-[0_0_40px_rgba(212,175,55,0.2)]"
                  : "bg-card/50 border border-neon-pink/20 hover:border-neon-pink/40"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-neon-gold text-background text-xs font-bold rounded-full">
                  MOST POPULAR
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <div
                  className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    tier.featured
                      ? "bg-neon-gold/20 border-2 border-neon-gold"
                      : "bg-neon-pink/20 border-2 border-neon-pink/50"
                  }`}
                >
                  <tier.icon className={`h-8 w-8 ${tier.featured ? "text-neon-gold" : "text-neon-pink"}`} />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{tier.name}</CardTitle>
                <CardDescription className="text-foreground/60 italic">"{tier.tagline}"</CardDescription>
                <div className="mt-4">
                  <span className={`text-5xl font-bold ${tier.featured ? "text-neon-gold" : "text-neon-pink"}`}>
                    {tier.price}
                  </span>
                  <span className="text-foreground/60">{tier.period}</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <feature.icon
                        className={`h-5 w-5 mt-0.5 flex-shrink-0 ${tier.featured ? "text-neon-gold" : "text-neon-cyan"}`}
                      />
                      <span className="text-foreground/80 text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-bold py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 ${
                    tier.featured
                      ? "bg-gradient-to-r from-neon-gold to-amber-500 hover:from-neon-gold/90 hover:to-amber-500/90 text-background shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                      : "bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 text-white shadow-[0_0_30px_rgba(236,72,153,0.5)]"
                  }`}
                >
                  {tier.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10 text-foreground">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-neon-pink/10 border-2 border-neon-pink/30 mb-4 group-hover:border-neon-pink transition-colors">
                  <span className="text-2xl font-bold text-neon-pink">{step.step}</span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-foreground/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
