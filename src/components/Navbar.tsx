import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  const nav = [
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transform-gpu bg-gradient-to-r from-black/80 via-[#0b0f19]/90 to-black/80 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
      {/* 🧩 Seam killer: invisible 1px strip to hide white line */}
      <div className="pointer-events-none absolute -bottom-px inset-x-0 h-px bg-[#0b0f19]" />

      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        {/* Logo */}
        <Link to="/" className="group text-2xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-[#EAB308] to-[#B45309] bg-clip-text text-transparent">
            BlueGreen
          </span>{" "}
          <span className="text-white/90">Properties</span>
          <div className="h-[2px] w-0 bg-[#EAB308] transition-all group-hover:w-full mt-1"></div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `relative px-1 pb-1 transition-all duration-300 ${
                  isActive
                    ? "text-[#EAB308]"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {n.label}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#EAB308] rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/971544980604"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-white/15 bg-white/5 rounded-xl px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="tel:+971544980604"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-[#EAB308] to-[#B45309] px-5 py-2 font-semibold text-black shadow-[0_8px_20px_rgba(234,179,8,0.25)] hover:brightness-110 transition"
          >
            <Phone className="h-4 w-4" />
            Book Viewing
          </a>
        </div>
      </nav>
    </header>
  );
}
