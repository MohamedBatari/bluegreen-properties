import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const controls = useAnimation();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;
    controls.start({
      x: ["0%", "-50%"],
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    });
  }, [controls]);

  const goToFeatured = () => {
    document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { number: "250+", label: "AED Million Sold" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "20+", label: "Partner Developers" },
    { number: "250+", label: "AED Million Sold" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "20+", label: "Partner Developers" },
  ];

  return (
    <section
      className="
        relative 
        min-h-screen md:h-[95vh]
        pt-24 sm:pt-28 md:pt-32
        flex flex-col justify-center
        overflow-visible md:overflow-hidden
      "
    >
      {/* Background */}
      <img
        src="https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?auto=format&fit=crop&q=80&w=1600"
        alt="Dubai skyline"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_300px_at_50%_-100px,rgba(234,179,8,0.12),transparent)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-4xl sm:text-5xl md:text-6xl 
            font-extrabold leading-[1.15] text-center text-white
          "
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#EAB308] to-[#B45309] drop-shadow-[0_0_22px_rgba(234,179,8,0.35)]">
            BlueGreen Properties
          </span>
          <span className="mt-2 block text-white">
            Luxury Real Estate in the UAE
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="
            mx-auto mt-4 sm:mt-5 max-w-2xl 
            text-base sm:text-lg md:text-xl 
            text-white/85 text-center
          "
        >
          Discover elite villas, iconic towers, and waterfront masterpieces.
          Tax-free investments. Zero commission. 100% satisfaction.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="/contact"
            className="
              inline-flex justify-center items-center
              rounded-full px-6 sm:px-8 py-3.5
              text-base sm:text-lg font-semibold
              bg-gradient-to-tr from-[#EAB308] to-[#B45309]
              text-black shadow-[0_10px_24px_rgba(234,179,8,0.3)]
              hover:brightness-110 transition
              w-full sm:w-auto
            "
          >
            Book a Consultation
          </a>
          <a
            href="/projects"
            className="
              inline-flex justify-center items-center
              rounded-full px-6 sm:px-8 py-3.5
              text-base sm:text-lg font-semibold
              border border-white/20 bg-white/10 hover:bg-white/20
              text-white transition
              w-full sm:w-auto
            "
          >
            View Projects
          </a>
        </motion.div>

        {/* Stats */}
        <div className="mt-6 sm:mt-8">
          {/* Mobile Grid */}
          <div className="grid grid-cols-2 gap-3 sm:hidden">
            {[
              { number: "250+", label: "AED Million Sold" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((s, i) => (
              <div
                key={`m-${i}`}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center backdrop-blur-md"
              >
                <div className="text-2xl font-extrabold text-[#EAB308]">
                  {s.number}
                </div>
                <div className="text-[11px] leading-tight text-white/85">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Marquee */}
          <motion.div
            className="hidden sm:flex mt-3 md:mt-4 gap-10 whitespace-nowrap justify-center overflow-hidden will-change-transform"
            animate={controls}
          >
            {stats.map((item, i) => (
              <div
                key={i}
                className="min-w-[220px] text-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 shadow-[0_4px_22px_rgba(234,179,8,0.15)] backdrop-blur-md"
              >
                <div className="text-3xl font-extrabold text-[#EAB308]">
                  {item.number}
                </div>
                <div className="text-sm text-white/80">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <motion.button
        onClick={goToFeatured}
        initial={{ y: 0 }}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to featured"
        className="
          absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2
          rounded-full border border-white/20 bg-white/10 hover:bg-white/20
          backdrop-blur-md p-3 sm:p-3.5
          shadow-[0_8px_20px_rgba(234,179,8,0.25)]
        "
      >
        <ChevronDown className="h-6 w-6 text-white" />
      </motion.button>
    </section>
  );
}
