"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Wi-Fi Deauthenticator",
      description:
        "Built a Python tool using aircrack-ng to scan and test Wi-Fi security. Achieved 99% success in client deauthentication testing.",
      tech: ["Python", "aircrack-ng", "Network Security"],
      github: "https://github.com/sh1nzer",
      metrics: "99% Success Rate",
    },
    {
      title: "Keylogger",
      description:
        "Python-based keylogger with encrypted logs and 90% accuracy. Designed for ethical security auditing and analysis.",
      tech: ["Python", "Cryptography", "Security Auditing"],
      github: "https://github.com/sh1nzer",
      metrics: "90% Accuracy",
    },
    {
      title: "Network Scanner",
      description:
        "Python CLI tool performing ICMP, TCP, and ARP scans. Real-time results and configurable performance settings.",
      tech: ["Python", "Networking", "CLI"],
      github: "https://github.com/sh1nzer",
      metrics: "Real-time Scanning",
    },
    {
      title: "Brute Force Login Bypass",
      description:
        "Flask web app demonstrating brute-force vulnerabilities. Used Burp Suite to identify admin credentials from response codes.",
      tech: ["Flask", "Python", "Burp Suite", "Web Security"],
      github: "https://github.com/sh1nzer",
      metrics: "Vulnerability Demo",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Featured Projects</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              Security tools and penetration testing projects demonstrating practical cybersecurity skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                        {project.metrics}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-xs rounded bg-secondary text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" className="gap-2" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Details
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
