import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import { ShieldCheck, Building2, Handshake, Globe2 } from "lucide-react";
import Projects from "@/pages/Projects";

export default function Home() {
  const features = [
    { icon: ShieldCheck, title: "Tax-Free Income Guidance", desc: "Clear strategies to benefit from UAE real estate income." },
    { icon: Building2,   title: "Property Selection",        desc: "Hand-picked projects in Dubai & Abu Dhabi, matched to your goals." },
    { icon: Handshake,   title: "End-to-End Management",     desc: "Reservation to handover, leasing and renewals — one contact." },
    { icon: Globe2,      title: "Remote Investor Friendly",  desc: "Digital signatures, video tours, transparent reporting while abroad." },
  ];

  const partners = [
    "/logos/emaar.png",
    "/logos/nakheel.png",
    "/logos/aldar.png",
    "/logos/dubai-properties.png",
    "/logos/damac.png",
    "/logos/sobha.png",
  ];

  return (
    <>
      <Hero />

      {/* WHAT WE DO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold tracking-tight">What We Do</h2>
        <p className="mt-4 text-slate-600 max-w-2xl">
          Tailored, transparent services covering the full investment lifecycle.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f,i) => (
            <FeatureCard key={i} icon={<f.icon className="w-6 h-6" />} title={f.title} desc={f.desc} />
          ))}
        </div>
      </section>

    {/* PARTNERS */}
<section className="bg-black py-24">
  <div className="mx-auto max-w-7xl px-6">
    <h2 className="text-4xl font-bold text-white text-center">Trusted Partners</h2>
    <p className="text-slate-400 text-center mt-2 text-lg">
      Working with the most iconic developers in UAE
    </p>

    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
      {[
        "/logos/emaar.png",
        "/logos/damac.png",
        "/logos/sobha.png",
        "/logos/ellington.png",
        "/logos/meraas.png",
        "/logos/nakheel.png",
        "/logos/azizi.png",
        "/logos/binghatti.png",
        "/logos/union properties.png",
        "/logos/al dar.png",
        "/logos/danube.png",
        "/logos/samana.png",
      ].map((src, i) => (
        <div
          key={i}
          className="flex items-center justify-center w-full h-24 bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition shadow-xl shadow-black/20"
        >
          <img
            src={src}
            className="h-16 w-auto object-contain opacity-85 hover:opacity-100 transition"
          />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* PROJECTS SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Projects />
      </section>
    </>
  );
}
