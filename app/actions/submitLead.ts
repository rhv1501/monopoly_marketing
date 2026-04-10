"use server";

import { redirect } from "next/navigation";

export type LeadFormState = {
  errors?: {
    name?: string[];
    phone?: string[];
    email?: string[];
    businessType?: string[];
    requirement?: string[];
  };
  message?: string;
} | null;

function validatePhone(phone: string): boolean {
  // Accept 10-digit Indian numbers, with or without country code
  return /^(\+91|91)?[6-9]\d{9}$/.test(phone.replace(/\s|-/g, ""));
}

export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const businessType = (formData.get("businessType") as string)?.trim();
  const requirement = (formData.get("requirement") as string)?.trim();

  const errors: NonNullable<LeadFormState>["errors"] = {};

  if (!name || name.length < 2) {
    errors.name = ["Please enter your full name (min. 2 characters)."];
  }

  if (!phone) {
    errors.phone = ["Phone number is required."];
  } else if (!validatePhone(phone)) {
    errors.phone = ["Please enter a valid 10-digit Indian mobile number."];
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["Please enter a valid email address."];
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  // ─── TODO: Add your storage / email integration here ─────────────────────
  // Examples:
  //   await db.leads.create({ name, phone, email, businessType, requirement });
  //   await sendEmail({ to: 'info@monopolymarketing.co.in', subject: `New lead from ${name}`, ... });
  // ─────────────────────────────────────────────────────────────────────────

  console.log("[Lead] New submission:", {
    name,
    phone,
    email,
    businessType,
    requirement,
    timestamp: new Date().toISOString(),
  });

  redirect("/thank-you");
}
