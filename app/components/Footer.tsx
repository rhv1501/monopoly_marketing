export default function Footer() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? "919876543210";
  const email = process.env.NEXT_PUBLIC_EMAIL ?? "monopolymarketingchennai@gmail.com";
  const phone = process.env.NEXT_PUBLIC_PHONE ?? "+91 80438 47565";
  const year = new Date().getFullYear();
  const productLinks = [
    { href: "#outdoor-playground", label: "Outdoor Playground Equipment" },
    { href: "#indoor-play", label: "Indoor Play Equipment" },
    { href: "#montessori-toys", label: "Montessori Toys & Materials" },
    { href: "#school-furniture", label: "School Furniture" },
    { href: "#indoor-play", label: "Soft Play Equipment" },
    { href: "#products", label: "Kids Play Area Setup" },
  ];

  const quickLinks = [
    { href: "#why-us", label: "Why Choose Us" },
    { href: "#reviews", label: "Customer Reviews" },
    { href: "#faq", label: "FAQ" },
    { href: "#lead-form", label: "Get Free Quote" },
    {
      href: "#montessori-toys",
      label: "Montessori Materials Supplier in Chennai",
    },
    {
      href: "#school-furniture",
      label: "Kids Furniture in Tamil Nadu",
    },
    { href: `https://wa.me/${whatsapp}`, label: "WhatsApp Us" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <span className="text-white font-black text-sm">M</span>
              </div>
              <div>
                <p className="text-white font-black text-sm">
                  Monopoly Marketing
                </p>
                <p className="text-orange-400 text-[10px] font-semibold uppercase tracking-wide">
                  Playground Equipment Supplier Chennai
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-5">
              Leading playground equipment supplier in Chennai with 25+ years of
              experience. We supply outdoor playground equipment, indoor soft
              play, Montessori toys &amp; school furniture to schools and
              institutions across South India (TN, KL &amp; AP).
            </p>
            <address className="not-italic space-y-2 text-sm">
              <p>📍 Chennai, Tamil Nadu, India</p>
              <p>📞 {phone}</p>
              <p>
                ✉️{" "}
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors"
                >
                  {email}
                </a>
              </p>
              <p>
                💬{" "}
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  id="contact"
                >
                  WhatsApp Us
                </a>
              </p>
            </address>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Our Products
            </h3>
            <ul className="space-y-2 text-sm">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={
                      link.href.startsWith("https://wa.me")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      link.href.startsWith("https://wa.me")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Service areas */}
              <div className="mt-6">
                <h3 className="text-white font-semibold text-sm mb-3">
                  Service Areas
                </h3>
                <p className="text-xs leading-relaxed">
                  Chennai • Coimbatore • Madurai • Trichy • Tirupati • Nellore •
                  Kerala • Tamil Nadu • Andhra Pradesh
                </p>
              </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-center sm:text-left">
          <p className="leading-relaxed">
            &copy; {year} Monopoly Marketing. All rights reserved.
          </p>
          <p className="leading-relaxed">
            Playground Equipment Supplier in Chennai |{" "}
            <a
              href="https://www.monopolymarketing.co.in"
              className="hover:text-white transition-colors"
            >
              monopolymarketing.co.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
