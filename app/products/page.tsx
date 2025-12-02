/* eslint-disable @next/next/no-img-element */
// src/app/products/page.tsx
import AnimatedSection from "@/components/AnimatedSection";
import { categories } from "@/constant";

export const metadata = { title: "Products & Spare Parts" };

export default function ProductsPage() {
  return (
    <>
      <section className="relative py-32 bg-linear-to-br from-slate-900 via-blue-900 to-slate-950 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Products & Spare Parts
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
            OEM & high-quality aftermarket parts — always in stock or sourced
            within days
          </p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((cat, i) => (
              <AnimatedSection key={i}>
                <div className="group relative overflow-hidden rounded-3xl h-96 cursor-pointer shadow-xl">
                  {/* Image or linear */}
                  {cat.img ? (
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="h-full bg-linear-to-br from-primary/70 via-primary to-primary/50" />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                    <h3 className="text-4xl font-bold mb-3 drop-shadow-2xl">
                      {cat.title}
                    </h3>
                    <p className="text-xl opacity-90 drop-shadow-lg">
                      {cat.brands}
                    </p>
                  </div>

                  {/* Hover shine */}
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -rotate-45 translate-x-96 group-hover:translate-x-0" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
