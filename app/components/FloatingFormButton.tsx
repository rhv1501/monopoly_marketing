export default function FloatingFormButton() {
  return (
    <a
      href="/#lead-form"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-20 h-20 bg-blue-600 text-white rounded-full shadow-[0_4px_20px_rgba(37,99,235,0.5)] hover:bg-blue-700 transition-all hover:scale-110 animate-bounce sm:animate-none group"
      aria-label="Request a Quote"
      id="floating-form-button"
    >
      {/* Pulse effect behind the button */}
      <span className="absolute w-full h-full rounded-full bg-blue-400 opacity-75 animate-ping -z-10"></span>

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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>

      {/* Tooltip on hover (desktop only) */}
      <span className="absolute right-16 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-lg">
        Get a Quote!
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </span>
    </a>
  );
}
