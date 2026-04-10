"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const BUSINESS_TYPES = [
  "School",
  "Preschool / Play School",
  "Daycare Center",
  "Activity Center",
  "Montessori School",
  "Institution / NGO",
  "Other",
];

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
};

const LEAD_GATE_COOKIE = "mm_lead_gate";
const LEAD_GATE_MAX_AGE_SECONDS = 10 * 60;

function validatePhone(phone: string): boolean {
  return /^(\+91|91)?[6-9]\d{9}$/.test(phone.replace(/\s|-/g, ""));
}

function createLeadToken(): string {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <button
      type="submit"
      disabled={pending}
      id="lead-form-submit"
      className="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <svg
            className="animate-spin w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Submitting...
        </>
      ) : (
        <>
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
        </>
      )}
    </button>
  );
}

export default function LeadForm() {
  const router = useRouter();
  const appsScriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const businessType = String(formData.get("businessType") ?? "").trim();
    const requirement = String(formData.get("requirement") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    const nextErrors: FormErrors = {};
    if (!name || name.length < 2) {
      nextErrors.name = "Please enter your full name (min. 2 characters).";
    }

    if (!phone) {
      nextErrors.phone = "Phone number is required.";
    } else if (!validatePhone(phone)) {
      nextErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (website) {
      // Honeypot anti-spam field: bots that fill this are silently ignored.
      return;
    }

    if (!appsScriptUrl) {
      setSubmitError(
        "Form integration is not configured yet. Please contact us on WhatsApp.",
      );
      return;
    }

    const payload = new URLSearchParams({
      name,
      phone,
      email,
      businessType,
      requirement,
      source: "website",
      pageUrl: window.location.href,
    }).toString();

    setIsSubmitting(true);

    try {
      const response = await fetch(appsScriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("Apps Script request failed");
      }
      const data = (await response.json()) as { ok?: boolean };
      if (!data?.ok) {
        throw new Error("Apps Script did not confirm success");
      }
    } catch {
      setIsSubmitting(false);
      setSubmitError(
        "Could not submit right now. Please try again or message us on WhatsApp.",
      );
      return;
    }

    form.reset();

    const leadToken = createLeadToken();
    const isSecure = window.location.protocol === "https:";
    document.cookie = `${LEAD_GATE_COOKIE}=${encodeURIComponent(leadToken)}; Max-Age=${LEAD_GATE_MAX_AGE_SECONDS}; Path=/; SameSite=Lax${isSecure ? "; Secure" : ""}`;

    router.push(`/thank-you?lead=${encodeURIComponent(leadToken)}`);
  }

  return (
    <section
      id="lead-form"
      className="py-16 sm:py-20 bg-white"
      aria-labelledby="form-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-start lg:items-center">
          {/* Left info panel */}
          <div className="order-2 lg:order-1">
            <span className="section-tag">Get In Touch</span>
            <h2
              id="form-heading"
              className="text-3xl sm:text-4xl font-black text-gray-900 mt-2 mb-4"
            >
              Request a Free Quote for Your School
            </h2>
            <p className="text-gray-500 text-base sm:text-lg mb-6 sm:mb-8">
              Whether you need outdoor playground equipment for schools in
              Chennai or a full play school setup — our team will create a
              custom proposal within 24 hours.
            </p>

            <ul className="space-y-4">
              {[
                {
                  icon: "🎯",
                  title: "Free Site Assessment",
                  desc: "We visit your premises and suggest the best layout.",
                },
                {
                  icon: "💰",
                  title: "Best Price Guarantee",
                  desc: "Direct manufacturer rates with no middlemen.",
                },
                {
                  icon: "🔧",
                  title: "Installation Included",
                  desc: "Professional installation team across Tamil Nadu.",
                },
                {
                  icon: "📋",
                  title: "After-Sales Support",
                  desc: "Dedicated support & warranty on all products.",
                },
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    className="text-2xl shrink-0"
                    role="img"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {item.title}
                    </p>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right form */}
          <div className="order-1 lg:order-2 bg-blue-950 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl">
            <h3 className="text-white font-bold text-xl mb-6">
              Fill in your details — we&apos;ll call you back!
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-blue-200 text-sm font-medium mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="e.g. Priya Ramesh"
                  className={`form-input ${errors.name ? "error" : ""}`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-400 text-xs" aria-live="polite">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-blue-200 text-sm font-medium mb-1.5"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="e.g. 98765 43210"
                  className={`form-input ${errors.phone ? "error" : ""}`}
                />
                {errors.phone && (
                  <p className="mt-1 text-red-400 text-xs" aria-live="polite">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-blue-200 text-sm font-medium mb-1.5"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="e.g. principal@myschool.com"
                  className={`form-input ${errors.email ? "error" : ""}`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-400 text-xs" aria-live="polite">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Business Type */}
              <div>
                <label
                  htmlFor="businessType"
                  className="block text-blue-200 text-sm font-medium mb-1.5"
                >
                  Type of Institution
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  className="form-input"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your institution type
                  </option>
                  {BUSINESS_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Requirement */}
              <div>
                <label
                  htmlFor="requirement"
                  className="block text-blue-200 text-sm font-medium mb-1.5"
                >
                  Your Requirement
                </label>
                <textarea
                  id="requirement"
                  name="requirement"
                  rows={3}
                  placeholder="e.g. Outdoor playground setup for 200 students, budget ₹5L"
                  className="form-input resize-none"
                />
              </div>

              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {submitError && (
                <p
                  className="text-red-300 text-xs text-center"
                  aria-live="polite"
                >
                  {submitError}
                </p>
              )}

              <SubmitButton pending={isSubmitting} />

              <p className="text-blue-300 text-xs text-center">
                🔒 Your details are secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
