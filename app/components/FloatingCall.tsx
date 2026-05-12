export default function FloatingCall() {
  const phone = process.env.NEXT_PUBLIC_PHONE ?? "+918043847565";
  const cleanPhone = phone.replace(/\s/g, "");

  return (
    <a
      href={`tel:${cleanPhone}`}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-20 h-20 bg-green-600 text-white rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.5)] hover:bg-green-700 transition-all hover:scale-110 animate-bounce sm:animate-none group"
      aria-label="Call us directly"
      id="floating-call-cta contact"
      data-track-event="phone_click"
      data-track-source="floating_cta"
    >
      {/* Pulse effect behind the button */}
      <span className="absolute w-full h-full rounded-full bg-green-400 opacity-75 animate-ping -z-10"></span>
      
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>

      {/* Tooltip on hover (desktop only) */}
      <span className="absolute right-16 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-lg">
        Call us now!
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </span>
    </a>
  );
}
