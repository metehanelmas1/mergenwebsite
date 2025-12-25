"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Database, Zap, Shield, Monitor, Apple, Smartphone } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

interface Release {
  tag_name: string
  assets: Array<{
    name: string
    browser_download_url: string
  }>
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [releases, setReleases] = useState<Release | null>(null)
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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    // Fetch latest release
    fetch('https://api.github.com/repos/parevo/mergen/releases/latest')
      .then(res => res.json())
      .then(data => setReleases(data))
      .catch(() => {})

    return () => observer.disconnect()
  }, [])

  const detectPlatform = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.includes('mac')) return 'macos'
    if (userAgent.includes('win')) return 'windows'
    return 'linux'
  }

  const getDownloadUrl = (platform?: string) => {
    if (!releases) return 'https://github.com/parevo/mergen/releases/latest'
    
    const targetPlatform = platform || detectPlatform()
    const asset = releases.assets.find(asset => {
      const name = asset.name.toLowerCase()
      switch (targetPlatform) {
        case 'windows':
          return name.includes('windows') || name.includes('win') || name.endsWith('.exe')
        case 'macos':
          return name.includes('darwin') || name.includes('macos') || name.includes('mac')
        case 'linux':
          return name.includes('linux') && !name.includes('windows') && !name.includes('darwin')
        default:
          return false
      }
    })
    
    return asset?.browser_download_url || 'https://github.com/parevo/mergen/releases/latest'
  }

  const getPlatformIcon = () => {
    const platform = detectPlatform()
    switch (platform) {
      case 'macos': return <Apple className="w-4 h-4 mr-2" />
      case 'windows': return <Monitor className="w-4 h-4 mr-2" />
      default: return <Smartphone className="w-4 h-4 mr-2" />
    }
  }

  const getPlatformName = () => {
    const platform = detectPlatform()
    switch (platform) {
      case 'macos': return 'macOS'
      case 'windows': return 'Windows'
      default: return 'Linux'
    }
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-pulse-slow" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12 animate-on-scroll opacity-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-foreground mb-4 lg:mb-6">
              {t('heroTitle')}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{t('heroTitleHighlight')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              {t('heroDescription')}
            </p>
          </div>

          {/* Video Section */}
          <div className="mb-8 lg:mb-12 animate-on-scroll opacity-0 [animation-delay:200ms]">
            <div className="relative group max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              
              <div className="relative aspect-video rounded-xl lg:rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
                <video className="w-full h-full object-cover" controls>
                  <source src="/mergenvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm group-hover:opacity-0 transition-opacity pointer-events-none">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 lg:w-10 lg:h-10 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features & Download */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
            <div className="animate-on-scroll opacity-0 [animation-delay:400ms] order-2 lg:order-1">
              <div className="flex flex-wrap gap-4 mb-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>{t('nativePerformance')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>{t('securityFirst')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Database className="w-4 h-4 text-primary" />
                  <span>{t('multiDatabase')}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 animate-on-scroll opacity-0 [animation-delay:600ms] order-1 lg:order-2">
              <Button size="lg" className="w-full sm:w-auto group hover:scale-105 transition-transform" asChild>
                <a href={getDownloadUrl()} target="_blank" rel="noopener noreferrer">
                  {getPlatformIcon()}
                  {t('downloadFor')} {getPlatformName()}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto hover:bg-muted transition-colors bg-transparent"
                asChild
              >
                <a href="https://github.com/parevo/mergen" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  {t('viewOnGithub')}
                </a>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-on-scroll opacity-0 [animation-delay:800ms]">
            <div className="p-6 lg:p-8 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{"<"}0.5s</div>
              <div className="text-sm text-muted-foreground">{t('startupTime')}</div>
            </div>
            <div className="p-6 lg:p-8 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">{t('localFirst')}</div>
            </div>
            <div className="p-6 lg:p-8 border border-border rounded-lg bg-card hover:border-primary/50 transition-colors text-center">
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">{t('openSource')}</div>
              <div className="text-sm text-muted-foreground">Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
