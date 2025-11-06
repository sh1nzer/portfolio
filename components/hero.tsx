"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile Image */}
          <div className="flex justify-center md:justify-end order-1 md:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl blur-xl opacity-50 animate-pulse" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/50 bg-secondary">
                <Image
                  src="/professional-cybersecurity-engineer-portrait.jpg"
                  alt="Shaurya Singh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - Information */}
          <div className="flex flex-col space-y-6 order-2 md:order-2 text-center md:text-left items-center md:items-start">
            {/* Terminal-style greeting */}
            <div className="font-mono text-sm text-accent">{"> shaurya@cybersec:~$ whoami"}</div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">Shaurya Singh</h1>

            {/* Subtitle with gradient */}
            <p className="text-lg md:text-xl text-muted-foreground text-balance">
              <span className="text-primary font-semibold">Cybersecurity Engineer</span> |{" "}
              <span className="text-accent font-semibold">Developer</span>
            </p>

            {/* Tagline */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl text-pretty leading-relaxed">
              Building secure systems, one packet at a time. Specializing in network security, digital forensics, and
              cryptography.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="gap-2 group" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://github.com/sh1nzer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/shhauryasiingh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:shhauryasiingh@gmail.com"
                className="p-3 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
