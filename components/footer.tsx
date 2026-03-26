import Link from "next/link"
import { Linkedin, Globe } from "lucide-react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <Link href="/" className="text-xl font-semibold tracking-tight">
              <span className="text-primary">favored</span>
              <span className="text-foreground">.digital</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              Custom web development for ambitious brands
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-6 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4 md:justify-end">
            <Link
              href="https://www.tianahorn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Portfolio"
            >
              <Globe className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tiana-horn/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} favored.digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
