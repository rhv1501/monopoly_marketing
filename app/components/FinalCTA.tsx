export default function FinalCTA() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? "919361944553";

  return (
    <section
      className="bg-cta-gradient py-16 sm:py-20"
      aria-label="Final call to action"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="mb-6">
          <span className="inline-block bg-white/15 border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Limited Time Offer
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
          Build a Safe &amp; Fun Play Area for Your Premises Today
        </h2>
        <p className="text-blue-100 text-base sm:text-lg mb-3 max-w-2xl mx-auto">
          Join a growing community of satisfied property owners across South
          India who trust Monopoly Marketing for premium kids&apos; play
          equipment and Montessori supplies.
        </p>
        <p className="text-orange-300 font-semibold text-xs sm:text-sm mb-8 sm:mb-10">
          ⚡ Limited slots for installation this month — Act now!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="#lead-form"
            className="btn-primary text-base px-8 py-4 w-full sm:w-auto"
            id="final-quote-cta"
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
            Get Free Consultation
          </a>
          <a
            href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%20need%20playground%20equipment%20for%20my%20premises`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base px-8 py-4 w-full sm:w-auto"
            id="contact"
            style={{ borderColor: "#25D366", color: "#fff" }}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.555 4.104 1.524 5.823L0 24l6.338-1.505A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.655-.49-5.188-1.346L3 22l1.368-4.723A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
