"use client"

import { useEffect, useRef } from "react"
import { Play } from "lucide-react"

export function ProductVideo() {
  const videoRef = useRef<HTMLDivElement>(null)

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

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="product" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div ref={videoRef} className="max-w-6xl mx-auto opacity-0">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">See Mergen in Action</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch how Mergen transforms database management with its intuitive interface and powerful features.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />

            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-2xl">
              <video className="w-full h-full object-cover" controls>
                <source src="/mergenvideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm group-hover:opacity-0 transition-opacity pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold text-foreground mb-2">Fast Setup</h3>
              <p className="text-sm text-muted-foreground">
                Connect to your databases in seconds with zero configuration.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold text-foreground mb-2">Intuitive UI</h3>
              <p className="text-sm text-muted-foreground">Beautiful interface designed for developer productivity.</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold text-foreground mb-2">Native Speed</h3>
              <p className="text-sm text-muted-foreground">Built with Go and Wails for maximum performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
