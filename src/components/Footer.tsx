import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-brand-900 via-brand-800 to-brand-900 text-gray-300 pt-16 pb-6">
      {/* Glow line at top */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-left">
        {/* Column 1: Brand info */}
        <div>
          <h3 className="text-2xl font-semibold text-gold mb-3">BlueGreen Properties</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your trusted partner in Dubai luxury real estate. We specialize in premium properties,
            smart investments, and bespoke property management services.
          </p>
        </div>

        {/* Column 2: Contact & Hours */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-gold mt-0.5" />
              <span>Business Bay, Dubai, United Arab Emirates</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 text-gold mt-0.5" />
              <a href="tel:+971500000000" className="hover:text-gold transition">
                +971 54 498 0604
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 text-gold mt-0.5" />
              <a href="mailto:info@bluegreenproperties.ae" className="hover:text-gold transition">
                atasdan@bluegreen-properties.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-gold mt-0.5" />
              <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <p className="text-sm text-gray-400 mb-4">
            Stay connected and discover the latest opportunities in Dubai luxury real estate.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/bluegreenproperties/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-gold hover:text-black transition"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-gold hover:text-black transition"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://wa.me/971544980604"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-gold hover:text-black transition"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider line */}
      <div className="my-10 mx-auto max-w-6xl border-t border-white/10" />

      {/* Bottom credits */}
      <div className="text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-gold font-semibold">BlueGreen Properties</span>. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-gray-600">
          Designed & built with in Dubai
        </p>
      </div>
    </footer>
  );
}

