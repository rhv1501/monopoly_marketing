"use client";

import { useState } from "react";

const BUSINESS_TYPES = [
  "School / Preschool",
  "Apartment / Gated Community",
  "Individual House (Home Use)",
  "Commercial Play Zone",
  "Daycare / Activity Center",
  "Institution / NGO",
  "Other",
];

type FormErrors = {
  name?: string;
  phone?: string;
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
      id="simple-lead-form-submit"
      className="btn-primary w-full text-lg py-4 disabled:opacity-60 disabled:cursor-not-allowed shadow-xl shadow-orange-500/20"
    >
      {pending ? (
        <span className="flex items-center justify-center gap-2">
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
        </span>
      ) : (
        <span className="flex items-center justify-center gap-2">
          Request a Free Quote
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
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </span>
      )}
    </button>
  );
}

export default function SimpleLeadForm() {
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
    const businessType = String(formData.get("businessType") ?? "").trim();
    const requirement = String(formData.get("requirement") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim(); // Honeypot

    const nextErrors: FormErrors = {};
    if (!name || name.length < 2) {
      nextErrors.name = "Please enter your full name (min. 2 characters).";
    }

    if (!phone) {
      nextErrors.phone = "Phone number is required.";
    } else if (!validatePhone(phone)) {
      nextErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
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

    // Pass empty string for email, but include businessType
    const payload = new URLSearchParams({
      name,
      phone,
      email: "",
      businessType,
      requirement,
      source: "website_simple_form",
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

    window.location.assign("/thank-you");
  }

  return (
    <section
      id="lead-form"
      className="py-12 bg-blue-50 border-b border-gray-200"
      aria-label="Request Quote Form"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Get Your Custom Quote within 24 Hours
            </h2>
            <p className="text-gray-500 mt-2">
              Fill out this quick form and our playground experts will contact you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="simple-name"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="simple-name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="e.g. Priya Ramesh"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2 transition-all`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-xs font-medium" aria-live="polite">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="simple-phone"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="simple-phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="e.g. 98765 43210"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-blue-500"
                  } focus:outline-none focus:ring-2 transition-all`}
                />
                {errors.phone && (
                  <p className="mt-1 text-red-500 text-xs font-medium" aria-live="polite">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business Type */}
              <div>
                <label
                  htmlFor="simple-businessType"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Type of Project
                </label>
                <select
                  id="simple-businessType"
                  name="businessType"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:outline-none focus:ring-2 transition-all bg-white"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select project type
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
                  htmlFor="simple-requirement"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  What are you looking for? (Optional)
                </label>
                <textarea
                  id="simple-requirement"
                  name="requirement"
                  rows={1}
                  placeholder="e.g. Indoor play zone setup"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-blue-500 focus:outline-none focus:ring-2 transition-all resize-none"
                />
              </div>
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
                className="text-red-500 text-sm font-medium text-center"
                aria-live="polite"
              >
                {submitError}
              </p>
            )}

            <div className="pt-2 max-w-md mx-auto">
              <SubmitButton pending={isSubmitting} />
              <p className="text-gray-400 text-xs text-center mt-4">
                🔒 Your details are secure and will never be shared.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
