import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxxxxx"; // Not used for now

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  return (
    <section className="relative min-h-[90vh] bg-[#0A0F1C] text-white overflow-hidden py-20">
      {/* background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C] via-[#111828] to-[#0A0F1C]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Section — info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#E3C77A] to-[#C99846] bg-clip-text text-transparent">
            Contact Our Experts
          </h1>

          <p className="text-gray-400 max-w-md">
            Let's talk about your next investment opportunity.
            Our team is ready to help you find the right property in Dubai’s
            finest locations.
          </p>

          <ul className="mt-10 space-y-4 text-gray-300 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="text-[#E3C77A] h-5 w-5" />
              <span>Business Bay, Dubai, United Arab Emirates</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-[#E3C77A] h-5 w-5" />
              <a
                href="tel:+971544980604"
                className="hover:text-[#E3C77A] transition"
              >
                +971 54 498 0604
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[#E3C77A] h-5 w-5" />
              <a
                href="mailto:atasdan@bluegreen-properties.com"
                className="hover:text-[#E3C77A] transition"
              >
                atasdan@bluegreen-properties.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="text-[#E3C77A] h-5 w-5" />
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </li>
          </ul>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex flex-col gap-4 max-w-xs">
            {/* WhatsApp */}
            <a
              href="https://wa.me/971544980604?text=Hi%20BlueGreen%20Properties%2C%20I%20want%20more%20info."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E3C77A] to-[#C99846] text-black font-semibold px-6 py-3 rounded-full shadow-[0_0_25px_rgba(227,199,122,0.3)] hover:brightness-110 transition"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>

            {/* Call */}
            <a
              href="tel:+971544980604"
              className="inline-flex items-center justify-center gap-2 border border-[#E3C77A] text-[#E3C77A] font-semibold px-6 py-3 rounded-full hover:bg-[#E3C77A] hover:text-black transition"
            >
              <Phone className="h-5 w-5" />
              Call Us Directly
            </a>

            {/* Email */}
            <a
              href="mailto:atasdan@bluegreen-properties.com"
              className="inline-flex items-center justify-center gap-2 border border-[#C99846] text-[#C99846] font-semibold px-6 py-3 rounded-full hover:bg-[#C99846] hover:text-black transition"
            >
              <Mail className="h-5 w-5" />
              Send an Email
            </a>
          </div>
        </div>

        {/* FORM (COMMENTED OUT FOR FUTURE USE) */}
        {/*
        <div className="bg-white/5 border border-white/10 rounded-3xl backdrop-blur-lg p-8 sm:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>

          {status === "sent" && (
            <div className="mb-4 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 px-4 py-3 text-sm">
              ✅ Message sent successfully! We’ll contact you soon.
            </div>
          )}
          {status === "error" && (
            <div className="mb-4 rounded-xl bg-red-500/10 border border-red-400/30 text-red-300 px-4 py-3 text-sm">
              ❌ Something went wrong, please try again.
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <input ... />
            <input ... />
            <input ... />
            <textarea ... />
            <button ...> ... </button>
          </form>
        </div>
        */}
      </div>
    </section>
  );
}
