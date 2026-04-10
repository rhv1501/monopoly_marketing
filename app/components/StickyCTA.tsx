"use client";

import { useState, useEffect } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [hideForInputFocus, setHideForInputFocus] = useState(false);
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? "919876543210";

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleFocusChange = () => {
      const active = document.activeElement;
      const isFormField =
        active instanceof HTMLInputElement ||
        active instanceof HTMLTextAreaElement ||
        active instanceof HTMLSelectElement;
      setHideForInputFocus(isFormField && window.innerWidth < 1024);
    };

    document.addEventListener("focusin", handleFocusChange);
    document.addEventListener("focusout", handleFocusChange);

    return () => {
      document.removeEventListener("focusin", handleFocusChange);
      document.removeEventListener("focusout", handleFocusChange);
    };
  }, []);

  if (!visible || hideForInputFocus) return null;

  return (
    <div
      className="fixed right-4 z-50 flex flex-col gap-3"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 16px)" }}
      role="complementary"
      aria-label="Quick WhatsApp contact button"
    >
      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20playground%20equipment%20for%20my%20school`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg text-white hover:scale-110 transition-all"
        style={{ background: "#25D366" }}
        aria-label="Chat on WhatsApp"
        id="sticky-whatsapp-btn"
      >
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.555 4.104 1.524 5.823L0 24l6.338-1.505A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.655-.49-5.188-1.346L3 22l1.368-4.723A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>
    </div>
  );
}
