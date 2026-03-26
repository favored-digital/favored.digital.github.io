import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                Custom Web Development
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-balance">
                Digital experiences that{" "}
                <span className="text-primary">elevate</span> your brand
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I craft custom websites that drive results. With 7 years of experience 
              across e-commerce, non-profit, government, and wedding industries, 
              I bring your vision to life with precision and creativity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="#contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">View Services</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl bg-secondary/50 border border-border overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-8 border border-primary/20 rounded-xl" />
              <div className="absolute inset-16 border border-primary/10 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <p className="text-6xl font-serif text-primary/80">fd</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    favored.digital
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-primary/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
