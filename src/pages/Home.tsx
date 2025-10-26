import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
import PropertyCard from '@/components/PropertyCard'
import { ShieldCheck, Building2, Handshake, Globe2 } from 'lucide-react'

export default function Home() {
  const features = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: 'Tax‑Free Income Guidance', desc: "Clear, compliant strategies to benefit from UAE real estate income." },
    { icon: <Building2 className="w-6 h-6" />, title: 'Property Selection', desc: 'Hand‑picked projects across Dubai & Abu Dhabi matched to your goals.' },
    { icon: <Handshake className="w-6 h-6" />, title: 'End‑to‑End Management', desc: 'From reservation to handover, leasing and renewals — one contact.' },
    { icon: <Globe2 className="w-6 h-6" />, title: 'Remote Investor Friendly', desc: 'Digital signatures, video tours, and transparent reporting while abroad.' },
  ]

  const sample = [
    { title: 'Marina Waterfront 1BR', location: 'Dubai Marina', img: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop', price: 'AED 1.65M' },
    { title: 'Saadiyat Beach Villa', location: 'Abu Dhabi — Saadiyat', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop', price: 'AED 9.2M' },
    { title: 'Downtown Skyline 2BR', location: 'Downtown Dubai', img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop', price: 'AED 3.1M' },
  ]

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16" id="services">
        <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Tailored, transparent services covering the full investment lifecycle.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f,i) => <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />)}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16" id="projects">
        <h2 className="text-3xl font-bold tracking-tight">Featured Properties</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Starter showcase — replace with live listings later.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sample.map((p,i) => (
            <PropertyCard key={i} {...p} />
          ))}
        </div>
      </section>
    </>
  )
}