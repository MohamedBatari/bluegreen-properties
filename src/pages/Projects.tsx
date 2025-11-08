import PropertyCard from "@/components/PropertyCard";

export default function Projects() {
  // One flagship (latest/active) per developer
  const list = [
    {
      title: "Dubai Mansions – Emaar Hills",
      location: "Emaar • Emaar Hills (Dubai)",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop",
      price: "From AED 10M+",
    },
    {
      title: "Palm Central Private Residences",
      location: "Nakheel • Palm Jumeirah / Dubai Islands",
      img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2000&auto=format&fit=crop",
      price: "From AED 2.5M+",
    },
    {
      title: "Nad Al Sheba Gardens Villas",
      location: "Meraas • Nad Al Sheba, Dubai",
      img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2000&auto=format&fit=crop",
      price: "From AED 5M+",
    },
    {
      title: "Mercer House",
      location: "Ellington • Uptown Dubai (DMCC)",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000&auto=format&fit=crop",
      price: "From AED 1.8M+",
    },
    {
      title: "Azizi Tower 1 (Commercial)",
      location: "Azizi • Al Mina / Port Zone, Dubai",
      img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c3f5?q=80&w=2000&auto=format&fit=crop",
      price: "Enquire",
    },
    {
      title: "Mercedes-Benz Tower by Binghatti",
      location: "Binghatti • Dubai (Iconic High-rise)",
      img: "https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=2000&auto=format&fit=crop",
      price: "From AED 2.5M+",
    },
    {
      title: "Mirdad – Motor City",
      location: "Union Properties • Motor City, Dubai",
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop",
      price: "From AED 900K+",
    },
    {
      title: "The Row Saadiyat",
      location: "Aldar • Saadiyat Cultural District, Abu Dhabi",
      img: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?q=80&w=2000&auto=format&fit=crop",
      price: "From AED 4M+",
    },
    {
      title: "Breez by Danube",
      location: "Danube • Dubai Maritime City",
      img: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2000&auto=format&fit=crop",
      price: "From AED 1.3M+",
    },
    {
      title: "Samana Hills South 3",
      location: "Samana • Arjan / Dubailand",
      img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2000&auto=format&fit=crop",
      price: "From AED 640K+",
    },
    {
      title: "Sobha Hartland II (Riverside/Skyvue)",
      location: "Sobha • MBR City, Dubai",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000&auto=format&fit=crop",
      price: "From AED 1.6M+",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Signature Projects by Top Developers</h1>
      <p className="mt-4 text-slate-700 max-w-3xl">
        Curated selection of current & recently launched communities from leading UAE developers.
        Replace images with official renders and adjust starting prices as inventory updates.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p, i) => (
          <PropertyCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
