"use client";

import { useEffect } from "react";

const LEAD_GATE_COOKIE = "mm_lead_gate";

interface ThankYouCleanupProps {
  leadToken: string;
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function ThankYouCleanup({ leadToken }: ThankYouCleanupProps) {
  useEffect(() => {
    if (!leadToken) return;

    // 1. Deduplicate GTM/GA4/Ads events using localStorage
    // This prevents duplicate firing if the user reloads or hits back button
    const storageKey = `mm_conversion_${leadToken}`;
    const hasConverted = localStorage.getItem(storageKey);

    if (!hasConverted) {
      // Push conversion event to dataLayer
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "lead_conversion",
        lead_id: leadToken,
        transaction_id: leadToken, // Crucial for GTM/Google Ads deduplication
      });

      // Mark as converted in this browser session/storage
      localStorage.setItem(storageKey, "true");
      
      // Clean up old conversion keys (optional, keep last 10)
      try {
        const keys = Object.keys(localStorage).filter(k => k.startsWith("mm_conversion_"));
        if (keys.length > 10) {
          keys.sort().slice(0, keys.length - 10).forEach(k => localStorage.removeItem(k));
        }
      } catch {
        // Silently fail if localStorage is full or restricted
      }
    }

    // 2. Clear the lead gate cookie
    // This ensures that subsequent direct URL access or hard reloads will redirect home
    document.cookie = `${LEAD_GATE_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;

    // 3. Handle Back-Forward Cache (bfcache)
    // If the user hits 'Back' and the browser serves the page from cache,
    // this listener ensures we check if the session is still valid.
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // If the page was loaded from cache, and the cookie is gone, 
        // it means the session has already been "consumed". Redirect home.
        const isCookieStillThere = document.cookie.includes(LEAD_GATE_COOKIE);
        if (!isCookieStillThere) {
          window.location.replace("/");
        }
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [leadToken]);

  return null;
}
