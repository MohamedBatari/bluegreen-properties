import PropertyCard from "@/components/PropertyCard";
import { t } from "@/i18n";

export default function Projects() {
  const list = [
    {
      title: t("projects.list1.title"),
      location: t("projects.list1.location"),
      img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop",
      price: "AED 2.3M",
    },
    {
      title: t("projects.list2.title"),
      location: t("projects.list2.location"),
      img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c3f5?q=80&w=1200&auto=format&fit=crop",
      price: "AED 7.8M",
    },
    {
      title: t("projects.list3.title"),
      location: t("projects.list3.location"),
      img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop",
      price: "AED 1.9M",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold tracking-tight">
        {t("sections.projects")}
      </h1>
      <p className="mt-4 text-slate-700 max-w-2xl">{t("projects.detail")}</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p, i) => (
          <PropertyCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
