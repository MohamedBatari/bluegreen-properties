import { useEffect, useMemo, useRef, useState } from "react";
import {
  Award, Building2, Crown, Handshake, LineChart as LineChartIcon, Newspaper,
  ShieldCheck, Star, TrendingUp, Users
} from "lucide-react";

/** ----------------------- Utilities ----------------------- */
function useCountUp(end: number, trigger: boolean, durationMs = 1200) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let raf = 0;
    const t0 = performance.now();
    const loop = (now: number) => {
      const p = Math.min(1, (now - t0) / durationMs);
      setV(Math.round(end * p));
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [end, trigger, durationMs]);
  return v;
}

function useInView<T extends HTMLElement>(threshold = 0.18, rootMargin = "-60px 0px -60px 0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);
  return { ref, inView };
}

/** ----------------------- Page ----------------------- */
export default function About() {
  // Stats animation trigger
  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>(0.2);
  const years = useCountUp(4, statsInView);
  const sold = useCountUp(250, statsInView);
  const investors = useCountUp(100, statsInView);

  // Auto-scroll testimonials (simple CSS animation toggled by prefers-reduced-motion)
  const testimonials = useMemo(
    () => [
      {
        quote:
          "Ali understood our risk profile and timing perfectly. The allocation we received outperformed our expectations.",
        name: "Khaled A.",
        title: "Family Office, Riyadh",
      },
      {
        quote:
          "We wanted yield + long-term location value. He sourced a waterfront stack that rented before handover.",
        name: "Elena B.",
        title: "Investor, Cyprus",
      },
      {
        quote:
          "No fluff. Clean numbers, developer access, and a post-sale team that actually manages the portfolio.",
        name: "Sanjay P.",
        title: "Entrepreneur, Mumbai",
      },
      {
        quote:
          "We’ve worked with many brokers in Dubai. Ali is an advisor. That’s the difference.",
        name: "Martin D.",
        title: "VC Partner, London",
      },
    ],
    []
  );

  // JSON-LD (SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ali Tasdan",
    jobTitle: "Founder & Managing Director",
    worksFor: {
      "@type": "Organization",
      name: "BlueGreen Properties",
      url: "https://bluegreen-properties.com"
    },
    nationality: "Turkish",
    knowsAbout: ["Dubai Real Estate", "Off-plan", "Investment Advisory", "Property Management"],
    image: "https://your-domain.com/Ali%20tasdan.PNG"
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* SEO JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============ Founder Hero ============ */}
      <header className="text-center">
        <span className="inline-block text-xs tracking-[0.22em] uppercase text-[#CDAA53]">
          Founder & Managing Director
        </span>
        <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-white">
          <span className="bg-gradient-to-r from-[#F9D47E] to-[#CDAA53] bg-clip-text text-transparent">
            Ali Tasdan
          </span>
        </h1>
        <p className="mt-3 text-gray-300 text-lg">
          4+ Years in Dubai • AED 250M+ Sold • 100+ Investors Guided
        </p>
      </header>

      {/* Hero block with portrait + bio */}
      <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">

              {/* Portrait */}
        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(249,212,126,0.2)] border border-[#1C1C1C]">
          {/* Put Ali's real image in /public with this exact name */}
          <img
            src="/Ali tasdan.PNG"
            alt="Ali Tasdan — Founder of BlueGreen Properties"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E]/90 via-transparent to-transparent" />
        </div>
        {/* Bio */}
        <article className="rounded-3xl bg-[#0A0B0E] p-10 text-gray-200 shadow-[0_0_60px_rgba(249,212,126,0.08)] border border-[#1C1C1C]">
          <div className="flex items-center gap-3 text-[#F9D47E]">
            <Crown className="h-5 w-5" />
            <span className="text-sm font-semibold tracking-wider uppercase">Founder’s Message</span>
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-[#F9D47E]">
            Leadership Built on Trust & Performance
          </h2>
          <p className="mt-4 leading-relaxed">
            Turkish entrepreneur <strong>Ali Tasdan</strong> has been shaping Dubai’s luxury market for over a decade. With
            a personal track record exceeding <span className="text-[#F9D47E] font-semibold">AED 250M+</span> in closed
            transactions, Ali helps investors access premium allocations, secure strong rental demand, and build portfolios
            that compound over time.
          </p>
          <p className="mt-3 leading-relaxed text-gray-300/90">
            Backed by deep developer relationships and an investor-first philosophy, his advisory combines timing, data,
            and execution — from off-plan launches to secondary market opportunities.
          </p>

          {/* Pillars */}
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {[
              { icon: <Handshake className="h-4 w-4 text-[#F9D47E]" />, label: "Investor-First" },
              { icon: <LineChartIcon className="h-4 w-4 text-[#F9D47E]" />, label: "Performance" },
              { icon: <ShieldCheck className="h-4 w-4 text-[#F9D47E]" />, label: "Transparency" },
            ].map((p, i) => (
              <div key={i} className="rounded-xl border border-[#2A2A2A] bg-[#111]/80 px-4 py-3 text-sm text-gray-300 flex items-center gap-2">
                {p.icon} {p.label}
              </div>
            ))}
          </div>
        </article>


      </div>

      {/* ============ Metrics + Video ============ */}
      <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
        {/* Counters */}
        <div
          ref={statsRef}
          className="grid grid-cols-3 gap-6 rounded-3xl bg-[#0B0C0E] p-8 border border-[#1A1A1A] text-center"
        >
          <div>
            <div className="text-4xl font-extrabold text-[#F9D47E]">{years}+</div>
            <div className="text-sm text-gray-400 mt-1">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-[#F9D47E]">{sold}</div>
            <div className="text-sm text-gray-400 mt-1">AED Million Sold</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-[#F9D47E]">{investors}+</div>
            <div className="text-sm text-gray-400 mt-1">Investors Helped</div>
          </div>
        </div>

        {/* YouTube */}
        <div className="rounded-3xl overflow-hidden border border-[#1C1C1C] shadow-[0_0_40px_rgba(249,212,126,0.12)]">
          <div className="aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3UZebZzTj_g?rel=0&modestbranding=1&color=white"
              title="Ali Tasdan - Founder of BlueGreen Properties"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* ============ Signature Story ============ */}
      <section className="mt-16 grid lg:grid-cols-3 gap-6">
        {[
          {
            icon: <TrendingUp className="h-5 w-5 text-[#F9D47E]" />,
            title: "Investment Thesis",
            text:
              "Focus on locations with durable demand, launch allocations, and clear rental liquidity. Blend off-plan cycles with stable secondary assets.",
          },
          {
            icon: <Building2 className="h-5 w-5 text-[#F9D47E]" />,
            title: "Developer Access",
            text:
              "Priority access with major UAE developers enhances allocation quality, stack selection, and exit options.",
          },
          {
            icon: <Users className="h-5 w-5 text-[#F9D47E]" />,
            title: "After-Sales & PM",
            text:
              "Property management and tenanting to protect yield. Reporting that keeps portfolios transparent and compounding.",
          },
        ].map((b, i) => (
          <div key={i} className="rounded-2xl bg-[#0A0B0E] p-6 border border-[#1C1C1C]">
            <div className="flex items-center gap-3">
              {b.icon}
              <h3 className="font-semibold text-white">{b.title}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">{b.text}</p>
          </div>
        ))}
      </section>

      {/* ============ Partners Marquee ============ */}
      <section className="mt-16">
        <div className="flex items-center gap-3">
          <span className="text-xs tracking-[0.22em] uppercase text-[#CDAA53]">Developer Partners</span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#CDAA53] to-transparent" />
        </div>
        <div className="mt-6 relative overflow-hidden rounded-2xl border border-[#1C1C1C] bg-[#0A0B0E]">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0A0B0E] via-transparent to-[#0A0B0E]" />
          <div className="flex gap-12 py-6 px-6 animate-[scroll_22s_linear_infinite] whitespace-nowrap">
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
              <img key={i} src={src} alt="Partner" className="h-8 opacity-80" />
            ))}
            {/* duplicate to loop seamlessly */}
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
              <img key={`d${i}`} src={src} alt="Partner" className="h-8 opacity-80" />
            ))}
          </div>
        </div>
        {/* marquee keyframes */}
        <style>
          {`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}
        </style>
      </section>

    

     <section className="relative mt-20 bg-white py-16">
  <h3 className="text-2xl font-semibold text-black mb-10 text-center">
    Our Journey
  </h3>

  <div className="relative border-l border-gray-300 pl-8 ml-3 space-y-10 max-w-3xl mx-auto">
    {[
      { year: "2021", text: "Started real estate career with PSI Real Estate in Abu Dhabi, handling sales and leasing operations." },
      { year: "2022", text: "Moved to Dubai and joined Sobha Realty as Sales Manager. Organized a Roadshow in Istanbul, connecting Turkish brokers with the Dubai market." },
      { year: "2023", text: "Worked with leading developers and top brokerage firms including AX Capital and Nest Seekers Dubai. Recognized as a Top Performer and completed advanced Dubai market training." },
      { year: "2025", text: "Founded BlueGreen Properties." },
    ].map((item, i) => (
      <div key={i} className="relative">
        {/* Dot */}
        <div className="absolute -left-[11px] top-2 h-4 w-4 rounded-full border-2 border-[#EAB308] bg-white shadow-[0_0_8px_rgba(234,179,8,0.4)]" />

        {/* Year and text */}
        <div className="ml-6">
          <span className="block text-[#EAB308] font-bold text-lg mb-1">
            {item.year}
          </span>
          <p className="text-black/80 text-sm md:text-base leading-relaxed">
            {item.text}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* ============ Awards & Media ============ */}
      <section className="mt-16 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl p-6 border border-[#1C1C1C] bg-[#0A0B0E]">
          <div className="flex items-center gap-2 text-[#F9D47E]">
            <Award className="h-5 w-5" />
            <h3 className="text-lg font-semibold text-black">Awards & Recognition</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>• Top Producer (Multiple Launches, 2019–2024)</li>
            <li>• Outstanding Client Service (Developer Partners)</li>
            <li>• Community Contribution & Mentorship</li>
          </ul>
        </div>
        <div className="rounded-3xl p-6 border border-[#1C1C1C] bg-[#0A0B0E]">
          <div className="flex items-center gap-2 text-[#F9D47E]">
            <Newspaper className="h-5 w-5" />
            <h3 className="text-lg font-semibold text-white">Media Mentions</h3>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-gray-400">
            <li>• Gulf Business — “Smart Capital in Dubai Off-Plan”</li>
            <li>• Arabian Business — “Investor-First Advisory in Practice”</li>
            <li>• Khaleej Times — “Portfolio Strategy in Volatile Cycles”</li>
          </ul>
        </div>
      </section>

      {/* ============ Team Snapshot ============ */}
      <section className="mt-16">
        <h3 className="text-2xl font-semibold text-black">Team, Not Just Brokerage</h3>
        <p className="mt-2 text-sm text-gray-400 max-w-2xl">
          BlueGreen’s ecosystem spans advisory, allocations, property management, and after-sales service.
        </p>
       {/* TEAM SECTION */}
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
  <h2 className="text-4xl font-bold tracking-tight text-center">Our Leadership</h2>
  <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">
    Experienced professionals leading BlueGreen Properties with vision and integrity.
  </p>

  <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      { name: "Ali Tasdan", role: "Founder & CEO", img: "/ALI TASDAN - FOUNDER.jpg" },
      { name: "Houda Berrada", role: "Marketing Director", img: "/HOUDA BERRADA - MARKETING DIRECTOR.jpg" },
      { name: "Almiranda Pinkan Risna", role: "Social Media Manager", img: "/ALMIRANDA PINKAN RISNA - SOCIAL MEDIA MANAGER.jpg" },
    ].map((m, i) => (
      <div
        key={i}
        className="group rounded-3xl overflow-hidden border border-gray-200 bg-white shadow-xl hover:shadow-2xl transition duration-500"
      >
        <div className="relative h-[420px] overflow-hidden">
          <img
            src={m.img}
            alt={m.name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-900">{m.name}</h3>
          <p className="text-gray-500 mt-1">{m.role}</p>
        </div>
      </div>
    ))}
  </div>
</section>

      </section>

      {/* ============ FAQ ============ */}
      {/* ======================= FAQ (Expanded, Category-Based, SEO-ready) ======================= */}
<section className="mt-16">
  <h3 className="text-2xl font-semibold text-black">Frequently Asked Questions</h3>
  <p className="mt-2 text-sm text-gray-400">
    We’ve answered the most common investor questions. If you don’t see what you need,
    <a href="/contact" className="text-[#CDAA53] hover:underline ml-1">book a quick consultation</a>.
  </p>

  {/* BUYING / INVESTING */}
  <div className="mt-8">
    <div className="flex items-center gap-3">
      <span className="text-xs tracking-[0.22em] uppercase text-[#CDAA53]">Buying & Investing</span>
      <div className="h-px flex-1 bg-gradient-to-r from-[#CDAA53] to-transparent" />
    </div>
    <div className="mt-4 space-y-3">
      {[
        {
          q: "Do you handle both off-plan and secondary properties?",
          a: "Yes. We blend off-plan for capital growth and secondary for yield/liquidity. Your mix depends on horizon, risk, and cashflow goals."
        },
        {
          q: "What’s the minimum investment to start in Dubai?",
          a: "There’s no fixed legal minimum, but good opportunities typically start from AED 700k–1M+. We’ll align options with your target ROI and timeline."
        },
        {
          q: "How do I choose the right developer or project?",
          a: "We screen developer track record, delivery timelines, service quality, location liquidity, rental comps, and exit demand. Then we shortlist 2–3 best fits."
        },
        {
          q: "What returns can I expect in Dubai real estate?",
          a: "Gross yields for prime apartments often range 6–9% with strong demand. Off-plan capital growth depends on entry timing and allocation quality."
        },
        {
          q: "Is it possible to invest remotely without visiting Dubai?",
          a: "Yes. We handle video tours, unit reservations, digital paperwork, and Power-of-Attorney if needed. You can complete the entire process remotely."
        }
      ].map((item, i) => (
        <details key={`buy-${i}`} className="group rounded-2xl border border-[#1C1C1C] bg-[#0A0B0E] p-5">
          <summary className="flex cursor-pointer items-center justify-between">
            <span className="font-medium text-white">{item.q}</span>
            <span className="ml-3 text-[#CDAA53] group-open:rotate-180 transition">▾</span>
          </summary>
          <p className="mt-3 text-sm text-gray-400">{item.a}</p>
        </details>
      ))}
    </div>
  </div>

  {/* FEES / COSTS / PROCESS */}
  <div className="mt-10">
    <div className="flex items-center gap-3">
      <span className="text-xs tracking-[0.22em] uppercase text-[#CDAA53]">Fees, Costs & Process</span>
      <div className="h-px flex-1 bg-gradient-to-r from-[#CDAA53] to-transparent" />
    </div>
    <div className="mt-4 space-y-3">
      {[
        {
          q: "What buying costs should I budget for besides the price?",
          a: "Plan for DLD fee (~4%), Oqood/registration where applicable, trustee fee, agency (if any), and service charges post-handover. We provide a full cost sheet upfront."
        },
        {
          q: "What are service charges and who sets them?",
          a: "Annual fees for building maintenance, facilities, security, etc. They vary by project and are published by the owners association/management."
        },
        {
          q: "How long does an off-plan purchase take from reservation to SPA?",
          a: "Reservation can be done in a day; SPA (Sale & Purchase Agreement) is usually issued within days to a couple of weeks depending on the developer."
        },
        {
          q: "Do you charge buyers a commission?",
          a: "For most developer launches we are paid by the developer (zero commission to you). On secondary, a standard buyer agency fee may apply—always disclosed upfront."
        }
      ].map((item, i) => (
        <details key={`fees-${i}`} className="group rounded-2xl border border-[#1C1C1C] bg-[#0A0B0E] p-5">
          <summary className="flex cursor-pointer items-center justify-between">
            <span className="font-medium text-white">{item.q}</span>
            <span className="ml-3 text-[#CDAA53] group-open:rotate-180 transition">▾</span>
          </summary>
          <p className="mt-3 text-sm text-gray-400">{item.a}</p>
        </details>
      ))}
    </div>
  </div>

  {/* FINANCING / LEGAL */}
  <div className="mt-10">
    <div className="flex items-center gap-3">
      <span className="text-xs tracking-[0.22em] uppercase text-[#CDAA53]">Financing & Legal</span>
      <div className="h-px flex-1 bg-gradient-to-r from-[#CDAA53] to-transparent" />
    </div>
    <div className="mt-4 space-y-3">
      {[
        {
          q: "Can non-residents get a mortgage in the UAE?",
          a: "Yes—LTVs are typically lower for non-residents and rates vary by bank. We’ll introduce you to lenders/partners to pre-qualify quickly."
        },
        {
          q: "Do I need a local bank account?",
          a: "Recommended for rent collection and payments, but not always mandatory. We guide you through setup with partner banks if needed."
        },
        {
          q: "How is ownership structured (individual, company, joint)?",
          a: "All possible. Many investors buy individually; some use SPVs for estate planning or tax reasons. We can connect you with legal/tax advisors."
        },
        {
          q: "What documents do I need to buy?",
          a: "Passport copy, contact details, and in some cases proof of address/funds. Developers and trustees will specify the exact list."
        }
      ].map((item, i) => (
        <details key={`fin-${i}`} className="group rounded-2xl border border-[#1C1C1C] bg-[#0A0B0E] p-5">
          <summary className="flex cursor-pointer items-center justify-between">
            <span className="font-medium text-white">{item.q}</span>
            <span className="ml-3 text-[#CDAA53] group-open:rotate-180 transition">▾</span>
          </summary>
          <p className="mt-3 text-sm text-gray-400">{item.a}</p>
        </details>
      ))}
    </div>
  </div>

  {/* RENTALS / AFTER-SALES / PM */}
  <div className="mt-10">
    <div className="flex items-center gap-3">
      <span className="text-xs tracking-[0.22em] uppercase text-[#CDAA53]">Rentals, After-Sales & PM</span>
      <div className="h-px flex-1 bg-gradient-to-r from-[#CDAA53] to-transparent" />
    </div>
    <div className="mt-4 space-y-3">
      {[
        {
          q: "Do you manage properties after purchase?",
          a: "Yes. We handle snagging, handover, listing, tenant screening, contracts, key handover, inspections, and ongoing maintenance coordination."
        },
        {
          q: "Short-term vs long-term rentals—what’s better?",
          a: "Depends on location, building regulations, and your goals. We model both scenarios and advise based on net yields and effort."
        },
        {
          q: "How quickly can we rent after handover?",
          a: "In high-demand zones, units often rent within 1–4 weeks at market rates. Presentation and pricing strategy matter; we handle both."
        },
        {
          q: "Do you help with resale/exits?",
          a: "Yes—timing exits around supply cycles and demand peaks is key. We prep the unit, market it, and negotiate to protect your returns."
        }
      ].map((item, i) => (
        <details key={`pm-${i}`} className="group rounded-2xl border border-[#1C1C1C] bg-[#0A0B0E] p-5">
          <summary className="flex cursor-pointer items-center justify-between">
            <span className="font-medium text-white">{item.q}</span>
            <span className="ml-3 text-[#CDAA53] group-open:rotate-180 transition">▾</span>
          </summary>
          <p className="mt-3 text-sm text-gray-400">{item.a}</p>
        </details>
      ))}
    </div>
  </div>

  {/* VIEWINGS / REMOTE FLOW */}
  <div className="mt-10">
    <div className="flex items-center gap-3">
      <span className="text-xs tracking-[0.22em] uppercase text-[#CDAA53]">Viewings & Remote Process</span>
      <div className="h-px flex-1 bg-gradient-to-r from-[#CDAA53] to-transparent" />
    </div>
    <div className="mt-4 space-y-3">
      {[
        {
          q: "Can you arrange same-day or VIP viewings?",
          a: "Yes—subject to developer access and unit availability. For popular launches, we secure allocations via pre-registration."
        },
        {
          q: "What if I can’t attend in person?",
          a: "We do live video tours, provide floor plans, stacks, and pricing, then handle reservation digitally."
        },
        {
          q: "How do you protect me from overpriced or low-liquidity units?",
          a: "We benchmark against real comps, rental data, and exit history. If a unit doesn’t pass our checks, we’ll say no."
        }
      ].map((item, i) => (
        <details key={`view-${i}`} className="group rounded-2xl border border-[#1C1C1C] bg-[#0A0B0E] p-5">
          <summary className="flex cursor-pointer items-center justify-between">
            <span className="font-medium text-white">{item.q}</span>
            <span className="ml-3 text-[#CDAA53] group-open:rotate-180 transition">▾</span>
          </summary>
          <p className="mt-3 text-sm text-gray-400">{item.a}</p>
        </details>
      ))}
    </div>
  </div>

  {/* FINAL NUDGE */}
  <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
    <p className="text-sm text-black">
      Still have questions? Get tailored answers for your situation in a 15-minute call.
    </p>
   
  </div>

  {/* SEO: FAQPage structured data */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          { "@type": "Question", name: "Do you handle both off-plan and secondary properties?", acceptedAnswer: { "@type": "Answer", text: "Yes. We blend off-plan for capital growth and secondary for yield/liquidity." } },
          { "@type": "Question", name: "What’s the minimum investment to start in Dubai?", acceptedAnswer: { "@type": "Answer", text: "Good opportunities typically start from AED 700k–1M+. We align to your target ROI and timeline." } },
          { "@type": "Question", name: "Can I invest remotely without visiting Dubai?", acceptedAnswer: { "@type": "Answer", text: "Yes—video tours, digital paperwork, and POA if needed. Fully remote is possible." } },
          { "@type": "Question", name: "What buying costs should I budget besides price?", acceptedAnswer: { "@type": "Answer", text: "DLD (~4%), Oqood/registration, trustee fee, agency (if any), and service charges post-handover." } },
          { "@type": "Question", name: "Do you manage properties after purchase?", acceptedAnswer: { "@type": "Answer", text: "Yes—snagging, handover, listing, tenants, contracts, inspections, and ongoing PM." } },
          { "@type": "Question", name: "Can non-residents get a mortgage in the UAE?", acceptedAnswer: { "@type": "Answer", text: "Yes—LTVs lower for non-residents; we introduce lenders for quick pre-qual." } },
          { "@type": "Question", name: "Short-term vs long-term rentals—what’s better?", acceptedAnswer: { "@type": "Answer", text: "It depends on location, building rules, and your goals. We model both and advise." } },
          { "@type": "Question", name: "Do you help with resale/exits?", acceptedAnswer: { "@type": "Answer", text: "Yes—we time exits around supply/demand cycles and manage the full sale." } }
        ]
      }),
    }}
  />
</section>




      {/* ============ Final CTA ============ */}
      <div className="mt-16 text-center">
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-gradient-to-tr from-[#F9D47E] to-[#CDAA53] text-black font-semibold px-8 py-3 rounded-full text-lg shadow-[0_0_25px_rgba(249,212,126,0.35)] hover:brightness-110 transition"
        >
          Book a Consultation
        </a>

      </div>
    </section>
  );
}
