import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL, FORMSPREE_ENDPOINT } from "@/data/contact";
import { PAYPAL_SDK_SRC, paypalPlanId } from "@/data/paypal";

/**
 * PayPalSubscribe - the subscribe button for one plan.
 *
 * Three departures from PayPal's generated snippet, all deliberate:
 *
 * 1. The SDK loads once per page rather than once per button, so a page can
 *    show several plans without loading it repeatedly.
 * 2. Approval shows a confirmation panel instead of an alert(), and states
 *    plainly what happens next.
 * 3. The subscription id is emailed through the same Formspree form the
 *    contact section uses, so a sale leaves a record outside PayPal and the
 *    onboarding can start. If that post fails the id is still on screen with
 *    a prompt to send it, so a paying customer is never lost silently.
 */
declare global {
  interface Window {
    paypal?: any;
  }
}

let sdkPromise: Promise<void> | null = null;

function loadSdk() {
  if (window.paypal) return Promise.resolve();
  if (sdkPromise) return sdkPromise;
  sdkPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = PAYPAL_SDK_SRC;
    script.async = true;
    script.dataset.sdkIntegrationSource = "button-factory";
    script.onload = () => resolve();
    script.onerror = () => {
      sdkPromise = null;
      reject(new Error("PayPal SDK failed to load"));
    };
    document.body.appendChild(script);
  });
  return sdkPromise;
}

type Status = "loading" | "ready" | "done" | "unavailable";

export default function PayPalSubscribe({
  planSlug,
  planName,
  price,
}: {
  planSlug: string;
  planName: string;
  price: number;
}) {
  const planId = paypalPlanId(planSlug);
  const host = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");
  const [subscriptionId, setSubscriptionId] = useState<string | null>(null);

  useEffect(() => {
    if (!planId) {
      setStatus("unavailable");
      return;
    }
    let cancelled = false;
    let buttons: { render?: (el: HTMLElement) => void; close?: () => void } | undefined;

    loadSdk()
      .then(() => {
        if (cancelled || !host.current || !window.paypal) return;
        host.current.innerHTML = "";
        buttons = window.paypal.Buttons({
          style: {
            shape: "pill",
            color: "gold",
            layout: "horizontal",
            label: "subscribe",
          },
          createSubscription: (_data: unknown, actions: any) =>
            actions.subscription.create({ plan_id: planId }),
          onApprove: (data: { subscriptionID?: string }) => {
            const id = data.subscriptionID ?? "unknown";
            setSubscriptionId(id);
            setStatus("done");
            // Tell ourselves a sale happened. Fire and forget: the customer
            // has already paid, so nothing here should block their screen.
            void fetch(FORMSPREE_ENDPOINT, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                source: "PayPal subscription",
                plan: planName,
                price: `$${price}/mo`,
                subscription_id: id,
                message: `New ${planName} subscription started. PayPal subscription id ${id}.`,
                _subject: `New subscription: ${planName} ($${price}/mo)`,
              }),
            }).catch(() => undefined);
          },
          onError: () => {
            if (!cancelled) setStatus("unavailable");
          },
        });
        buttons?.render?.(host.current);
        if (!cancelled) setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("unavailable");
      });

    return () => {
      cancelled = true;
      try {
        buttons?.close?.();
      } catch {
        // the SDK throws if it was never rendered; nothing to clean up then
      }
    };
  }, [planId, planName, price]);

  if (status === "done") {
    return (
      <div className="border border-[#004AAD] bg-white p-6 md:p-8">
        <span className="font-mono-label text-[#004AAD] block mb-3">
          SUBSCRIPTION ACTIVE
        </span>
        <h3 className="text-xl md:text-2xl font-semibold text-[#0D0D0D]">
          You're on the {planName}.
        </h3>
        <p className="lc-body mt-3 text-sm md:text-base text-[#525252] max-w-xl">
          PayPal has your subscription at ${price} a month. We'll email you
          within one business day to start onboarding, and your build goes live
          in under 7 days.
        </p>
        <p className="lc-body mt-4 text-sm text-[#525252]">
          Your PayPal subscription ID:{" "}
          <code className="font-mono-label text-[#0D0D0D]">
            {subscriptionId}
          </code>
          <br />
          Keep it for your records. If you don't hear from us, send it to{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
              `New ${planName} subscription`
            )}&body=${encodeURIComponent(
              `My PayPal subscription ID is ${subscriptionId}.`
            )}`}
            className="lc-link font-medium text-[#004AAD]"
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  // No plan id yet, or PayPal could not load: the contact route still works.
  if (status === "unavailable") {
    return (
      <a
        href="/#contact"
        className="lc-cta inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#004AAD] hover:bg-[#003A87] rounded-sm"
      >
        Get started
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8H13M13 8L8 3M13 8L8 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      </a>
    );
  }

  return (
    <div className="w-full max-w-[24rem]">
      <div ref={host} className="min-h-[46px]" />
      {status === "loading" && (
        <span className="font-mono-label text-[#A3A3A3]">
          LOADING PAYMENT OPTIONS...
        </span>
      )}
      <p className="lc-body mt-3 text-xs text-[#737373]">
        Secure subscription through PayPal. ${price} a month, cancel any time
        from PayPal or by asking us.
      </p>
    </div>
  );
}
