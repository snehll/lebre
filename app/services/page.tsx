// src/app/services/page.tsx
import {
  Truck,
  Plane,
  Ship,
  PackageSearch,
  FileCheck,
  Globe,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = { title: "Services" };

const services = [
  {
    icon: Plane,
    title: "Air Transportation",
    desc: "Express air freight for urgent spare parts – 24-72h worldwide",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Truck,
    title: "Heavy & Oversized Transport",
    desc: "Professional handling of turbines, generators, and large components",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Ship,
    title: "Sea & Intermodal Freight",
    desc: "Cost-effective solutions with full tracking and documentation",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: PackageSearch,
    title: "Turnkey Procurement",
    desc: "We source, verify, pack, and deliver – you just receive",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: FileCheck,
    title: "Customs & Documentation",
    desc: "Full export/import support across EU, Asia, Middle East",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Globe,
    title: "Project Logistics",
    desc: "End-to-end coordination for plant overhauls and greenfield projects",
    color: "from-violet-500 to-purple-700",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-950 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            Full-cycle international logistics & procurement — designed for
            industrial buyers who value speed and certainty
          </p>
        </div>
      </section>

      {/* Services Grid — Modern Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <AnimatedSection key={i}>
                <div className="group relative h-full">
                  <div className="absolute -inset-1 bg-linear-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700 blur-xl" />
                  <div className="relative h-full bg-card border border-border/50 rounded-3xl p-10 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <div
                      className={`w-20 h-20 rounded-2xl bg-linear-to-br ${s.color} p-5 mb-8`}>
                      <s.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
