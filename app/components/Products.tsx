import Image from "next/image";

const products = [
  {
    id: "outdoor-playground",
    title: "Outdoor Playground Equipment",
    description:
      "Robust, premium-quality outdoor playground equipment for schools, apartments, and gated communities. Multi-play stations, slides, swings, climbing frames & more — built for durability and safety.",
    image: "/outdoor-playground.png",
    alt: "Outdoor playground equipment for apartments and schools Chennai",
    tag: "Most Popular",
    tagColor: "bg-orange-500",
  },
  {
    id: "indoor-play",
    title: "Indoor Play Equipment",
    description:
      "Safe, colorful indoor soft play equipment for schools, homes, and commercial play zones. Ball pools, foam structures, climbing tunnels & sensory play zones designed for maximum engagement.",
    image: "/indoor-play.png",
    alt: "Indoor play equipment for homes and schools Chennai",
    tag: "Trending",
    tagColor: "bg-blue-600",
  },
  {
    id: "montessori-toys",
    title: "Montessori Toys & Materials",
    description:
      "Wholesale Montessori educational toys and materials for preschools across South India. Pink towers, alphabet boxes, bead frames, shape sorters & complete Montessori classroom sets.",
    image: "/montessori-toys.png",
    alt: "Montessori toys and materials wholesale South India Chennai",
    tag: "Educational",
    tagColor: "bg-emerald-600",
  },
  {
    id: "school-furniture",
    title: "Kids & Play Furniture",
    description:
      "Ergonomic, colorful kids furniture for schools, nurseries, and activity centers. Desks, chairs, storage units, and activity tables — available in premium quality at competitive pricing.",
    image: "/school-furniture.png",
    alt: "Kids and play furniture suppliers Chennai South India",
    tag: "Bulk Pricing",
    tagColor: "bg-purple-600",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="section-tag">Our Products</span>
          <h2
            id="products-heading"
            className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4"
          >
            Complete Play & Learning Solutions
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Trusted playground equipment supplier in Chennai offering end-to-end
            play area setup solutions for schools, homes, and commercial spaces.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <article
              key={product.id}
              id={product.id}
              className="bg-card-hover rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col scroll-mt-28"
              aria-label={product.title}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  quality={60}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) calc((100vw - 96px) / 2), min(calc((100vw - 160px) / 4), 296px)"
                />
                {/* Tag */}
                <span
                  className={`absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${product.tagColor}`}
                >
                  {product.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 line-clamp-5 sm:line-clamp-none">
                  {product.description}
                </p>
                <a
                  href="#lead-form"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-orange-500 transition-colors"
                  id={`enquire-${product.id}`}
                  data-track-event="contact_click"
                  data-track-source="products"
                >
                  Enquire Now
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
