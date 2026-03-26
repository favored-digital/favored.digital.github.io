import Link from "next/link"
import { ExternalLink, Linkedin, Globe } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Section Header */}
          <div className="lg:sticky lg:top-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                About
              </p>
            </div>
       
            <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-balance mb-6">
              Meet the developer behind your next digital success
            </h2>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <Link
                href="https://www.tianahorn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Globe className="h-4 w-4" />
                <span>Portfolio</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/tiana-horn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
            
            {/* Profile Picture */}
              <div className="relative mb-8">
              <div className="aspect-[4/5] w-full max-w-sm rounded-2xl bg-card border border-border overflow-hidden">
                <img
                  src="https://favored-digital.github.io/favored.digital.github.io/headshot.jpg"
                  alt="Tiana Horn - Lead Developer at favored.digital"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-serif font-medium text-primary mb-2">
                Tiana Horn
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Lead Developer & Founder
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 7 years of experience in custom web development, I specialize 
                in creating digital experiences that not only look exceptional but also 
                drive real business results. My approach combines technical excellence 
                with a deep understanding of each industry I serve.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I&apos;ve had the privilege of working for diverse companies and clients — from e-commerce 
              brands looking to scale their online presence, to non-profit organizations 
              seeking to amplify their impact, government agencies requiring compliance-focused 
              solutions, and couples wanting to create memorable wedding experiences online.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Every project I take on receives my full attention and dedication. I believe 
              in building lasting partnerships with my clients, understanding their unique 
              challenges, and delivering solutions that exceed expectations.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-2xl font-serif font-medium text-primary mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="p-4 rounded-lg bg-card border border-border">
                <p className="text-2xl font-serif font-medium text-primary mb-1">24/7</p>
                <p className="text-sm text-muted-foreground">Support Commitment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
