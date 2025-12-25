"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download, Sun, Moon, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: t('product'), href: "#product" },
    { label: t('features'), href: "#features" },
    { label: t('principles'), href: "#principles" },
    { label: t('documentation'), href: "#docs" },
  ]

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en')
  }

  if (!mounted) {
    return null
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 overflow-hidden rounded-xl">
              <Image
                src="/images/whatsapp-20image-202025-12-25-20at-2003.jpeg"
                alt="Mergen Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Mergen
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-8 h-8 sm:w-9 sm:h-9 p-0"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="w-8 h-8 sm:w-9 sm:h-9 p-0 relative"
            >
              <Languages className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute -bottom-1 -right-1 text-xs font-bold text-primary">
                {language.toUpperCase()}
              </span>
            </Button>

            {/* Download Button - Hidden on mobile */}
            <div className="hidden md:block">
              <Button variant="ghost" className="text-sm" asChild>
                <a href="https://github.com/parevo/mergen/releases" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  {t('download')}
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-foreground p-1" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 sm:py-6 border-t border-border">
            <nav className="flex flex-col gap-4 sm:gap-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="default" className="w-full uppercase tracking-wider mt-2" asChild>
                <a href="https://github.com/parevo/mergen/releases" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  {t('download')}
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
