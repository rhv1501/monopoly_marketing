This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Conversion Tracking Setup

This project now uses a **clean GTM-first tracking setup**.

- `NEXT_PUBLIC_GTM_ID`: Primary tracking method.
- `NEXT_PUBLIC_GA4_ID`: Optional fallback only when GTM is not configured.
- Google Ads conversion events are expected to be configured in GTM, not in component code.

### Recommended Conversion Events

1. `generate_lead`

- Trigger on page path equals `/thank-you`.
- The lead form redirects to `/thank-you` only after Apps Script returns a confirmed success response (`{ "ok": true }`).

2. `whatsapp_click`

- Trigger on `Click URL contains wa.me` or by button IDs:
- `hero-whatsapp-cta`, `final-whatsapp-cta`, `ty-whatsapp-btn`, `sticky-whatsapp-btn`

3. `contact_click`

- Trigger on `Click URL contains #lead-form` or by CTA IDs:
- `nav-contact-cta`, `nav-contact-cta-mobile`, `hero-quote-cta`, `final-quote-cta`, `faq-contact-cta`
- Product enquiry CTAs include `id` values prefixed with `enquire-` (for example `enquire-outdoor-playground`) and use `data-track-event="contact_click"`.

### GTM Notes

- Prefer GTM as the single source of truth for GA4 and Google Ads conversions.
- Avoid configuring GA4 both directly and via GTM in production to prevent duplicate events.

## Google Sheets Lead Capture (Apps Script)

Lead form submissions now post directly from the frontend to a Google Apps Script Web App URL.

### 1. Add Environment Variable

In `.env.local`:

```bash
NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXXXXXXXXXX/exec
```

### 2. Create Apps Script Bound to Google Sheets

Use this sample script in Google Apps Script:

```javascript
function doPost(e) {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("Leads");
  const tz =
    SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone() ||
    Session.getScriptTimeZone() ||
    "Asia/Kolkata";
  const now = new Date();

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Submitted At",
      "Name",
      "Phone",
      "Email",
      "Business Type",
      "Requirement",
      "Source",
      "Page URL",
    ]);
  }

  const data = e.parameter || {};

  const row = [
    now,
    data.name || "",
    data.phone || "",
    data.email || "",
    data.businessType || "",
    data.requirement || "",
    data.source || "website",
    data.pageUrl || "",
  ];

  sheet.appendRow(row);

  // Column A stays a real datetime value, displayed in your sheet timezone.
  const rowNumber = sheet.getLastRow();
  sheet.getRange(rowNumber, 1).setNumberFormat("yyyy-mm-dd hh:mm:ss");
  // Optional human-readable local timestamp in script logs:
  Logger.log(
    "Lead captured at: " + Utilities.formatDate(now, tz, "yyyy-MM-dd HH:mm:ss"),
  );

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true }),
  ).setMimeType(ContentService.MimeType.JSON);
}
```

### 3. Deploy Web App

1. `Deploy` -> `New deployment`
2. Type: `Web app`
3. Execute as: `Me`
4. Who has access: `Anyone`
5. Copy the `/exec` URL into `NEXT_PUBLIC_APPS_SCRIPT_URL`

### 4. Payload Sent by Frontend

The form posts `application/x-www-form-urlencoded` fields:

- `name`
- `phone`
- `email`
- `businessType`
- `requirement`
- `source`
- `pageUrl`

Timestamp is generated inside Apps Script when the row is written, so it always uses server-side time.

### Notes

- Successful submissions redirect users to `/thank-you`, which continues to drive your `generate_lead` conversion tracking.
- If the Apps Script request cannot be verified as successful, the user stays on the form and sees an error state.
- `/thank-you` is protected by a short-lived lead token gate (cookie + query token) and redirects to `/` when opened directly without a valid successful submission.
