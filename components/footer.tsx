"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Send } from "lucide-react"

const footerLinks = {
  navigation: [
    { name: "Home", href: "#home" },
    { name: "Coffee Club", href: "#coffee-club" },
    { name: "Products", href: "#products" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Membership Terms", href: "#" },
    { name: "Shipping & Returns", href: "#" },
  ],
}

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <footer className="relative bg-background border-t border-neon-pink/20">
      {/* Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/badempirelogotpneon.png"
              alt="Bad Empire Logo"
              width={150}
              height={100}
              className="mb-4 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]"
            />
            <p className="text-foreground/60 text-sm leading-relaxed">
              NYC lifestyle club blending neon energy with medieval mystique. Coffee, community, and culture.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/60 hover:text-neon-pink transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-foreground/60 hover:text-neon-cyan transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Join the Newsletter</h4>
            <p className="text-foreground/60 text-sm mb-4">
              Get updates on drops, events, and exclusive member content.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50 border-foreground/20 focus:border-neon-pink text-foreground"
              />
              <Button type="submit" size="icon" className="bg-neon-pink hover:bg-neon-pink/80 text-white">
                <Send className="h-4 w-4" />
              </Button>
            </form>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 rounded-lg bg-neon-pink/10 hover:bg-neon-pink/20 transition-colors">
                <Instagram className="h-5 w-5 text-neon-pink" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-neon-cyan/10 hover:bg-neon-cyan/20 transition-colors">
                <Facebook className="h-5 w-5 text-neon-cyan" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 text-sm">
            © {new Date().getFullYear()} Bad Empire Coffee Club. All rights reserved.
          </p>
          <p className="text-foreground/40 text-sm">Made with ☕ in NYC</p>
        </div>
      </div>
    </footer>
  )
}
