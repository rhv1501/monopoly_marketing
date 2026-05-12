const usps = [
  {
    icon: "🏆",
    title: "25+ Years of Experience",
    description:
      "Over two decades providing quality playground solutions for schools, homes, and gated communities across South India.",
  },
  {
    icon: "🎨",
    title: "Custom Solutions",
    description:
      "Tailored play area designs to match your space, budget, and age group requirements. We handle everything end-to-end.",
  },
  {
    icon: "💰",
    title: "Bulk Pricing",
    description:
      "Competitive wholesale pricing on playground equipment and play furniture for apartment complexes, schools, and bulk buyers.",
  },
  {
    icon: "🚚",
    title: "Fast Delivery",
    description:
      "Fast delivery across South India with quick turnaround. We supply outdoor and indoor play equipment across major districts.",
  },
  {
    icon: "✅",
    title: "Quality Assurance",
    description:
      "All products are built to the highest safety standards. Our materials are child-safe, UV-resistant, and built to last for years.",
  },
];

const seoCategories = [
  {
    title: "Materials & Toys",
    items: [
      {
        label: "Montessori materials supplier in Chennai",
        href: "#montessori-toys",
      },
      {
        label: "Practical life, sensorial, language and math materials",
        href: "#montessori-toys",
      },
      {
        label: "Educational wooden toys, puzzles and role play toys",
        href: "#products",
      },
      {
        label: "Preschool toys, learning kits and Tamil tracing boards",
        href: "#lead-form",
      },
    ],
  },
  {
    title: "Properties & Communities",
    items: [
      {
        label: "Apartment play area equipment in Chennai",
        href: "#products",
      },
      {
        label: "Gated community playground setup Tamil Nadu",
        href: "#lead-form",
      },
      {
        label: "Home playground equipment and garden play sets",
        href: "#products",
      },
      {
        label: "Commercial indoor play zone setup and design",
        href: "#indoor-play",
      },
    ],
  },
  {
    title: "Furniture & Setup",
    items: [
      {
        label: "Kids furniture manufacturers in Tamil Nadu",
        href: "#school-furniture",
      },
      {
        label: "Kids desks, tables, chairs and storage units",
        href: "#school-furniture",
      },
      {
        label: "Kids play area setup and customized soft play area",
        href: "#indoor-play",
      },
      {
        label: "Play area equipment dealers in Chennai and Tamil Nadu",
        href: "#products",
      },
    ],
  },
  {
    title: "Suppliers & Wholesale",
    items: [
      {
        label: "Best play school toys manufacturers in Chennai",
        href: "#reviews",
      },
      {
        label: "Preschool toy wholesalers in Vepery and Aminjikarai",
        href: "#lead-form",
      },
      {
        label: "Educational material suppliers and toy shops in Chennai",
        href: "#products",
      },
      {
        label: "Preschool kits in Chennai and Montessori manufacturing",
        href: "#faq",
      },
    ],
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-16 sm:py-20 bg-blue-950"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block bg-orange-500/20 border border-orange-400/30 text-orange-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-3">
            Why Choose Us
          </span>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl font-black text-white mb-4"
          >
            Why Clients Trust Monopoly Marketing
          </h2>
          <p className="text-blue-200 text-base sm:text-lg max-w-2xl mx-auto">
            The preferred kids&apos; play equipment supplier in Chennai for
            schools, homes, apartments, and commercial zones.
          </p>
          <p className="text-blue-300 text-sm sm:text-base max-w-3xl mx-auto mt-3">
            From Montessori materials and educational toys to kids furniture,
            residential play sets, and custom indoor play zone setup in Chennai
            and Tamil Nadu — we provide complete infrastructure under one roof.
          </p>
        </div>

        {/* USP Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {usps.map((usp) => (
            <div
              key={usp.title}
              className="glass rounded-2xl p-5 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4" role="img" aria-label={usp.title}>
                {usp.icon}
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{usp.title}</h3>
              <p className="text-blue-200 text-xs leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "25+", label: "Years Experience" },
            { value: "500+", label: "Happy Clients" },
            { value: "1000+", label: "Skus Available" },
            { value: "300+", label: "Projects Delivered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-black text-orange-400 mb-1">
                {stat.value}
              </p>
              <p className="text-blue-200 text-xs sm:text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* SEO content clusters */}
        <div className="mt-12 sm:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {seoCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-white/20 bg-white/5 p-5 sm:p-6"
            >
              <h3 className="text-white font-bold text-base sm:text-lg mb-3">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item.label}
                    className="text-blue-200 text-xs sm:text-sm leading-relaxed"
                  >
                    <a
                      href={item.href}
                      className="hover:text-orange-300 underline decoration-white/25 hover:decoration-orange-300 underline-offset-2 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="text-center text-blue-300 text-xs sm:text-sm mt-6 sm:mt-8 max-w-4xl mx-auto">
          Looking for a specific solution? Explore our{" "}
          <a
            href="#products"
            className="underline decoration-white/30 underline-offset-2 hover:text-orange-300 hover:decoration-orange-300 transition-colors"
          >
            complete product categories
          </a>{" "}
          and see{" "}
          <a
            href="#reviews"
            className="underline decoration-white/30 underline-offset-2 hover:text-orange-300 hover:decoration-orange-300 transition-colors"
          >
            verified customer feedback
          </a>{" "}
          before you{" "}
          <a
            href="#lead-form"
            className="underline decoration-white/30 underline-offset-2 hover:text-orange-300 hover:decoration-orange-300 transition-colors"
            id="why-us-cta"
          >
            request a custom quote
          </a>
          .
        </p>
      </div>
    </section>
  );
}
