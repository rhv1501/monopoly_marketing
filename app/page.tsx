import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import SocialProof from "@/app/components/SocialProof";
import Products from "@/app/components/Products";
import WhyChooseUs from "@/app/components/WhyChooseUs";
import Reviews from "@/app/components/Reviews";
import LeadForm from "@/app/components/LeadForm";
import FAQ from "@/app/components/FAQ";
import FinalCTA from "@/app/components/FinalCTA";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Playground Equipment Supplier in Chennai | Monopoly Marketing",
  description:
    "Monopoly Marketing — playground equipment supplier in Chennai for schools and preschools. Montessori materials, preschool toys, kids furniture, soft play area setup, and school kits across Chennai and Tamil Nadu.",
  alternates: {
    canonical: "https://www.monopolymarketing.co.in",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Monopoly Marketing",
  description:
    "Leading playground equipment supplier in Chennai offering outdoor playground equipment, indoor play equipment, Montessori toys, and school furniture for schools and institutions across India.",
  url: "https://www.monopolymarketing.co.in",
  telephone: process.env.NEXT_PUBLIC_PHONE ?? "+919876543210",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "info@monopolymarketing.co.in",
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
  areaServed: {
    "@type": "Country",
    name: "India",
  },
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
    "softplay area setup",
    "customized softplay area for kids",
    "kids learning kits",
  ],
  foundingDate: "2000",
  slogan: "Premium Play Equipment for Schools Across India",
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

        {/* 2. Social Proof Strip */}
        <SocialProof />

        {/* 3. Products */}
        <Products />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Customer Reviews */}
        <Reviews />

        {/* 6. Lead Capture Form */}
        <LeadForm />

        {/* 7. FAQ */}
        <FAQ />

        {/* 8. Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
