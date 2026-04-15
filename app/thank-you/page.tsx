import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import ThankYouCleanup from "./ThankYouCleanup";

type ThankYouPageProps = {
  // searchParams removed as lead ID is now cookie-managed
};

const LEAD_GATE_COOKIE = "mm_lead_gate";

export const metadata: Metadata = {
  title: "Thank You | Monopoly Marketing Chennai",
  description: "Thank you for contacting Monopoly Marketing. Our team will reach out within 24 hours regarding your enquiry.",
  robots: { index: false, follow: false },
};

export default async function ThankYouPage({
  searchParams,
}: ThankYouPageProps) {
  const cookieStore = await cookies();
  const leadToken = cookieStore.get(LEAD_GATE_COOKIE)?.value;

  // Once the cookie is consumed by the client, this will trigger a redirect on refresh
  if (!leadToken) {
    redirect("/");
  }

  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP ?? "918043847565";
  const phone = process.env.NEXT_PUBLIC_PHONE ?? "+918043847565";

  return (
    <main className="min-h-[100dvh] bg-zinc-50 flex flex-col items-center justify-center px-4 py-12 overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      <ThankYouCleanup leadToken={leadToken} />
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/40 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/60 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Main Success Card */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.06)] border border-zinc-100 overflow-hidden">
          {/* Top Progress / Accent Bar */}
          <div className="h-2 bg-linear-to-r from-blue-600 via-blue-500 to-blue-400" />
          
          <div className="p-8 sm:p-14 text-center">
            {/* Success Icon with Pulse Effect */}
            <div className="relative mb-8 flex justify-center">
              <div className="absolute inset-0 bg-green-100/50 rounded-full scale-150 blur-xl animate-pulse" />
              <div className="relative w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-[0_12px_24px_-8px_rgba(34,197,94,0.4)]">
                <svg 
                  className="w-12 h-12 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={3}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-zinc-900 tracking-tight mb-4">
              Enquiry Received! 🎉
            </h1>
            <p className="text-zinc-500 text-lg sm:text-xl max-w-md mx-auto leading-relaxed mb-10">
              Thank you for choosing <span className="text-blue-600 font-black">Monopoly Marketing</span>. Our team is already processing your request.
            </p>

            {/* Next Steps Section */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
              <div className="p-6 rounded-3xl bg-zinc-50/50 border border-zinc-100 transition-all hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-zinc-200/40 group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">📞</div>
                <h3 className="font-bold text-zinc-900 mb-1">Expert Callback</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">A playground consultant will call you within 24 hours.</p>
              </div>
              <div className="p-6 rounded-3xl bg-zinc-50/50 border border-zinc-100 transition-all hover:border-blue-200 hover:bg-white hover:shadow-lg hover:shadow-zinc-200/40 group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">📐</div>
                <h3 className="font-bold text-zinc-900 mb-1">Layout Design</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">We will prepare custom 2D/3D layout suggestions for you.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 max-w-md mx-auto">
              <a
                href={`https://wa.me/${whatsapp}?text=Hi%2C%20I%20just%20filled%20your%20form%20for%20playground%20equipment.%20I%27d%20like%20to%20connect%20now.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-bold py-5 rounded-2xl shadow-[0_20px_40px_-12px_rgba(37,211,102,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(37,211,102,0.4)] active:scale-[0.98]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.555 4.104 1.524 5.823L0 24l6.338-1.505A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.655-.49-5.188-1.346L3 22l1.368-4.723A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                Connect on WhatsApp
              </a>
              <Link
                href="/"
                className="inline-block w-full py-4 text-zinc-400 font-bold hover:text-blue-600 transition-colors uppercase tracking-widest text-[10px]"
              >
                ← Back to Homepage
              </Link>
            </div>
          </div>
        </div>

        {/* Support Footer */}
        <div className="mt-12 text-center">
          <p className="text-zinc-400 text-sm mb-4">
            Need immediate assistance? Call us directly at <br className="sm:hidden" />
            <a href={`tel:${phone}`} className="text-zinc-900 font-black hover:text-blue-600 transition-colors">{phone}</a>
          </p>
          <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 opacity-30 select-none grayscale">
             {/* Simple text logos for branding consistency */}
             <span className="text-[10px] font-black tracking-[4px] uppercase">Schools</span>
             <span className="text-[10px] font-black tracking-[4px] uppercase">Parks</span>
             <span className="text-[10px] font-black tracking-[4px] uppercase">Institutions</span>
          </div>
        </div>
      </div>
    </main>
  );
}
