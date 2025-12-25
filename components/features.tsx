"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Features() {
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

  const features = [
    {
      number: "01",
      title: t('feature1Title'),
      description: t('feature1Description'),
    },
    {
      number: "02",
      title: t('feature2Title'),
      description: t('feature2Description'),
    },
    {
      number: "03",
      title: t('feature3Title'),
      description: t('feature3Description'),
    },
    {
      number: "04",
      title: t('feature4Title'),
      description: t('feature4Description'),
    },
    {
      number: "05",
      title: t('feature5Title'),
      description: t('feature5Description'),
    },
    {
      number: "06",
      title: t('feature6Title'),
      description: t('feature6Description'),
    },
    {
      number: "07",
      title: t('feature7Title'),
      description: t('feature7Description'),
    },
    {
      number: "08",
      title: t('feature8Title'),
      description: t('feature8Description'),
    },
  ]

  return (
    <section ref={sectionRef} id="features" className="py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 animate-on-scroll opacity-0">
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">{t('featuresTitle')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('featuresDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 lg:p-10 border border-border rounded-lg bg-card hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-sm font-medium text-primary mb-4">{feature.number}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
