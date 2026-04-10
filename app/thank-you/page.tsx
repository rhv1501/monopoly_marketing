import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | Monopoly Marketing Chennai",
  description:
    "Thank you for contacting Monopoly Marketing. Our team will reach you within 24 hours regarding your playground equipment enquiry.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? "919876543210";

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col items-center justify-center px-4 py-20">
      {/* Card */}
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 max-w-lg w-full text-center">
        {/* Checkmark */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">
          Thank You! 🎉
        </h1>
        <p className="text-gray-500 text-base mb-2">
          We have received your enquiry.
        </p>
        <p className="text-gray-700 font-semibold text-base mb-8">
          Our team will contact you within{" "}
          <span className="text-blue-700">24 hours</span>.
        </p>

        {/* Contact options */}
        <div className="flex justify-center mb-8">
          <a
            href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%20just%20filled%20your%20form%20and%20wanted%20to%20connect%20about%20playground%20equipment`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-6 py-3 w-full sm:w-auto"
            id="ty-whatsapp-btn"
            style={{
              background: "#25D366",
              boxShadow: "0 4px 14px rgba(37,211,102,0.35)",
            }}
          >
            <svg
              className="w-4 h-4"
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

        <Link
          href="/"
          className="text-sm text-blue-600 hover:underline font-medium"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Branding */}
      <p className="mt-8 text-blue-300 text-sm font-medium">
        Monopoly Marketing — Playground Equipment Supplier in Chennai
      </p>
    </main>
  );
}
