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
- The form server action redirects to `/thank-you` only on successful submission.

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
