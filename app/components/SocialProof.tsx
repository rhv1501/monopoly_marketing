export default function SocialProof() {
  const institutions = [
    "Primary Schools",
    "Play Schools",
    "Preschools",
    "Daycare Centers",
    "Activity Centers",
    "Institutions",
  ];

  return (
    <section
      className="bg-blue-950 py-6 overflow-hidden"
      aria-label="Trusted by institutions"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Label */}
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest whitespace-nowrap flex-shrink-0">
            Trusted Across South India by:
          </p>

          {/* Scrolling tags */}
          <div className="w-full sm:w-auto overflow-x-auto scroll-snap-x">
            <div className="flex flex-nowrap sm:flex-wrap gap-2 justify-start sm:justify-end pb-1 sm:pb-0">
              {institutions.map((inst) => (
                <span
                  key={inst}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/10 whitespace-nowrap"
                >
                  {inst}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
