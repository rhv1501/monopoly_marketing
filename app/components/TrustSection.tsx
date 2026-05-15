import Image from "next/image";

export default function TrustSection() {
  return (
    <section
      className="py-12 sm:py-16 bg-white border-b border-gray-100"
      aria-label="Trust and reliability"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-blue-950 mb-1">
              25+
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Years in Business
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-blue-950 mb-1">
              500+
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Installations
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-blue-950 mb-1">
              250+
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Schools & Apartments
            </p>
          </div>
          <div className="text-center">
            <p className="text-3xl sm:text-4xl font-black text-blue-950 mb-1">
              100%
            </p>
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              Quality Assured
            </p>
          </div>
        </div>

        {/* Visual Proof / Gallery */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Trusted by South India&apos;s Leading Properties
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            We deliver premium, safe, and engaging play environments for every
            requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group shadow-lg">
            <Image
              src="/outdoor-playground.png"
              alt="Outdoor playground installation for a school"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-950/40 to-transparent opacity-90" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-white font-bold text-lg">
                  Outdoor Playgrounds
                </p>
                <p className="text-blue-200 text-sm">Schools & Parks</p>
              </div>
              <a
                href="#lead-form"
                className="bg-white text-blue-950 text-xs font-bold px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all shadow-sm"
                id="trust-card-quote-1"
              >
                Get Quote
              </a>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group shadow-lg">
            <Image
              src="/indoor-play.png"
              alt="Indoor soft play zone setup"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-950/40 to-transparent opacity-90" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-white font-bold text-lg">Soft Play Zones</p>
                <p className="text-blue-200 text-sm">Commercial & Daycare</p>
              </div>
              <a
                href="#lead-form"
                className="bg-white text-blue-950 text-xs font-bold px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all shadow-sm"
                id="trust-card-quote-2"
              >
                Get Quote
              </a>
            </div>
          </div>

          <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden group shadow-lg">
            <Image
              src="/hero-playground.png"
              alt="Premium playground setup for gated community"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-950/90 via-blue-950/40 to-transparent opacity-90" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-white font-bold text-lg">Community Parks</p>
                <p className="text-blue-200 text-sm">Apartments & Villas</p>
              </div>
              <a
                href="#lead-form"
                className="bg-white text-blue-950 text-xs font-bold px-4 py-2 rounded-lg hover:bg-orange-500 hover:text-white transition-all shadow-sm"
                id="trust-card-quote-3"
              >
                Get Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
