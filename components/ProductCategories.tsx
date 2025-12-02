/* eslint-disable @next/next/no-img-element */
"use client";
import { Card } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { categories } from "@/constant";

export default function ProductCategories() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Spare Parts for All Major Equipment
          </h2>
          <p className="text-xl text-muted-foreground">
            OEM & high-quality aftermarket — always available
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <AnimatedSection key={i}>
              <Card className="group relative overflow-hidden rounded-2xl h-96 cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Background Image or Gradient */}
                <div className="absolute inset-0">
                  {cat.img ? (
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="h-full w-full bg-linear-to-br from-primary/80 via-primary to-primary/60" />
                  )}
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition" />
                </div>

                {/* Text Overlay – Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">
                    {cat.title}
                  </h3>
                  <p className="text-lg opacity-90 drop-shadow">{cat.brands}</p>
                </div>

                {/* Optional subtle shine effect */}
                <div className="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
