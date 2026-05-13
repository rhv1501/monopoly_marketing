import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { href: "#products", label: "Products" },
    { href: "#why-us", label: "Why Us" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group min-w-0"
          aria-label="Monopoly Marketing Home"
        >
          <div className="w-9 h-9 rounded-lg bg-hero-gradient flex items-center justify-center shrink-0 shadow">
            <span className="text-white font-black text-sm">M</span>
          </div>
          <div className="leading-tight min-w-0">
            <span className="block font-black text-sm sm:text-base text-blue-900 tracking-tight truncate">
              Monopoly Marketing
            </span>
            <span className="hidden sm:block text-[10px] font-medium text-orange-500 tracking-wide uppercase truncate">
              Play Smarter. Grow Better.
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          {/* Mobile quick action */}
          <a
            href="#lead-form"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white shadow-sm"
            aria-label="Go to contact form"
            id="nav-cta-mobile"
          >
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-16 9h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
          </a>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#lead-form"
              className="btn-primary text-sm px-5 py-2.5"
              aria-label="Contact us"
              id="nav-cta"
            >
              Contact Us
            </a>
          </div>

          {/* Server-rendered mobile menu */}
          <details className="md:hidden relative group">
            <summary
              className="list-none w-10 h-10 rounded-full border border-gray-200 text-gray-700 bg-white flex items-center justify-center cursor-pointer"
              aria-label="Open menu"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>
            <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg p-2">
              <ul className="list-none m-0 p-0">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
