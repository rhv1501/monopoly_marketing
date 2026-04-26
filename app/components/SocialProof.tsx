export default function SocialProof() {
  const segments = [
    "Schools & Preschools",
    "Gated Communities",
    "Apartment Complexes",
    "Individual Houses",
    "Indoor Play Zones",
    "Commercial Spaces",
    "Daycare Centers",
    "Institutions & NGOs",
  ];

  return (
    <section
      className="bg-blue-950 py-8 lg:py-6 overflow-hidden relative border-y border-white/5"
      aria-label="Trusted by properties and schools"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          {/* Label - Static positioning */}
          <p className="text-blue-200 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] whitespace-nowrap flex-shrink-0 opacity-80 lg:border-r lg:border-white/10 lg:pr-12">
            Trusted Across South India by:
          </p>

          {/* Marquee Container */}
          <div className="marquee-mask flex-1 relative min-w-0">
            <div className="testimonial-marquee-track flex gap-4 pr-4">
              {/* First set of items */}
              {segments.map((segment) => (
                <span
                  key={`marq-1-${segment}`}
                  className="text-[10px] sm:text-xs font-bold px-5 py-2 rounded-full bg-white/5 text-blue-50 border border-white/10 whitespace-nowrap hover:bg-white/10 transition-colors"
                >
                  {segment}
                </span>
              ))}
              {/* Duplicate set for seamless loop */}
              {segments.map((segment) => (
                <span
                  key={`marq-2-${segment}`}
                  className="text-[10px] sm:text-xs font-bold px-5 py-2 rounded-full bg-white/5 text-blue-50 border border-white/10 whitespace-nowrap hover:bg-white/10 transition-colors"
                >
                  {segment}
                </span>
              ))}
              {/* Triplicate just to be safe on very wide screens */}
              {segments.map((segment) => (
                <span
                  key={`marq-3-${segment}`}
                  className="text-[10px] sm:text-xs font-bold px-5 py-2 rounded-full bg-white/5 text-blue-50 border border-white/10 whitespace-nowrap hover:bg-white/10 transition-colors"
                >
                  {segment}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
