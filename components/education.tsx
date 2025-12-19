"use client"

import { GraduationCap, MapPin } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Master of Cybersecurity",
      school: "Sacred Heart University",
      location: "Fairfield, CT",
      period: "Expected Mar 2026",
      gpa: "3.67",
      courses: ["Network Security", "Digital Forensics", "Cryptography"],
      current: true,
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Wollongong in Dubai",
      location: "Dubai, UAE",
      period: "Jan 2022 – Jun 2024",
      courses: [],
      current: false,
    },
  ]

  return (
    <section id="education" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Education</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[7px] hidden md:block" />

                  <div className="md:ml-20 p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-primary" />
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          {edu.current && (
                            <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-foreground">{edu.school}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                      <div className="text-left md:text-right space-y-2">
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                        {edu.gpa && (
                          <p className="text-sm">
                            <span className="text-muted-foreground">GPA: </span>
                            <span className="font-bold text-primary">{edu.gpa}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {edu.courses.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-muted-foreground">Key Courses:</p>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="px-3 py-1 text-sm rounded-full bg-secondary text-foreground"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
