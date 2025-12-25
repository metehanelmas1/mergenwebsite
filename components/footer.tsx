"use client"

import { Github, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  
  const footerLinks = {
    [t('footerProduct')]: [t('footerFeatures'), t('footerDownload'), t('footerDocumentation'), t('footerRoadmap')],
    [t('footerResources')]: [t('footerGithub'), t('footerCommunity'), t('footerSupport'), t('footerChangelog')],
    [t('footerCompany')]: [t('footerAbout'), t('footerTeam'), t('footerBlog'), t('footerContact')],
  }

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold tracking-tight text-foreground uppercase mb-4">Mergen</div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{t('footerCopyright')}</p>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">{t('footerMade')}</p>
        </div>
      </div>
    </footer>
  )
}
