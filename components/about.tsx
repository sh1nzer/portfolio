export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">About Me</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p className="text-pretty">
              I'm a passionate cybersecurity professional currently pursuing my Master's in Cybersecurity at Sacred
              Heart University. With a strong foundation in computer science and hands-on experience in network
              security, digital forensics, and cryptography, I'm dedicated to building secure and resilient systems.
            </p>
            <p className="text-pretty">
              My journey in cybersecurity has led me to develop various security tools and conduct penetration testing
              projects. I believe in ethical hacking and responsible disclosure, using my skills to identify
              vulnerabilities and strengthen defenses.
            </p>
            <p className="text-pretty">
              When I'm not analyzing network packets or writing security scripts, you'll find me exploring the latest
              cybersecurity trends, contributing to open-source projects, and continuously expanding my knowledge in
              this ever-evolving field.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <div className="text-3xl font-bold text-primary">3.67</div>
              <div className="text-sm text-muted-foreground mt-2">GPA</div>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground mt-2">Tools</div>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground mt-2">Projects</div>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border text-center">
              <div className="text-3xl font-bold text-primary">7+</div>
              <div className="text-sm text-muted-foreground mt-2">Languages</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
