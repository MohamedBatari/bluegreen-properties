import { CheckCircle2, Building2, Handshake, LineChart, Home, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Investment Advisory",
      desc:
        "Our experts craft personalized investment strategies across Dubai’s off-plan and secondary markets. From timing and location to ROI forecasting — we align every detail with your goals.",
      icon: <LineChart className="h-6 w-6 text-[#C6A34F]" />,
      points: [
        "ROI and growth strategy planning",
        "Personalized property portfolio setup",
        "Off-plan and secondary market analysis",
      ],
    },
    {
      title: "Developer Allocations",
      desc:
        "Gain priority access to top UAE developers and exclusive launch offers. We secure the best units, pricing, and payment plans before the public launch.",
      icon: <Building2 className="h-6 w-6 text-[#C6A34F]" />,
      points: [
        "Exclusive launch access",
        "Premium unit selection",
        "Direct developer partnerships",
      ],
    },
    {
      title: "Transaction Management",
      desc:
        "From reservation to SPA and trustee registration, our team ensures every step is smooth, transparent, and compliant.",
      icon: <Handshake className="h-6 w-6 text-[#C6A34F]" />,
      points: [
        "End-to-end process guidance",
        "Legal and trustee coordination",
        "Secure registration handling",
      ],
    },
    {
      title: "Property Management",
      desc:
        "Maximize returns with professional tenant sourcing, inspections, maintenance, and ongoing financial reporting.",
      icon: <Home className="h-6 w-6 text-[#C6A34F]" />,
      points: [
        "Tenant selection and contracts",
        "Maintenance coordination",
        "Monthly performance reports",
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-[#FAFAFA] text-[#1A1A1A] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0A0A]">
            Our Premium Real Estate Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From tailored investments to end-to-end property management, BlueGreen Properties delivers world-class service with transparency and trust.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <article
              key={i}
              className="rounded-3xl bg-white border border-gray-200 hover:border-[#C6A34F] hover:shadow-[0_10px_35px_rgba(198,163,79,0.15)] transition-all duration-500 p-8"
            >
              <div className="flex items-center gap-3">
                {s.icon}
                <h3 className="text-xl font-semibold text-[#0A0A0A]">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-[#C6A34F]" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Trust Strip */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C6A34F] to-[#E0C068] px-6 py-3 rounded-full text-black font-semibold shadow-md">
            <Shield className="h-5 w-5" />
            100% Transparency — 10+ Years of Trust
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-[#C6A34F] hover:bg-[#B38E3D] text-black font-semibold text-lg px-8 py-3 rounded-full shadow-[0_10px_25px_rgba(198,163,79,0.3)] transition-all"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
