"use client"

import { Shield, Code, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming",
      skills: ["Python", "PowerShell", "SQL", "Java", "C", "C++"],
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      skills: ["Network Security", "Cryptography", "System Security", "Security Management", "Digital Forensics"],
      color: "text-accent",
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        "Wireshark",
        "Nmap",
        "Metasploit",
        "Nessus",
        "Kali Linux",
        "Snort",
        "Git",
        "VirtualBox",
        "VMware",
        "Active Directory",
        "Linux/Unix",
        "Windows Server",
      ],
      color: "text-chart-3",
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Skills & Expertise</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              A comprehensive toolkit for modern cybersecurity challenges
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${category.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm rounded-full bg-secondary text-foreground border border-border hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
