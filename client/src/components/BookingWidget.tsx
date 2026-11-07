import { useEffect } from "react";

/**
 * BookingWidget - the booking form people fill in to start. It is an embedded
 * iframe from our scheduling platform, not a form we host.
 *
 * The embed script posts height updates addressed to the iframe's id, so the
 * id has to stay exactly the one the widget was generated with.
 *
 * shortcut: the script is loaded once per page load and not re-run when React
 * mounts a second copy of this widget, so min-height carries any iframe the
 * script does not resize. Give each embed its own loader if a page ever shows
 * two of them.
 */
const WIDGET_ID = "WROaFwvIhFG9HtCIFHOY";
const IFRAME_ID = `${WIDGET_ID}_1794060702551`;
const EMBED_SRC = "https://user.localcascade.com/js/form_embed.js";

export default function BookingWidget() {
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      id={IFRAME_ID}
      src={`https://user.localcascade.com/widget/booking/${WIDGET_ID}`}
      title="Book a call with Local Cascade"
      allow="payment"
      scrolling="no"
      className="w-full border-0 overflow-hidden bg-[#FAFAF9]"
      style={{ minHeight: "44rem" }}
    />
  );
}
