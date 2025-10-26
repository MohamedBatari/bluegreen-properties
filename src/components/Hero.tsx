import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const controls = useAnimation();

  // Animate continuously left to right
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  const goToFeatured = () => {
    const el = document.querySelector("#featured");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[95vh] flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 backdrop-blur-[1px]" />

      {/* (Removed) Top glow line that caused the seam */}

      {/* Headline */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-[#B45309] drop-shadow-[0_0_25px_rgba(234,179,8,0.4)]">
            BlueGreen Properties
          </span>
          <span className="block mt-2 text-white">
            The #1 Luxury Real Estate Brand in the UAE
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
        >
          Discover elite villas, iconic towers, and waterfront masterpieces.
          We connect you to Dubai’s most prestigious developments — tax-free investments, zero commission.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-gradient-to-tr from-[#EAB308] to-[#B45309] px-8 py-3 rounded-full font-semibold text-black text-lg shadow-[0_10px_25px_rgba(234,179,8,0.35)] hover:brightness-110 transition"
          >
            Book a Consultation
          </a>
          <a
            href="/projects"
            className="inline-flex items-center justify-center border border-white/20 bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full font-semibold text-white text-lg transition"
          >
            View Projects
          </a>
        </motion.div>

        {/* Moving Stats Bar - below buttons */}
        <motion.div
          className="mt-14 flex gap-16 whitespace-nowrap justify-center overflow-hidden"
          animate={controls}
        >
          {[
            { number: "250+", label: "AED Million in Properties Sold" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "20+", label: "Partner Developers" },
            { number: "250+", label: "AED Million in Properties Sold" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "20+", label: "Partner Developers" },
          ].map((item, i) => (
            <div
              key={i}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-10 py-4 min-w-[220px] text-center shadow-[0_4px_25px_rgba(234,179,8,0.15)]"
            >
              <h3 className="text-3xl font-extrabold text-[#EAB308]">
                {item.number}
              </h3>
              <p className="text-sm text-white/70">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Arrow */}
      <motion.button
        onClick={goToFeatured}
        initial={{ y: 0 }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 group rounded-full border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 shadow-[0_8px_20px_rgba(234,179,8,0.25)]"
      >
        <ChevronDown className="h-6 w-6 text-white group-hover:text-[#EAB308] transition" />
      </motion.button>
    </section>
  );
}
