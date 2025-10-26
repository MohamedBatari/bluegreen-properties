import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const nav = [
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(234,179,8,0.08),transparent)]">
      {/* Glass bar */}
      <div className="mx-auto max-w-7xl rounded-none md:rounded-2xl border-b md:border md:border-white/10 bg-[#0b0f19]/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <nav className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 text-white">
          {/* Logo */}
          <Link to="/" className="group text-2xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[#EAB308] to-[#B45309] bg-clip-text text-transparent">
              BlueGreen
            </span>{" "}
            <span className="text-white/90">Properties</span>
            <div className="h-[2px] w-0 bg-[#EAB308] transition-all group-hover:w-full mt-1" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  `relative px-1 pb-1 outline-none transition-colors duration-300 ${
                    isActive ? "text-[#EAB308]" : "text-white/80 hover:text-white"
                  } focus-visible:ring-2 focus-visible:ring-[#EAB308]/60 rounded`
                }
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#EAB308] rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTAs — now includes WhatsApp */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/971544980604"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 hover:border-white/30 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]/60"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+971544980604"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-[#EAB308] to-[#B45309] px-5 py-2 text-sm font-semibold text-black shadow-[0_8px_20px_rgba(234,179,8,0.25)] hover:brightness-110 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]/70"
            >
              <Phone className="h-4 w-4" />
              <span>Book Viewing</span>
            </a>
          </div>

          {/* Mobile: Hamburger */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-white/90 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]/60"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
            />

            {/* Panel */}
            <motion.aside
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed right-0 top-0 h-screen w-[85%] max-w-sm bg-[#0b0f19] text-white md:hidden shadow-[-16px_0_40px_rgba(0,0,0,0.45)] border-l border-white/10"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <span className="text-lg font-semibold">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EAB308]/60"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-5 py-4">
                <ul className="space-y-2">
                  {nav.map((n) => (
                    <li key={n.to}>
                      <NavLink
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-lg px-3 py-3 text-base transition ${
                            isActive
                              ? "bg-white/10 text-[#EAB308]"
                              : "text-white/90 hover:bg-white/5 hover:text-white"
                          }`
                        }
                      >
                        {n.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                {/* Mobile CTAs */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="https://wa.me/971544980604"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-white/15 bg-white/5 rounded-xl px-4 py-3 text-sm text-white/90 hover:bg-white/10 transition"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+971544980604"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-[#EAB308] to-[#B45309] px-4 py-3 text-sm font-semibold text-black hover:brightness-110 transition"
                  >
                    <Phone className="h-4 w-4" />
                    Book
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
