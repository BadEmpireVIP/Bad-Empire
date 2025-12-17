import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoffeeClubSection } from "@/components/coffee-club-section"
import { ProductsSection } from "@/components/products-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CoffeeClubSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
