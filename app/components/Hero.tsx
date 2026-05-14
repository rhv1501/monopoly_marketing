import Image from "next/image";

export default function Hero() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? "919361944553";

  return (
    <section
      className="relative min-h-[86vh] md:min-h-[90vh] flex items-center bg-hero-gradient overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-playground.png"
          alt="Children playing on premium school playground equipment"
          fill
          priority
          fetchPriority="high"
          quality={60}
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-blue-800/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-14 sm:pb-18 lg:py-28 w-full flex flex-col items-start text-left">
        <div className="max-w-4xl">
          {/* H1 */}
          <h1 className="animate-fade-in-up text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-8">
            High Quality Playground Equipment Supplier for{" "}
            <span className="text-orange-400">
              Schools, Commercial Zones, and Gated Communities
            </span>
          </h1>

          {/* Trust signal badges as bullets */}
          <div className="animate-fade-in-up-delay-1 flex flex-wrap justify-start gap-3 sm:gap-4 mb-10">
            {[
              { icon: "🏆", text: "25+ Years Experience" },
              { icon: "🔧", text: "Installation Support" },
              { icon: "🎨", text: "Custom Designs" },
              { icon: "📍", text: "Chennai-Based Supplier" },
            ].map((badge) => (
              <div
                key={badge.text}
                className="glass flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm sm:text-base font-semibold"
              >
                <span role="img" aria-hidden="true" className="text-lg">
                  {badge.icon}
                </span>
                {badge.text}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row justify-start gap-4 sm:gap-5 mb-10 sm:mb-12">
            <a
              href="#lead-form"
              className="btn-primary text-lg px-10 py-4 w-full sm:w-auto shadow-xl shadow-orange-500/20"
              id="hero-quote-cta"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Get Free Quote
            </a>
            <a
              href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%20need%20playground%20equipment%20for%20my%20premises`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-10 py-4 rounded-full flex items-center justify-center gap-2 transition-all w-full sm:w-auto shadow-xl shadow-green-500/20"
              id="contact"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              WhatsApp Now
            </a>
          </div>
        </div>

        {/* Urgency strip */}
        <div className="mt-8 sm:mt-10 animate-fade-in">
          <p className="inline-flex items-start sm:items-center gap-2 text-orange-300 text-xs sm:text-sm font-semibold leading-relaxed">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            ⚡ Fast Installation anywhere in Tamil Nadu & South India
          </p>
        </div>
      </div>
    </section>
  );
}
