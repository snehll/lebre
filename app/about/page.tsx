// src/app/about/page.tsx
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Globe,
  Truck,
  Users,
  Clock,
  ShieldCheck,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      {/* Hero-style intro */}
      <section className="relative py-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">About Us</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
            Based in Poland, our company specializes in international trade and
            distribution of industrial equipment and spare parts.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-8">
                We Make Global Trade Seamless
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  We work with trusted manufacturers across Europe, providing
                  full-cycle solutions from sourcing and documentation to
                  delivery coordination.
                </p>
                <p className="text-foreground font-medium">
                  Our team combines deep market expertise with a personal
                  approach to every project, ensuring efficiency and trust in
                  every transaction.
                </p>
                <p>
                  From single spare part orders to complete turbine overhauls —
                  we handle complexity so you don’t have to.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12">
                {[
                  { label: "Years Active", value: "15+" },
                  { label: "Countries Served", value: "40+" },
                  { label: "Partners", value: "200+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-4xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Image Cards */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Globe,
                  title: "Europe & Asia Focus",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Truck,
                  title: "Full Logistics Chain",
                  color: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Users,
                  title: "Personal Project Manager",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: ShieldCheck,
                  title: "100% Compliance",
                  color: "from-orange-500 to-red-600",
                },
              ].map((item, i) => (
                <AnimatedSection key={i}>
                  <Card className="p-8 text-center hover:scale-105 transition-transform duration-300">
                    <div
                      className={`w-20 h-20 mx-auto mb-4 rounded-full bg-linear-to-br ${item.color} p-4`}>
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values / Promise */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-10">Our Promise</h2>
              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    icon: CheckCircle2,
                    title: "Clear Terms",
                    desc: "No hidden fees or surprises",
                  },
                  {
                    icon: Clock,
                    title: "On-Time Delivery",
                    desc: "We respect your project deadlines",
                  },
                  {
                    icon: Users,
                    title: "One Contact Person",
                    desc: "From quote to delivery",
                  },
                ].map((promise) => (
                  <div
                    key={promise.title}
                    className="flex flex-col items-center">
                    <promise.icon className="w-16 h-16 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {promise.title}
                    </h3>
                    <p className="text-muted-foreground">{promise.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
