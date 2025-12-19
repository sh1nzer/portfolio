"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shhauryasiingh@gmail.com",
      href: "mailto:shhauryasiingh@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (201) 582 0024",
      href: "tel:+12015820024",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bridgeport, CT",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sh1nzer",
      href: "https://github.com/sh1nzer",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shhauryasiingh",
      href: "https://linkedin.com/in/shhauryasiingh",
    },
  ]

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Get In Touch</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Interested in collaborating or have a question? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                const content = (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a key={index} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}

              <div className="pt-4">
                <h4 className="text-lg font-bold mb-4">Connect With Me</h4>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">{social.label}</p>
                          <p className="font-medium">{social.value}</p>
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold mb-6">Send a Quick Message</h3>
              <div className="p-8 rounded-lg bg-card border border-border space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking to discuss cybersecurity projects, collaboration opportunities, or just want to
                  connect, I'm always open to interesting conversations.
                </p>
                <Button className="w-full gap-2" size="lg" asChild>
                  <a href="mailto:shhauryasiingh@gmail.com">
                    <Send className="w-4 h-4" />
                    Send Email
                  </a>
                </Button>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">Typically responds within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-12 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
              <p>© 2025 Shaurya Singh. All rights reserved.</p>
              <p className="font-mono">Built with Next.js & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
