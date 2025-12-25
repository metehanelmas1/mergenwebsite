import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Principles } from "@/components/principles"
import { Showcase } from "@/components/showcase"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Showcase />
        <Principles />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
