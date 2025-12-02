import AnimatedSection from "@/components/AnimatedSection";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <ServicesGrid />
      </AnimatedSection>
      <AnimatedSection>
        <ProductCategories />
      </AnimatedSection>
    </>
  );
}
