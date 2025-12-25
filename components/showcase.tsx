"use client"

import { useEffect, useRef } from "react"
import { Check, Database } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Showcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const databases = [
    { name: "PostgreSQL", support: "Full" },
    { name: "MySQL", support: "Full" },
    { name: "MongoDB", support: "Full" },
    { name: "SQLite", support: "Full" },
    { name: "Redis", support: "Full" },
    { name: "MariaDB", support: "Full" },
  ]

  const platforms = ["macOS", "Windows", "Linux"]

  return (
    <section ref={sectionRef} id="product" className="py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="animate-on-scroll opacity-0">
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                {t('showcaseTitle')}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {t('showcaseTitleHighlight')}
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('showcaseDescription')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {databases.map((db, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors"
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{db.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-square rounded-lg border border-border bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center animate-on-scroll opacity-0 [animation-delay:200ms] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-center relative z-10">
                <Database className="w-24 h-24 text-primary/20 mx-auto mb-4 animate-float" />
                <p className="text-sm text-muted-foreground">{t('productPreview')}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-20 animate-on-scroll opacity-0 [animation-delay:400ms]">
            <h3 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground mb-12">
              {t('availableEverywhere')}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="p-12 text-center border border-border rounded-lg bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-foreground mb-2">{platform}</div>
                  <div className="text-sm text-muted-foreground">{t('nativeBuild')}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
