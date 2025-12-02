import { Card } from "@/components/ui/card";
import { Truck, Wrench, Globe, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Worldwide Delivery",
    desc: "Fast shipping to any country",
  },
  {
    icon: Truck,
    title: "Turnkey Procurement",
    desc: "We source, deliver, and install",
  },
  {
    icon: Wrench,
    title: "OEM & Aftermarket",
    desc: "Original and high-quality alternatives",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    desc: "All parts tested and certified",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <Card
              key={i}
              className="p-8 text-center hover:shadow-xl transition">
              <f.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
