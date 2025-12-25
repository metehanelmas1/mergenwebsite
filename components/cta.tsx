"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Monitor, Apple, Smartphone } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

interface Release {
  tag_name: string
  assets: Array<{
    name: string
    browser_download_url: string
  }>
}

export function CTA() {
  const [releases, setReleases] = useState<Release | null>(null)
  const [loading, setLoading] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    fetch('https://api.github.com/repos/parevo/mergen/releases/latest')
      .then(res => res.json())
      .then(data => {
        setReleases(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const getDownloadUrl = (platform: string) => {
    if (!releases) return '#'
    
    const asset = releases.assets.find(asset => {
      const name = asset.name.toLowerCase()
      switch (platform) {
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
    
    return asset?.browser_download_url || `https://github.com/parevo/mergen/releases/latest`
  }

  return (
    <section className="py-32 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter text-foreground uppercase mb-8">
            {t('ctaTitle')}
            <br />
            <span className="text-accent">{t('ctaTitleHighlight')}</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {t('ctaDescription')}
          </p>

          {loading ? (
            <div className="flex justify-center mb-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="space-y-6 mb-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <Button 
                  size="lg" 
                  className="w-full group hover:scale-105 transition-transform"
                  asChild
                >
                  <a href={getDownloadUrl('windows')} target="_blank" rel="noopener noreferrer">
                    <Monitor className="w-4 h-4 mr-2" />
                    Windows
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  className="w-full group hover:scale-105 transition-transform"
                  asChild
                >
                  <a href={getDownloadUrl('macos')} target="_blank" rel="noopener noreferrer">
                    <Apple className="w-4 h-4 mr-2" />
                    macOS
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                
                <Button 
                  size="lg" 
                  className="w-full group hover:scale-105 transition-transform"
                  asChild
                >
                  <a href={getDownloadUrl('linux')} target="_blank" rel="noopener noreferrer">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Linux
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" variant="outline" className="w-full sm:w-auto uppercase tracking-wider bg-transparent" asChild>
                  <a href="https://github.com/parevo/mergen" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    {t('viewSource')}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto uppercase tracking-wider bg-transparent" asChild>
                  <a href="https://github.com/parevo/mergen/releases" target="_blank" rel="noopener noreferrer">
                    {t('allReleases')}
                  </a>
                </Button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 border border-border max-w-3xl mx-auto">
            <div className="p-6 sm:border-r border-border">
              <div className="text-sm uppercase tracking-wider text-muted-foreground">{t('license')}</div>
              <div className="text-lg font-bold text-foreground mt-1">GPL v3.0</div>
            </div>
            <div className="p-6 sm:border-r border-border">
              <div className="text-sm uppercase tracking-wider text-muted-foreground">{t('price')}</div>
              <div className="text-lg font-bold text-foreground mt-1">$0</div>
            </div>
            <div className="p-6">
              <div className="text-sm uppercase tracking-wider text-muted-foreground">{t('support')}</div>
              <div className="text-lg font-bold text-foreground mt-1">{t('community')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
