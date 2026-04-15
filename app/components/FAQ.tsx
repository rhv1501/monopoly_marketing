const faqs = [
  {
    question:
      "What is the cost of playground equipment for schools in Chennai?",
    answer:
      "The cost of playground equipment varies depending on the type, size, and complexity of the installation. At Monopoly Marketing, we offer competitive pricing for schools, preschools, and institutions. A basic play station can start from ₹50,000, while a full outdoor multi-play setup can range from ₹2L to ₹15L. Contact us for a free custom quote tailored to your budget and requirements.",
    links: [
      {
        href: "#products",
        label: "View playground equipment categories",
      },
      {
        href: "#lead-form",
        label: "Request a custom quote",
      },
    ],
  },
  {
    question: "Do you provide installation of playground equipment?",
    answer:
      "Yes! We provide professional installation services for all types of playground and play school equipment. Our trained installation team operates across Chennai, Tamil Nadu, and major cities in South India. Installation is handled end-to-end — from site preparation to assembly and safety checks.",
    links: [
      {
        href: "#indoor-play",
        label: "Explore indoor play setup options",
      },
      {
        href: "#lead-form",
        label: "Discuss site requirements",
      },
    ],
  },
  {
    question:
      "Do you provide delivery and setup across South India?",
    answer:
      "Absolutely. While we are headquartered in Chennai, Monopoly Marketing specializes in supplying and installing playground equipment, Montessori toys, and school furniture across South India — including Tamil Nadu, Andhra Pradesh (Tirupati, Nellore), and Kerala.",
    links: [
      {
        href: "#school-furniture",
        label: "See school furniture solutions",
      },
      {
        href: "#montessori-toys",
        label: "Browse Montessori materials",
      },
    ],
  },
  {
    question: "Are your materials safe for children?",
    answer:
      "Yes, child safety is our top priority. All our playground equipment and Montessori materials meet Indian Safety Standards (IS) and are made from non-toxic, UV-resistant, splinter-free, and child-safe materials. We use HDPE, FRP, and powder-coated galvanized steel that are built to withstand heavy use and outdoor conditions.",
    links: [
      {
        href: "#reviews",
        label: "Read safety-focused customer feedback",
      },
      {
        href: "#products",
        label: "Compare safe material options",
      },
    ],
  },
  {
    question:
      "Do you offer bulk/wholesale pricing for schools and institutions?",
    answer:
      "Yes, we offer attractive bulk pricing and wholesale rates for schools, school chains, preschool franchises, and institutions looking to set up multiple campuses. The more you order, the better the pricing. Reach out to our team to get a customized bulk quotation.",
    links: [
      {
        href: "#products",
        label: "Review bulk-ready product ranges",
      },
      {
        href: "#lead-form",
        label: "Get wholesale pricing details",
      },
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-16 sm:py-20 bg-gray-50"
      aria-labelledby="faq-heading"
    >
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="section-tag">FAQ</span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4"
          >
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Common questions about our playground equipment and school supplies.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <details key={idx} className="faq-item">
              <summary>{faq.question}</summary>
              <div className="faq-answer">
                <p>{faq.answer}</p>
                <p className="mt-3 text-sm text-gray-600">
                  {faq.links.map((link, linkIdx) => (
                    <span key={link.label}>
                      {linkIdx > 0 ? " | " : ""}
                      <a
                        href={link.href}
                        className="font-medium text-blue-700 hover:text-orange-600 transition-colors"
                      >
                        {link.label}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm mb-4">
            Have more questions? We&apos;re happy to help.
          </p>
          <a
            href="#lead-form"
            className="btn-blue text-sm px-8 py-3 w-full sm:w-auto"
            id="faq-contact-cta"
            data-track-event="contact_click"
            data-track-source="faq"
          >
            Ask Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
