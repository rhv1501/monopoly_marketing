import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import TrustSection from "@/app/components/TrustSection";
import SimpleLeadForm from "@/app/components/SimpleLeadForm";
import ProductShowcase from "@/app/components/ProductShowcase";
import SocialProof from "@/app/components/SocialProof";
import Reviews from "@/app/components/Reviews";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import FAQ from "@/app/components/FAQ";
import FinalCTA from "@/app/components/FinalCTA";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Playground Equipment Supplier in Chennai | Monopoly Marketing",
  description:
    "Monopoly Marketing — playground equipment supplier in Chennai for schools, homes, and apartments. Montessori materials, soft play area setup, and kids furniture across South India.",
  alternates: {
    canonical: "https://www.monopolymarketing.co.in",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Monopoly Marketing",
  description:
    "Leading playground equipment supplier in Chennai offering outdoor playground equipment, indoor play equipment, Montessori toys, and play furniture for schools, homes, and apartments across South India.",
  url: "https://www.monopolymarketing.co.in",
  telephone: process.env.NEXT_PUBLIC_PHONE ?? "+919876543210",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "monopolymarketingchennai@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.0827",
    longitude: "80.2707",
  },
  areaServed: [
    { "@type": "State", name: "Tamil Nadu" },
    { "@type": "State", name: "Andhra Pradesh" },
    { "@type": "State", name: "Kerala" },
  ],
  knowsAbout: [
    "playground equipment",
    "outdoor playground equipment",
    "indoor play equipment",
    "Montessori toys",
    "Montessori materials",
    "Montessori sensory materials",
    "educational wooden toys",
    "preschool toys",
    "role play toys",
    "Tamil tracing learning boards",
    "school furniture",
    "preschool furniture",
    "kids furniture",
    "school storage units",
    "preschool kits",
    "soft play equipment",
    "softplay area setup in Chennai",
    "customized softplay area for kids",
    "kids learning kits",
    "apartment play area equipment",
    "home playground setup",
    "commercial play zone setup",
  ],
  foundingDate: "2000",
  slogan: "Premium Play Equipment for Schools, Homes & Apartments Across South India",
  priceRange: "₹₹",
};

export default function HomePage() {
  return (
    <>
      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
        }}
      />

      <Navbar />

      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Trust Section (NEW) */}
        <TrustSection />

        {/* 3. Simple Lead Capture Form (NEW) */}
        <SimpleLeadForm />

        {/* 4. Social Proof Strip */}
        <SocialProof />

        {/* 5. Product Catalog */}
        <ProductShowcase />

        {/* 6. Customer Reviews */}
        <Reviews />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. FAQ */}
        <FAQ />

        {/* 9. Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
