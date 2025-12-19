"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Mail, Send, Instagram, Facebook } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-neon-cyan/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 mb-6">
            <Mail className="h-4 w-4 text-neon-cyan" />
            <span className="text-sm text-neon-cyan font-medium">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Contact the{" "}
            <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">Empire</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Questions, feedback, or want to visit? We are here for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/50 border border-neon-pink/20">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-foreground/20 focus:border-neon-pink text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-foreground/20 focus:border-neon-pink text-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us what's on your mind..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-foreground/20 focus:border-neon-pink text-foreground resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-pink/90 hover:to-neon-purple/90 text-white font-bold py-6 rounded-xl shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:shadow-[0_0_40px_rgba(236,72,153,0.7)] transition-all duration-300"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/50 border border-neon-cyan/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neon-cyan/10">
                    <MapPin className="h-6 w-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Capital Region Location</h4>
                    <p className="text-foreground/60">
                      Bad Empire Coffee Club
                      <br />
                      Albany / Troy / Watervliet, NY
                      <br />
                      <span className="text-sm italic">Serving the Capital Region</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border border-neon-cyan/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-neon-cyan/10">
                    <Clock className="h-6 w-6 text-neon-cyan" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Hours of Operation</h4>
                    <p className="text-foreground/60">
                      Monday through Friday: 7am to 10pm
                      <br />
                      Saturday and Sunday: 8am to 12am
                      <br />
                      <span className="text-neon-gold text-sm">Member hours may vary</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border border-neon-pink/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-4">Follow the Empire</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 rounded-lg bg-neon-pink/10 hover:bg-neon-pink/20 transition-colors group"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="h-6 w-6 text-neon-pink group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-lg bg-neon-cyan/10 hover:bg-neon-cyan/20 transition-colors group"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="h-6 w-6 text-neon-cyan group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
