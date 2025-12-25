"use client"

import { useEffect, useRef } from "react"
import { Target, Code, Lock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Principles() {
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

  const principles = [
    {
      icon: Target,
      title: t('principle1Title'),
      description: t('principle1Description'),
    },
    {
      icon: Code,
      title: t('principle2Title'),
      description: t('principle2Description'),
    },
    {
      icon: Lock,
      title: t('principle3Title'),
      description: t('principle3Description'),
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="principles"
      className="py-32 border-t border-border bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-20 animate-on-scroll opacity-0">
            {t('principlesTitle')}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon
              return (
                <div
                  key={index}
                  className="p-8 border border-border rounded-lg bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-on-scroll opacity-0"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
