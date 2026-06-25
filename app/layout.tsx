import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingFormButton from "./components/FloatingFormButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.monopolymarketing.co.in"),
  title: {
    default:
      "Monopoly Marketing | Playground Equipment Supplier in Chennai & South India",
    template: "%s | Monopoly Marketing Chennai",
  },
  description:
    "Monopoly Marketing – Leading playground equipment supplier in Chennai. We supply outdoor playground equipment, indoor soft play, Montessori toys & kids furniture for schools, homes, apartments & commercial play zones across South India.",
  keywords: [
    "playground equipment supplier in Chennai",
    "school playground equipment South India",
    "kids play area for apartments Chennai",
    "home playground equipment Tamil Nadu",
    "gated community play area setup",
    "indoor play zone equipment supplier",
    "commercial soft play setup Chennai",
    "pay per hour play area setup India",
    "residential community playground equipment",
    "kids play equipment suppliers Chennai",
    "Montessori toys wholesale South India",
    "Montessori materials supplier in Chennai",
    "Montessori sensory materials Chennai",
    "Tamil tracing learning boards Chennai",
    "educational wooden toys Chennai",
    "preschool toys Chennai",
    "preschool furniture suppliers Chennai",
    "kids furniture manufacturers in Tamil Nadu",
    "preschool desks tables and chairs Chennai",
    "school storage units Chennai",
    "indoor play equipment for schools",
    "outdoor play equipment manufacturers South India",
    "play school setup equipment Chennai",
    "best play school toys manufacturers in Chennai",
    "preschool toy wholesalers in Vepery",
    "preschool toy wholesalers in Aminjikarai",
    "preschool kits in Chennai",
    "kids learning kits Chennai",
    "educational material suppliers Chennai",
    "toy shops Chennai",
    "soft play equipment supplier",
    "softplay area setup in Chennai",
    "softplay area setup in Tamil Nadu",
    "customized softplay area for kids",
    "school furniture wholesale South India",
    "playground equipment Chennai",
    "Montessori materials Chennai",
    "kids play area setup Chennai",
    "kids play area setup Tamil Nadu",
  ],
  authors: [{ name: "Monopoly Marketing" }],
  creator: "Monopoly Marketing",
  publisher: "Monopoly Marketing",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.monopolymarketing.co.in",
    siteName: "Monopoly Marketing",
    title:
      "Monopoly Marketing | #1 Playground Equipment Supplier in Chennai & South India",
    description:
      "Join a growing community of satisfied property owners. Premium playground equipment, Montessori toys, and play furniture supplier in Chennai with fast delivery across South India.",
    images: [
      {
        url: "/hero-playground.png",
        width: 1200,
        height: 630,
        alt: "Monopoly Marketing – Playground Equipment Supplier Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monopoly Marketing | Playground Equipment Supplier Chennai",
    description:
      "Premium playground & Montessori equipment for schools, homes & apartments. 25+ years experience.",
    images: ["/hero-playground.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.monopolymarketing.co.in",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  const shouldLoadDirectGa4 = Boolean(ga4Id && !gtmId);

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
        {/*
          GA4 direct snippet is loaded only when GTM is not configured.
          This prevents duplicate page_view/event firing when GA4 is also configured inside GTM.
        */}
        {shouldLoadDirectGa4 && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4Id}');`,
              }}
            />
          </>
        )}
        {/* Google Ads Tag (gtag.js) */}
        {adsId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${adsId}');`,
              }}
            />
          </>
        )}
        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "wpu7q33am7");
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* GTM noscript fallback */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
        <FloatingFormButton />
      </body>
    </html>
  );
}
